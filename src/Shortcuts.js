import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export const Shortcuts = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Shortcuts</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
