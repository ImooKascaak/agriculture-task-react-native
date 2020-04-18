import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import HeaderComponent from "./components/HeaderComponent";
import Histogram from "./components/Histogram";
import HistogramType from "./components/HistogramType";

export default function App() {
  const [histogramType, setHistogramType] = React.useState(0);
  const handleTypeChange = (histogramType) => {
    setHistogramType(histogramType);
  };

  function getHistogramTitle(histogramType) {
    const buttons = ["Total", "Acre", "Olive oil (tn)", "Olive oil (kg)"];
    let histogramTitle = "Histogram of ";
    switch (histogramType) {
      default:
        histogramTitle += buttons[histogramType];
    }
    histogramTitle += " values";
    return histogramTitle;
  }
  return (
    // <SafeAreaView style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
    >
      {/* <View style={styles.container}> */}
      <HeaderComponent></HeaderComponent>
      <HistogramType
        value={histogramType}
        onTypeChange={handleTypeChange}
      ></HistogramType>
      <Histogram type={histogramType}></Histogram>
      <Text style={styles.histogramTitle}>
        {getHistogramTitle(histogramType)}
      </Text>
      {/* </View> */}
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
    // backgroundColor: "pink",
    marginHorizontal: 20,
  },
  histogramTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
