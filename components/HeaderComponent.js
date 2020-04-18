import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

export default function HeaderComponent() {
  return (
    <Header
      containerStyle={styles.header}
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "Agriculture task", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#037d50",
  },
});
