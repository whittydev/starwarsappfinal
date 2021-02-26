import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import Home from "../screens/home";
import Characters from "../screens/people";
import Planets from "../screens/planets";
import Vehicles from "../screens/vehicles";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  Characters: {
    screen: Characters,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#ba6e9f",
        },
        headerTitle: () => (
          <Text style={{ color: "black", fontSize: 20 }}>Characters</Text>
        ),
      };
    },
  },
  Planets: {
    screen: Planets,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#ba6e9f",
        },
        headerTitle: () => (
          <Text style={{ color: "black", fontSize: 20 }}>Planets</Text>
        ),
      };
    },
  },
  Vehicles: {
    screen: Vehicles,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#ba6e9f",
        },
        headerTitle: () => (
          <Text style={{ color: "black", fontSize: 20 }}>Vehicles</Text>
        ),
      };
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
