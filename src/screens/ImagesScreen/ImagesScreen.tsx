import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

import { useFileContext } from '../../context'

const ImagesScreen = () => {
  const { imageInfoArray } = useFileContext()

  const renderItem = ({ item }) => (
    <Image
      source={{ uri: item.src }}
      style={styles.gallery}
      resizeMode="cover"
    />
  )

  return (
    <View style={styles.container}>
      {imageInfoArray.length > 0 ? (
        <FlatList
          data={imageInfoArray}
          numColumns={2}
          keyExtractor={item => item.src}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.message}>
          You haven't uploaded any image, you can upload them in home page! 😄
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 2,
    justifyContent: 'center',
  },
  gallery: {
    aspectRatio: 1,
    flex: 1 / 2,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  message: {
    alignSelf: 'center',
    fontSize: 24,
    color: 'hsl(0, 0%, 60%)',
    textAlign: 'center',
    marginHorizontal: 16,
  },
})

export default ImagesScreen
