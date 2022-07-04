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
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>ToDo</Text>
        <TextInput />
        <Button />
      </View>
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
