import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextComponent, View, TextInput } from "react-native";
// import { TextInput } from "react-native-web";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(19);
  const [hobby, setHobby] = useState("Swimming");

  return (
    <View style={styles.container}>
      <Text>Create Person </Text>
      <Text>Name: </Text>
      <TextInput
        style={styles.input}
        placeholder="eg John Doe"
        onChangeText={(value) => setName(value)}
      />

      <Text>Age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="eg 19"
        onChangeText={(value) => setAge(value)}
      />

      <Text>Hobby: </Text>
      <TextInput
        style={styles.input}
        placeholder="eg Swimming"
        onChangeText={(value) => setHobby(value)}
      />

      <View>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
        <Text>Hobby: {hobby}</Text>
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
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#777",
    padding: 2,
    borderRadius: 5,
    width: 100,
  },
});
