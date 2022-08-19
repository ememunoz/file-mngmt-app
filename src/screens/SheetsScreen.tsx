import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Icon from '../components/Icon'
import { useFileContext } from '../context/FileContext'

type Props = {}

const SheetsScreen = () => {
  const { sheetInfoArray } = useFileContext()

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imgContainer}>
          <Icon name="csv-file" height={64} width={64} fill="hsl(0, 0%, 0%)" />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.dataFileName}>File name: {item.name}</Text>
          <Text style={styles.dataTotal}>Total: {item.total}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {sheetInfoArray.length > 0 ? (
        <FlatList
          data={sheetInfoArray}
          keyExtractor={item => item.src}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.message}>
          You haven't uploaded any sheets, you can upload them in home page! 😄
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
  },
  message: {
    alignSelf: 'center',
    fontSize: 24,
    color: 'hsl(0, 0%, 60%)',
    textAlign: 'center',
    marginHorizontal: 16,
  },

  itemContainer: {
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    backgroundColor: 'hsl(0, 100%, 100%)',
    shadowColor: 'hsl(0, 0%, 0%)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2.6,
    shadowOpacity: 0.23,
    elevation: 4,
  },
  imgContainer: {
    flex: 1 / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataContainer: {
    flex: 3 / 4,
  },
  dataFileName: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  dataTotal: {},
})

export default SheetsScreen
