import { StyleSheet, Text, View } from 'react-native'

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>Gallery</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#41B3A3',
    paddingTop: 50,
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});
