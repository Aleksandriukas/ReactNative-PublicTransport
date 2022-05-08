import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/Login";
import { Logout } from "./src/Logout";
import { Shortcuts } from "./src/Shortcuts";
import { Home } from "./src/Home";
import { CustomDrawer } from "./src/CustomDrawer";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer backgroundColor="#333">
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: "#fff",
          drawerLabelStyle: { marginLeft: 25, fontSize: 15 },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
