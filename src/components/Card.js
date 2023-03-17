import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const Card = ({ photoInfo, onOpen }) => {
  const { img, title, name, id } = photoInfo;

  return (
    <TouchableOpacity
      onPress={() => onOpen(id)}
    >
      <View style={[styles.card, styles.shadowProp]}>
        <Image
          source={{uri: img}}
          style={styles.img}
        />
        <View style={styles.textBlock}>
          <Text style={styles.title} numberOfLines={3} >
            {capitalize(title)}
          </Text>
          <Text style={styles.name}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'white',

    borderRadius: 5,

    padding: 8,
    marginBottom: 10,
  },
  img: {
    height: 100,
    width: 100,

    borderRadius: 5,
    marginRight: 20,
  },
  textBlock: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    textAlign: 'right',
  }
});
