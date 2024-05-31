import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";

const FONT_buttonText = { fontSize: SIZES.wWidth * 0.055 };

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box}>
      <Text style={styles.txt}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: SIZES.wWidth * 0.65,
    height: SIZES.wWidth * 0.11,
    backgroundColor: COLORS.deepBlue,
    borderRadius: SIZES.wWidth,
    borderColor: "black",
    borderWidth: SIZES.wWidth * 0.001,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    width: "90%",
    height: "60%",
    backgroundColor: COLORS.doneView,
    ...FONT_buttonText,
    textAlign: "center",
    color: "white",
  },
});

export default Button;
