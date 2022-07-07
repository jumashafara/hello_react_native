import React from "react";
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
import { Header } from "./src/components/Header";

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

    // for (todo in todos) {
    //   if (todo.id == new_id) {
    //     new_id = new_id + 1;
    //   }
    // }
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
    <View>
      <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>Todos</Text>
        {todos.length >= 1 ? (
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <View style={styles.todo}>
                <Text>{item.title}</Text>
                {/* <Text>{item.id}</Text> */}
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                  <Text style={styles.clearButton}>clear</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View>
            <Text>All clear, no todos to display!</Text>
          </View>
        )}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "152238",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "lightgray",
    padding: 5,
    marginVertical: 8,
    borderRadius: 5,
    width: 200,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
    textAlign: "center",
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
