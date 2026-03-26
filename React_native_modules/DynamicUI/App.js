import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const[dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  })

  useEffect(() =>{
    const subscription = Dimensions.addEventListener("change", ({ window }) => {setDimensions({ window });});
    return () => subscription?.remove();
  })

  const { window } = dimensions;
  const windowwidth = window.width;
  const windowheight = window.height;
  return (
    <View style={styles.container}>
      <View style={[styles.box,
        {
          width: windowwidth > 500 ? "70%" : "90%",
          height: windowheight > 600 ? "60%" : "90%",
        }
      ]}>
        <Text style={{fontSize: windowwidth > 500 ? 50 : 24}}>Welcome!</Text>
      </View>
    </View>
  );
}

const windowwidth = Dimensions.get("window").width
const windowheight = Dimensions.get("window").height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
    

  // },
});
