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
} from "react-native";
import { useState } from "react";

const logo = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle={"dark-content"} />
    </View>
  );
}
