import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import { Header } from "./Header";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Render from "react-native-web/dist/cjs/exports/render";
import { FlatList } from "react-native-gesture-handler";
import { Footer } from "./Footer";
import { CalculateBestWay } from "./CalculateBestWay";
export const Home = (props) => {
  const [startPoint, setStartPoint] = useState("");
  const [bestWay, setBestWay] = useState(["0"]);
  const [finishPoint, setFinishPoint] = useState("");
  const addStartFinish = (start, finish) => {
    setStartPoint(start);
    setFinishPoint(finish);
    setBestWay(CalculateBestWay(startPoint, finishPoint));
  };

  return (
    <View style={styles.container}>
      <Header onSubmit={addStartFinish} />
      <Text>
        {startPoint} {finishPoint}
      </Text>
      <Footer props={bestWay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  footer: {},
});
