import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextComponent,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [fruits, setFruits] = useState([
    { name: "mango", id: 1 },
    { name: "pineapple", id: 2 },
    { name: "cherries", id: 3 },
  ]);

  const handlePress = (id) => {
    setFruits((prevFruits) => {
      return prevFruits.filter((fruit) => fruit.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={fruits}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              handlePress(item.id);
            }}
          >
            <Text style={styles.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "pink",
  },
});
