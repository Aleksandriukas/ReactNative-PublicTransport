import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const Map = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 54.73162,
          longitude: 25.3401,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 54.723, longitude: 25.33764 }}
          title="ViulniusTech"
          description="Main"
          pinColor="blue"
        />

        <Marker
          coordinate={{ latitude: 54.67981, longitude: 25.27872 }}
          title="VilniusTech"
          description="Faculty of Architecture"
          pinColor="yellow"
        />
        <Marker
          coordinate={{ latitude: 54.67538, longitude: 25.2666 }}
          title="VilniusTech"
          description="Electronics Faculty"
          pinColor="black"
        />
        <Marker
          coordinate={{ latitude: 54.68243, longitude: 25.26821 }}
          title="VilniusTech"
          description="Faculty of Transport"
          pinColor="red"
        />
        <Marker
          coordinate={{ latitude: 54.70841, longitude: 25.26869 }}
          title="VilniusTech"
          description="AGAI"
          pinColor="orange"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    //flex: 1,
    top: -100,
    zIndex: 0,
    width: "100%",
    height: "125%",
  },
});
