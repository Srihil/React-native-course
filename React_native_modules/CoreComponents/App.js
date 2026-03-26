import { View, Text,Image, ImageBackground } from "react-native";
const logo = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={logo} style={{ height: 300, width: 300}}/>
      <Image source={{uri : "https://picsum.photos/300"}} style={{ height: 300, width: 300}}/> */}
      <ImageBackground source={logo} style={{ flex: 1 }}>
        <Text>Image Text</Text>
      </ImageBackground>
    </View>
  );
}