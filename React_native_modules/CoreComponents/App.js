import {
  View,
  Alert,
  Button,
} from "react-native";
import { useState } from "react";

const logo = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="alert" onPress={() =>Alert.alert("Invalid Data!")}/>
      <Button title="alert 2" onPress={() =>Alert.alert("Invalid Data!", "DOB incorrect")}/>
      <Button title="alert 3" onPress={() =>Alert.alert("Invalid Data!", "DOB incorrect", [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed") ,
        },
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed"),
        },
        
      ])}/>
    </View>
  );
}
