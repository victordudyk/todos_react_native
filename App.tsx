import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export interface Todo {
  id: string;
  title: string;
}

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id: string) => {
    const todo: Todo | undefined = todos.find((t) => t.id === id);
    if (todo)
      Alert.alert(
        "Удаление элемента",
        `Вы уверены, что хотите удалить "${todo.title}"?`,
        [
          {
            text: "Отмена",
            style: "cancel",
          },
          {
            text: "Удалить",
            style: "destructive",
            onPress: () => {
              setTodoId(null);
              setTodos((prev) => prev.filter((todo) => todo.id !== id));
            },
          },
        ],
        { cancelable: false }
      );
  };

  const updateTodo = (id: string, title: string) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
