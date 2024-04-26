import { Pressable, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const Button = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.box}>
      <Text style={styles.txt}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: wWidth * 0.65,
    height: wWidth * 0.11,
    backgroundColor: COLORS.deepBlue,
    borderRadius: wWidth,
    borderColor: "black",
    borderWidth: wWidth * 0.001,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    width: "90%",
    height: "60%",
    backgroundColor: COLORS.doneView,
    fontSize: wWidth * 0.055,
    textAlign: "center",
    color: "white",
  },
});

export default Button;
