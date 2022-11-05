import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ContactList = ({ navigation }) => {
  const [fetchContact, setFetchContact] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.104:3002/contacts-list")
      .then((response) => response.json())
      .then((loadMessage) => setFetchContact(loadMessage));
  }, []);

  return (
    <View>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.container}>
          {fetchContact.map((el, index) => (
            <Text
              title="MessageHeader"
              onPress={() => {
                navigation.navigate("MessageHeader", { contact: el });
              }}
              key={index}
              style={styles.text}
            >
              {el.name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default ContactList;
const styles = StyleSheet.create({
  container: {
    padding: 15,
    fontSize: 50,
    marginTop: 0,
    borderColor: "#eee",
    marginBottom: 10,
    backgroundColor: "#17212b",
    height: "100%",
  },
  text: {
    fontSize: 20,
    lineHeight: 50,
    color: "#ffffff",
    // borderWidth: 5,
    borderBottomWidth: 1,
  },
});
