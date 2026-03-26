import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.Box, styles.lightblueBg]}>
        <Text>LightBlue box</Text>
      </View>
      <View  style={[styles.Box, styles.lightgreenBg]}>
        <Text>LightGreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  Box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  }
})