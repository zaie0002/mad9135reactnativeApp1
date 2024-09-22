import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Display an image from the web */}
      <Image 
        source={{ uri: "https://picsum.photos/200/300" }} 
        style={styles.image}
      />
      
      {/* Display Name and Age */}
      <Text style={styles.text}>Name: Test</Text>
      <Text style={styles.text}>Age: 39</Text>

      {/* Button to navigate to the About Page */}
      <TouchableOpacity 
        style={styles.pressableButton}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>Go to About Page</Text>
      </TouchableOpacity>

      {/* Button to navigate to the List Page */}
      <TouchableOpacity 
        style={styles.pressableButton}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.buttonText}>Go to List Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  pressableButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15, 
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomePage;