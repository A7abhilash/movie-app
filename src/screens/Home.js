import React from "react";
import { View, FlatList } from "react-native";
import Row from "../containers/Row";
import requests from "../requests";
import { globalStyles } from "../styles/styles";

export default function Home({ navigation }) {
  const rows = [
    {
      title: "Trending",
      query: requests.fetchTrending,
    },
    {
      title: "Netflix Originals",
      query: requests.fetchNetflixOriginals,
    },
    {
      title: "Top Rated",
      query: requests.fetchTopRated,
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
