import React from "react";
import { ScrollView, View } from "react-native";
import {
  Card,
  Headline,
  Paragraph,
  Subheading,
  Text,
} from "react-native-paper";
import { globalStyles } from "../styles/styles";

export default function Details({ navigation }) {
  const movie = navigation.getParam("movie");
  return (
    <View style={globalStyles.container}>
      <Card
        style={{
          backgroundColor: "#343a40",
          margin: 20,
          flex: 1,
        }}
      >
        <Card.Cover
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          }}
        />
        <Card.Content style={{ paddingVertical: 10, flex: 1 }}>
          <Headline style={globalStyles.text}>
            {movie.original_title || movie.original_name}
          </Headline>
          <Subheading style={globalStyles.text}>
            Rating: {movie.vote_average}
          </Subheading>
          <Text style={globalStyles.text}>
            Release Date: {movie.release_date}
          </Text>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 20,
              marginTop: 10,
              ...globalStyles.text,
            }}
          >
            Overview:
          </Text>
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            <Paragraph style={globalStyles.text}>{movie.overview}</Paragraph>
          </ScrollView>
        </Card.Content>
      </Card>
    </View>
  );
}
