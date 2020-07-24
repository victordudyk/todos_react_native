import React from "react";
import { StyleSheet, View } from "react-native";

export const AppCard = (props: any) => (
  <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    shadowColor: "#000080",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 9,
    backgroundColor: "#ffffee",
    borderRadius: 10,
  },
});
