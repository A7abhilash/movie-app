import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const pressHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.headerContainer}>
      <MaterialIcons
        name="menu"
        size={30}
        onPress={pressHandler}
        style={styles.icon}
      />
      <View style={styles.header}>
        <Text style={styles.text}>Movie App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#dc3545",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 4,
  },
  header: {
    flexDirection: "row",
  },
});
