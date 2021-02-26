import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import homeStack from "./homeStack";
import Characters from "../screens/people";
import Planets from "../screens/planets";
import Vehicles from "../screens/vehicles";

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: homeStack,
    },
    Characters: {
      screen: Characters,
    },
    Planets: {
      screen: Planets,
    },
    Vehicles: {
      screen: Vehicles,
    },
  },
  {
    drawerBackgroundColor: "#ba6e9f",
    tintColor: "white",
  }
);

export default createAppContainer(RootDrawerNavigator);
