import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView,Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const windowwidth = useWindowDimensions().width
  const windowheight = useWindowDimensions().height 
  return (
    <SafeAreaView style={styles.safeContainer}>

   
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum"
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios:{
        color: "purple",
        fontSize: 24,
        fontStlye: "italic",
      },
      android:{
        color: "blue",
        fontSize: 30,
      }
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
