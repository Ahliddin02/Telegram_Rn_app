import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./AddTodo";
import MessageList from "./MessageList";

const MessageHeader = ({ route }) => {
  const [refreshMessage, setREfreshMessage] = useState([]);
  const { contact } = route.params;
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.header__text}>{contact.name}</Text>
      </View> */}
      <View>
        <MessageList contact={contact} refreshMessage={refreshMessage} />
      </View>
      <View>
        <AddTodo contact={contact} refreshMessage={setREfreshMessage} />
      </View>
    </View>
  );
};
export default MessageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  header: {
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: "#212D3B",
    height: 50,
  },
  header__text: {
    fontSize: 18,
    lineHeight: 40,
    color: "#ffffff",
    marginLeft: 15,
  },
  input: {
    width: 150,
    height: 50,
    backgroundColor: "red",
    marginLeft: 50,
    // marginTop: 350,
  },
});
