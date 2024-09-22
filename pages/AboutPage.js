// make a simple react native page component here

import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function AboutPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../assets/cat.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>
          This is a sample text about the page. You can provide any content here,
          and it will be scrollable due to the ScrollView wrapping it. The image
          above is displayed using the Image component.
        </Text>
        {/* Additional text or content can go here */}
      </ScrollView>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  image: {
    borderColor: "#eee",
    borderWidth: 5,
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});