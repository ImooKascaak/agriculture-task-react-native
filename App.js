import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";

import HeaderComponent from "./components/HeaderComponent";
import Histogram from "./components/Histogram";
import HistogramType from "./components/HistogramType";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function App() {
  const [histogramType, setHistogramType] = React.useState(0);
  const handleTypeChange = (histogramType) => {
    setHistogramType(histogramType);
  };

  function getHistogramTitle(histogramType) {
    const buttons = ["Total", "Acre", "Olive oil (tn)", "Olive oil (kg)"];
    return `Histogram of ${buttons[histogramType]} values`;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
    >
      <HeaderComponent></HeaderComponent>
      <HistogramType
        value={histogramType}
        onTypeChange={handleTypeChange}
      ></HistogramType>
      <Histogram type={histogramType}></Histogram>
      <Text style={styles.histogramTitle}>
        {getHistogramTitle(histogramType)}
      </Text>
      <Text>{/* {screenWidth} x {screenHeight} */}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerContent: {
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  histogramTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
