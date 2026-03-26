import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  Button,
  Modal,
} from "react-native";
const logo = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="press"
          onPress={() => console.log("Button pressed")}
          color="midnightblue"
        />
        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logo} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("Image pressed")}>
          <Text>
            lorem You can generate Lorem Ipsum in VS Code using the built-in
            Emmet abbreviation support or by installing an extension. YouTube
            YouTube +2 Using Built-in Emmet (Recommended) VS Code includes
            built-in Emmet support, so you don't need any extra extensions for
            basic generation. Generate a default paragraph: Type lorem and then
            press the Tab key or Enter. Generate a specific number of words:
            Type lorem followed by the number of words you need (e.g., lorem20
            for 20 words), then press Tab or Enter. Generate within HTML tags:
            Combine lorem with other Emmet abbreviations. To create a paragraph
            element with 50 words, type plorem50 and press Tab. To create three
            paragraphs, each with 5 words, type p*3lorem5 and press Tab. YouTube
            YouTube +4
          </Text>
        </Pressable>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
