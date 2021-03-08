import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoryStack from "./stacks/CategoryStack";
import HomeStack from "./stacks/HomeStack";

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Category: CategoryStack,
});

export default createAppContainer(AppNavigator);
