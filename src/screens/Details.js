import React from "react";
import { View } from "react-native";
import {
  Card,
  Headline,
  Paragraph,
  Subheading,
  Text,
} from "react-native-paper";
// import { Text } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { globalStyles } from "../styles/styles";

export default function Details({ navigation }) {
  const movie = navigation.getParam("movie");
  return (
    <View style={globalStyles.container}>
      <Card
        style={{
          backgroundColor: "#343a40",
          margin: 20,
        }}
      >
        <Card.Cover
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          }}
        />
        <Card.Content style={{ paddingVertical: 10 }}>
          <Headline style={globalStyles.text}>
            {movie.original_title || movie.original_name}
          </Headline>
          <Subheading style={globalStyles.text}>
            Rating: {movie.vote_average}
          </Subheading>
          <Text style={globalStyles.text}>
            Release Date: {movie.release_date}
          </Text>
          <Paragraph style={{ marginVertical: 10, ...globalStyles.text }}>
            {movie.overview}
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
