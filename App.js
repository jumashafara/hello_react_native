import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextComponent,
  View,
  TextInput,
  FlatList,
} from "react-native";
// import { TextInput } from "react-native-web";

export default function App() {
  const [fruits, setFruits] = useState([
    { name: "mango", id: 1 },
    { name: "pineapple", id: 2 },
    { name: "cherries", id: 3 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={fruits}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      {/* {fruits.map((fruit) => (
        <View>
          <Text>{fruit.name}</Text>
        </View>
      ))} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "152238",
    alignItems: "center",
    padding: 20,
    margin: 20,
  },
});
