import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import { Header } from "./Header";
import BottomSheet, { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Render from "react-native-web/dist/cjs/exports/render";
import { FlatList } from "react-native-gesture-handler";
import { Footer } from "./Footer";
import { CalculateBestWay } from "./CalculateBestWay";
import { Map } from "./Map";
import { Dimensions } from "react-native-web";
export const Home = (props) => {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  const [startPoint, setStartPoint] = useState("");
  const [bestWay, setBestWay] = useState(["0"]);
  const [finishPoint, setFinishPoint] = useState("");
  const addStartFinish = (start, finish) => {
    setStartPoint(start);
    setFinishPoint(finish);
    setBestWay(CalculateBestWay(startPoint, finishPoint));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onSubmit={addStartFinish} style={styles.header} />
      <Map setBestWay={styles.map} />
      <Footer props={bestWay} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  footer: {},
  map: {},
  header: {},
});
