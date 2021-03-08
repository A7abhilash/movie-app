import React from "react";
import { View, FlatList } from "react-native";
import Row from "../containers/Row";
import requests from "../requests";
import { globalStyles } from "../styles/styles";

export default function Category({ navigation }) {
  const rows = [
    {
      title: "Action Movies",
      query: requests.fetchActionMovies,
    },
    {
      title: "Romance Movies",
      query: requests.fetchRomanceMovies,
    },
    {
      title: "Comedy Movies",
      query: requests.fetchComedyMovies,
    },
    {
      title: "Horror Movies",
      query: requests.fetchHorrorMovies,
    },
    {
      title: "Documentaries",
      query: requests.fetchDocumentaries,
    },
  ];
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={rows}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Row title={item.title} query={item.query} navigation={navigation} />
        )}
      />
    </View>
  );
}
