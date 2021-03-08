import React from "react";
import { Card, Subheading, Title } from "react-native-paper";
import { globalStyles } from "../styles/styles";

export default function MovieCard({ movie }) {
  return (
    <Card
      style={{
        backgroundColor: "#343a40",
        width: 200,
        marginVertical: 5,
        marginHorizontal: 10,
      }}
    >
      <Card.Cover
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
      />
      <Card.Content style={{ paddingVertical: 10 }}>
        <Title style={globalStyles.text}>
          {movie.original_title || movie.original_name}
        </Title>
        <Subheading style={globalStyles.text}>
          Rating: {movie.vote_average}
        </Subheading>
      </Card.Content>
    </Card>
  );
}
