import {
  View,
  Alert,
  Button,
} from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name="Sahil"/>
      <Greet name="Batman"/>
    </View>
  );
}
