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
  const [todos, setTodos] = useState([]);

  const createID = () => {
    let new_id = 1;
    todos.forEach((todo) => {
      if (todo.id == new_id) {
        new_id = new_id + 1;
      }
    });
    return new_id;
  };

  const createTodo = (todoText) => {
    setTodos(...{ title: todoText, id: createID() });
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Todos</Text>
          <View>
            <FlatList data={todos} />
          </View>
        </View>
        <Text>New Todo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => createTodo(value)}
        />
        <Button title="Add Todo" />
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
    borderWidth: 2,
    borderColor: "gray",
    padding: 10,
    marginVertical: 20,
  },
});
