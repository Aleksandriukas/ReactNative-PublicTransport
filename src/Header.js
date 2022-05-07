import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { Alert, Button } from "react-native";

export const Header = ({ onSubmit }) => {
  const [entryPoint, setEntryPoint] = useState("");
  const [finishPoint, setFinishPoint] = useState("");

  const remove = () => {
    setEntryPoint("");
    setFinishPoint("");
  };
  const pressHandler = () => {
    if (entryPoint.trim() && finishPoint.trim()) {
      onSubmit(entryPoint, finishPoint);
    } else {
      Alert.alert("Emty line");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>From</Text>
      <TextInput
        style={styles.inputSection}
        onChangeText={(text) => setEntryPoint(text)}
        entryPoint={entryPoint}
        placeholder="Input text"
      />
      <Text style={styles.textStyle}>To</Text>
      <TextInput
        style={styles.inputSection}
        onChangeText={(text) => setFinishPoint(text)}
        finishPoint={finishPoint}
        placeholder={"Input text"}
      />
      <View style={styles.button}>
        <Button color="white" title="Find best way" onPress={pressHandler} />
      </View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "28%",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    backgroundColor: "rgba(107, 72, 123, 0.95)",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },

  inputSection: {
    backgroundColor: "rgba(242, 225, 255, 0.7)",
    width: "70%",
    height: "12%",
    borderRadius: 30,
    marginVertical: 5,
  },
  textStyle: {
    color: "white",
    fontSize: 21,
  },
  button: {
    backgroundColor: "rgba(242, 225, 255, 0.7)",
    borderRadius: 20,
    width: "45%",
    marginTop: 25,
  },
});
