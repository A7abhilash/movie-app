import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoryStack from "./stacks/CategoryStack";
import HomeStack from "./stacks/HomeStack";
import SearchStack from "./stacks/SearchStack";

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Category: CategoryStack,
  Search: SearchStack,
});

export default createAppContainer(AppNavigator);
