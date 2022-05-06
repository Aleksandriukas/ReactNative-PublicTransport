import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import { Header } from "./Header";
import Render from "react-native-web/dist/cjs/exports/render";
import { FlatList } from "react-native-gesture-handler";
export const Home = (props) => {
  const [startPoint, setStartPoint] = useState("");
  const [finishPoint, setFinishPoint] = useState("");
  const addStartFinish = (start, finish) => {
    setStartPoint(start);
    setFinishPoint(finish);
  };

  return (
    <View style={styles.container}>
      <Header onSubmit={addStartFinish} />
      <Text>
        {startPoint} {finishPoint}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
