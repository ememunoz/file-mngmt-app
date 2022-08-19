import AsyncStorage from '@react-native-async-storage/async-storage'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import type { ImageInfo } from 'expo-image-picker'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '../components/Button'
import Icon from '../components/Icon'
import { useFileContext } from '../context/FileContext'

type Props = {}

const HomeScreen = () => {
  const { addImage, addSheet, imageInfoArray } = useFileContext()

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      const { uri } = result as ImageInfo
      return uri
    }
  }

  const pickSheet = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'text/csv',
    })
    if (result.type === 'success') {
      const { uri, name } = result
      return { uri, name }
    }
    return {}
  }

  const handleImageUpload = async () => {
    const img = await pickImage()
    if (img) addImage(img)
  }

  const handleSheetUpload = async () => {
    const { uri, name } = await pickSheet()
    if (uri) {
      const str = await FileSystem.readAsStringAsync(uri)
      const data = str.split('\n')
      const header = data.shift() // Removes 'Total' header from the array
      if (header.toLowerCase() !== 'total') {
        console.log('wrong header')
        return
      }
      if (data.some(item => isNaN(Number(item)))) {
        console.log('cells have incorrect data')
        return
      }
      const total = data.reduce((prev, curr) => Number(prev) + Number(curr), 0)
      addSheet({ name, src: uri, total })
    }
  }

  // const handleReset = async () => {
  //   await AsyncStorage.clear()
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to File Management App! 📂</Text>
      <View style={styles.imgWrapper}>
        <Icon name="main" />
      </View>
      <View style={styles.buttonContainer}></View>
      <Button style={styles.button} onPress={handleImageUpload}>
        Upload Image
      </Button>
      <Button style={styles.button} onPress={handleSheetUpload}>
        Upload CSV
      </Button>
      {/* <Button style={styles.button} onPress={handleReset}>
        Reset
      </Button> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 32,
    marginBottom: 48,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '100',
  },
  imgWrapper: {
    flex: 4 / 5,
    marginBottom: 32,
  },
  buttonContainer: {
    flex: 1 / 5,
  },
  button: {
    marginBottom: 8,
  },
})

export default HomeScreen
