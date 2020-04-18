import React, { Component, useState } from "react";
import { StyleSheet, View } from "react-native";
import RadioGroup from "react-native-radio-button-group";
import { ButtonGroup } from "react-native-elements";

export default class HistogramType extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedIndex: 2,
    // };
    // this.updateIndex = this.updateIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // updateIndex(selectedIndex) {
  //   this.setState({ selectedIndex });
  // }

  handleChange(selectedIndex) {
    this.props.onTypeChange(selectedIndex);
  }

  render() {
    const histogramType = this.props.value != undefined ? this.props.value : 0;
    const buttons = ["Total", "Acre", "Olive oil (tn)", "Olive oil (kg)"];
    // const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        selectedButtonStyle={{ backgroundColor: "#037d50" }}
        onPress={this.handleChange}
        selectedIndex={histogramType}
        buttons={buttons}
        containerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 30,
  },
});
