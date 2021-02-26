import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Home({ navigation }) {
  const clickHandler1 = () => {
    navigation.navigate("Characters");
  };

  const clickHandler2 = () => {
    navigation.navigate("Planets");
  };

  const clickHandler3 = () => {
    navigation.navigate("Vehicles");
  };

  return (
    <ImageBackground
      source={require("../images/home_background3.jpg")}
      style={styles.container}
    >
      <Animatable.View animation="zoomInUp">
        <View>
          <Text style={styles.topText}>STAR WARS FINDER</Text>
          <Text style={styles.topText3}>Explore Star Wars!</Text>
        </View>
        <View style={styles.Name}>
          <Text style={styles.Name2}>Search Characters</Text>
        </View>
        <View style={styles.body}>
          <View>
            <Button
              color="#18a1c9"
              title="find characters"
              onPress={clickHandler1}
            />
          </View>
        </View>
        <View style={styles.Name}>
          <Text style={styles.Name2}>Search Planets</Text>
        </View>
        <View style={styles.body}>
          <Button
            color="#18a1c9"
            title="search for planets"
            onPress={clickHandler2}
          />
        </View>
        <View style={styles.Name}>
          <Text style={styles.Name2}>Search Vehicles</Text>
        </View>
        <View style={styles.body}>
          <Button
            color="#18a1c9"
            title="search for vehicles"
            onPress={clickHandler3}
          />
        </View>
      </Animatable.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f5",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#ba6e9f",
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 20,
  },
  topText: {
    fontSize: 30,
    color: "white",
  },
  topText3: {
    fontSize: 30,
    marginBottom: 25,
    color: "white",
  },
  Name: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    fontSize: 20,
  },
  Name2: {
    fontSize: 20,
    color: "white",
  },
  Name3: {
    fontSize: 20,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    backgroundColor: "black",
  },
});
