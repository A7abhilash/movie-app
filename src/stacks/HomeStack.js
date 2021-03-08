import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../containers/Header";
import Details from "../screens/Details";
import Home from "../screens/Home";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        headerStyle: {
          backgroundColor: "#dc3545",
        },
      };
    },
  },
  Details: {
    screen: Details,
  },
});

export default HomeStack;
