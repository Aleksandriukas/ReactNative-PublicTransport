import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export const Logout = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Logout</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
});
