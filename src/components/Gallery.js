import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { Card } from "./Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../app/galerrySlice";


export const Gallery = ({navigation}) => {
  const photoInfo = useSelector((state) => state.gallery.gallery)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  const handleOpenPhoto = (id) => {
    const photo = photoInfo.find(photo => photo.id === id)

    navigation.navigate('Photo', {photo: photo.urls.regular, color: photo.color})
  }

  return (
    <View style={styles.container}>
      {photoInfo.length === 0 ? (
        <View style={[styles.loader, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={photoInfo}
          style={styles.list}
          renderItem={({item}) => (
            <Card
              key={item.id}
              photoInfo={{
                id: item.id,
                img: item.urls.thumb,
                title: item.description
                  || item['alt_description']
                  || 'Nice photo',
                name: item.user.name,
              }}
              onOpen={handleOpenPhoto}
            />
          )} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    display: 'flex',
    padding: 10,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
