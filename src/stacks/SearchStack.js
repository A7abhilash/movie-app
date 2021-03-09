import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../containers/Header";
import Details from "../screens/Details";
import Search from "../screens/Search";

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
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
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#dc3545",
      },
    },
  },
});

export default SearchStack;
