import React, { Component } from "react";

import { StyleSheet, Text, View, Image, Icon } from "react-native";

class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions:
        </Text>
        <Text style={styles.mainText}>
          {this.props.description}
        </Text>
        <img src = {'https://openweathermap.org/img/wn/' + this.props.icon + '@2x.png'}
             style={{ width: 100, height: 200 }}
        />
        <Text style={styles.bigText}>
          {this.props.temp}°F
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 130, alignItems: 'center', },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },
  mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
});

export default Forecast;
