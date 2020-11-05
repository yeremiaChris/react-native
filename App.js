import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function App() {
  const [todo, setTodo] = useState([
    {
      todo: "",
      date: new Date(),
    },
  ]);
  // handler
  const clickHandler = () => {};
  const handleChange = (value) => {
    setTodo([...todo, { todo: value }]);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="add to do"
        onChangeText={handleChange}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={clickHandler} title="Add" />
      </View>
      <View>
        {todo.map((to, index) => (
          <Text key={index}>{to.todo}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
