import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { useEffect } from "react";
import { Alert, Button } from "react-native";
import { Dimensions } from "react-native";
import { withSpring } from "react-native-reanimated";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import {
  GestureDetector,
  Gesture,
  FlatList,
} from "react-native-gesture-handler";
import { Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const Footer = ({ props }) => {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      console.log(event.translationY);
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -(SCREEN_HEIGHT * 0.6));
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        translateY.value = withSpring(-SCREEN_HEIGHT * 0.1, { damping: 50 });
      } else {
        translateY.value = withSpring(-SCREEN_HEIGHT * 0.5, { damping: 50 });
      }
    });

  //console.log(SCREEN_HEIGHT);
  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT * 0.1, { damping: 50 });
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  if (props[0] === "0") {
    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ButtomSheet, rBottomSheetStyle]}>
          <View style={styles.line}></View>
          <Text>ddd</Text>
        </Animated.View>
      </GestureDetector>
    );
  } else {
    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ButtomSheet, rBottomSheetStyle]}>
          <View>
            <View style={styles.line}></View>
            <Text style={styles.text}>Best way:</Text>
            <Text style={styles.text}>Arrive at: 12:21</Text>
            <View style={styles.way}>
              <Image
                style={styles.image}
                source={require("../assets/5Glogo.png")}
              />
              <Image
                style={styles.image}
                source={require("../assets/7logo.png")}
              />
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    );
  }
};

const styles = StyleSheet.create({
  ButtomSheet: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "rgba(107, 72, 123, 0.95)",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 30,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },

  way: {
    flexDirection: "row",
    width: 64,
    height: 64,
  },
  image: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 50,
    width: 50,
  },
  text: {
    fontSize: 21,
    color: "white",
    marginVertical: 25,
  },
});
