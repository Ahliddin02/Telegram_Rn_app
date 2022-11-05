import React, { useState } from "react";
import { StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
import { Toaster } from "react-hot-toast";

export const AddTodo = ({ contact, refreshMessage }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: value, sender: 1000, receiver: contact.id }),
    };
    fetch("http://192.168.1.104:3002/messages-save", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setValue({ data });
      });

    fetch("http://192.168.1.104:3002/messages-list")
      .then((res) => res.json())
      .then((loadMessages) => refreshMessage(loadMessages));
    setValue("");
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Toaster style={styles.gif} name="gif" size={35} color="#677484" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="Message"
          placeholderTextColor="#FFF"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </TouchableWithoutFeedback>
      <Toaster style={styles.send} name="send" size={25} color="#72B2E1" onPress={pressHandler} />
    </KeyboardAvoidingView>
  );
};
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    // padding: 24,
    // marginTop: 50,
    justifyContent: "flex-end",
    // position: "absolute",
    // zIndex: 999,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    marginLeft: -20,
    backgroundColor: "#212D3B",
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    marginLeft: -20,
    backgroundColor: "#212D3B",
  },
  input: {
    width: "78%",
    padding: 11,
    color: "white",
    placeholderTextColor: "#1D2A3A",
    marginLeft: -5,
    display: "flex",
    alignItems: "center",
  },
  send: {
    marginRight: 10,
  },
  gif: {
    paddingLeft: 25,
  },
});
