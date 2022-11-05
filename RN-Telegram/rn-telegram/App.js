import React from "react";
import ContactList from "./src/components/ContactList";
import MessageHeader from "./src/components/MessageHeader";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
enableScreens();
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="Telegram"
          component={ContactList}
          options={{
            title: "Telegram",
            headerStyle: {
              backgroundColor: "#212D3B",
            },
            headerLeft: () => (
              <Pressable style={styles.header}>
                <Toaster style={styles.menu__icon} name="menu" />
                <View>
                  <Text style={styles.header__text}>Telegram</Text>
                </View>
                <Toaster style={styles.search__icon} name="search" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="MessageHeader"
          component={MessageHeader}
          options={({ route }) => ({
            title: route.params.contact.name,
            headerStyle: {
              backgroundColor: "#212D3B",
            },
            headerTintColor: "#fff",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  menu__icon: {
    color: "#fff",
    fontSize: 33,
  },
  search__icon: {
    color: "#fff",
    fontSize: 30,
    paddingRight: 25,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header__text: {
    fontSize: 20,
    color: "#fff",
    marginRight: 180,
  },
});
