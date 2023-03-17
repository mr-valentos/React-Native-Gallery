import {Image, StyleSheet, View} from 'react-native'

export const FullSizeImg = ({route}) => {
  const {photo, color} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: photo}}
        style={[styles.img, {backgroundColor: color}]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: "contain",
  }
});
