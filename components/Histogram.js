import React, { Component } from "react";
import { View } from "react-native";
import { BarChart, Grid } from "react-native-svg-charts";
import { Text } from "react-native-svg";

import datax from "../mock/co2_data.json";

export default class Histogram extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Generate data to correct format
   * @param {any} data input data
   */
  createData(data, histogramType) {
    let createdData;
    // console.log(histogramType);
    // data.map((row, index) => (row["id"] = index));
    switch (histogramType) {
      case 0:
        createdData = data.map((row) => parseFloat(row.total));
        break;
      case 1:
        createdData = data.map((row) => parseFloat(row.acre));
        break;
      case 2:
        createdData = data.map((row) => parseFloat(row.olive_oil_tn));
        break;
      case 3:
        createdData = data.map((row) => parseFloat(row.olive_oil_kg));
        break;

      default:
        createdData = data.map((row) => parseFloat(row.total));
    }
    // console.log(data);
    return createdData;
  }

  render() {
    // const data = [10, 5, 25, 15, 20];
    const histogramType = this.props.type;
    const data = this.createData(Object.values(datax), histogramType);

    const CUT_OFF = 20;
    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => (
        <Text
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={14}
          fill={value >= CUT_OFF ? "white" : "black"}
          alignmentBaseline={"middle"}
          textAnchor={"middle"}
        >
          {value}
        </Text>
      ));

    return (
      <View
        style={{
          flexDirection: "row",
          height: 450,
          paddingVertical: 15,
          marginTop: 20,
        }}
      >
        <BarChart
          style={{ flex: 1 }}
          data={data}
          svg={{ fill: "rgba(3, 125, 80, 0.9)" }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.HORIZONTAL} />
          {/* <Labels /> */}
        </BarChart>
      </View>
    );
  }
}
