import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextComponent, View } from "react-native";

export default function App() {
  const [person, setPerson] = useState({
    name: "Shafara",
    age: 22,
    hobby: "coding",
  });

  const updatePersonInfo = () => {
    setPerson({ name: "Juma", age: 23, hobby: "Reading" });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {person.name}</Text>
      <Text>My age is {person.age}</Text>
      <Text>I love {person.hobby}</Text>
      <View>
        <Button title="Update Person Info" onPress={updatePersonInfo} />
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
