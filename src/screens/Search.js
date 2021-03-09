import React, { useState } from "react";
import { Alert, Button, Keyboard, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Row from "../containers/Row";
import { globalStyles } from "../styles/styles";
import { API_KEY } from "./../api";

export default function Search({ navigation }) {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  const pressHandler = () => {
    if (text) {
      //   console.log(text);
      setQuery(text);
      Keyboard.dismiss();
    } else {
      Alert.alert("Error", "Blank field is not allowed", [
        {
          text: "Understood",
        },
      ]);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={{ marginTop: 10, marginBottom: 30 }}>
        <TextInput
          value={text}
          onChangeText={(val) => setText(val)}
          style={{ marginBottom: 10 }}
          label="Search movies..."
        />
        <Button title="Search" onPress={pressHandler} />
      </View>
      <Text>
        {query && (
          <ScrollView
            style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}
          >
            <Row
              title={`Results for "${query}"`}
              query={`search/movie?query=${query}&api_key=${API_KEY}`}
              navigation={navigation}
            />
          </ScrollView>
        )}
      </Text>
    </View>
  );
}
