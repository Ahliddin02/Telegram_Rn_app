import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground, ScrollView } from "react-native";

const MessageList = ({ contact, refreshMessage }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.104:3002/messages-list")
      .then((res) => res.json())
      .then((loadMessages) => setMessages(loadMessages));
  }, [refreshMessage]);
  const image = { uri: "https://i.pinimg.com/474x/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg" };
  return (
    <ImageBackground source={image} style={styles.container}>
      <ScrollView style={{ height: "100%" }}>
        <View>
          {messages
            .filter(
              (message) =>
                (message.sender === contact.id && message.receiver === 1000) ||
                (message.sender === 1000 && message.receiver === contact.id)
            )
            .map((newMessages) => (
              <View key={newMessages.id}>
                <View>
                  <Text style={styles.text}>{newMessages.text}</Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default MessageList;
const styles = StyleSheet.create({
  container: {
    width: 412,
    height: 580,
    borderLeft: 1,
    backgroundColor: "#0e1621",
    padding: 12,
    display: "flex",
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    backgroundColor: "#3E6189",
    width: 100,
    height: 35,
    fontSize: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 10,
    paddingLeft: 15,
  },
});
