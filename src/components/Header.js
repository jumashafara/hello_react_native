import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return <Text style={styles.header}>ShafaraDo</Text>;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "forestgreen",
    padding: 16,
    paddingTop: 40,
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});
