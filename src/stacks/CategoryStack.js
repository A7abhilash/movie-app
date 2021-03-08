import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../containers/Header";
import Category from "../screens/Category";
import Details from "../screens/Details";

const CategoryStack = createStackNavigator({
  Category: {
    screen: Category,
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

export default CategoryStack;
