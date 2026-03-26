import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  Button,
  Modal,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";

const logo = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"}/>
      <ActivityIndicator size={"large"} color={"midnightblue"} animating={true}/>
    </View>
  );
}
