import { createStackNavigator } from "react-navigation-stack";
import Category from "../screens/Category";
import Details from "../screens/Details";

const CategoryStack = createStackNavigator({
  Category: {
    screen: Category,
  },
  Details: {
    screen: Details,
  },
});

export default CategoryStack;
