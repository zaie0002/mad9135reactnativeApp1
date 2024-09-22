import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";

export default function ListPage({ navigation }) {
  const data = [
    { id: "1", title: "First Item" },
    { id: "2", title: "Second Item" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => {
              console.log(`Pressed: ${item.title}`);
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
      />
      {/* Navigation Buttons */}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f8f9fa",
  },
  item: {
    backgroundColor: "#aqua",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});