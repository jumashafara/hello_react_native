import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
  TextComponent,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "todo1", id: 1 },
    { title: "todo2", id: 2 },
  ]);
  const [title, setTitle] = useState("");

  const createID = () => {
    let new_id = 1;
    todos.forEach((todo) => {
      if (todo.id == new_id) {
        new_id = new_id + 1;
      }
    });
    return new_id;
  };

  const createTodo = () => {
    const new_todo = { title: title, id: createID() };
    setTodos((old_todos) => [...old_todos, new_todo]);
  };

  // Delete item
  const deleteItem = (id) => {
    setTodos((old_todos) => old_todos.filter((todo) => todo.id !== id));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todos</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.todo}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.clearButton}>clear</Text>
            </TouchableOpacity>
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
      <View>
        <Text style={styles.heading}>Add Todo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setTitle(value)}
        />
        <Button title="Add Todo" onPress={() => createTodo()} />
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
    marginVertical: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "lightgray",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
  todo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 2,
    borderColor: "lightgray",
    width: 200,
  },
  clearButton: {
    color: "darkred",
    fontWeight: "700",
  },
});
