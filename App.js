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
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Header } from "./src/components/Header";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "todo1", id: 1 },
    { title: "todo2", id: 2 },
  ]);
  const [title, setTitle] = useState("");

  // GENERATE RANDOM ID
  // const createID = () => {
  //   let new_id = 1;
  //   todos.forEach((todo) => {
  //     if (todo.id == new_id) {
  //       new_id = new_id + 1;
  //     }
  //   });

  //   // for (todo in todos) {
  //   //   if (todo.id == new_id) {
  //   //     new_id = new_id + 1;
  //   //   }
  //   // }
  //   return new_id;
  // };

  const createTodo = () => {
    if (title.length > 2) {
      const new_todo = { title: title, id: Math.random() };
      setTodos((old_todos) => [...old_todos, new_todo]);
    } else {
      Alert.alert("OOPS!", "Todos must be more than 2 characters long", [
        {
          text: "Unserstood",
        },
      ]);
    }
  };

  // Delete item
  const deleteItem = (id) => {
    setTodos((old_todos) => old_todos.filter((todo) => todo.id !== id));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Header />
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Add Todo</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTitle(value)}
            />
            <Button title="Add Todo" onPress={() => createTodo()} />
          </View>
          <Text style={styles.heading}>Todos</Text>
          {todos.length >= 1 ? (
            <FlatList
              data={todos.reverse()}
              renderItem={({ item }) => (
                <View style={styles.todo}>
                  <Text>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <MaterialIcons
                      name="delete-forever"
                      color={"darkred"}
                      size={16}
                    />
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

          <StatusBar style="auto" />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
