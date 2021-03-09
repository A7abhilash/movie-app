import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Snackbar, Title } from "react-native-paper";
import MovieCard from "../components/MovieCard";
import { globalStyles } from "../styles/styles";

export default function Row({ title, query, navigation }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  let BASEURL = `https://api.themoviedb.org/3/${query}`;

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResults([]);

    fetch(BASEURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.results?.length) {
          setResults(data.results);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <View style={globalStyles.row}>
      <Title style={{ ...globalStyles.text, ...styles.title }}>{title}</Title>
      {loading && <ActivityIndicator color="red" />}
      {error && <Snackbar duration={3000}>Error fetching data...</Snackbar>}
      {!loading && !error && results && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { movie: item })}
            >
              <MovieCard movie={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  },
});
