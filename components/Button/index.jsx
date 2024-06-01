import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES, COLORS, Font_Styles } from "../../constants";

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: SIZES.wWidth * 0.47,
    height: SIZES.wWidth * 0.11,
    backgroundColor: COLORS.deepBlue,
    borderRadius: SIZES.wWidth,
    borderColor: "black",
    borderWidth: SIZES.wWidth * 0.001,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    width: "90%",
    height: "50%",
    ...Font_Styles.Regular,
    textAlign: "center",
    color: "white",
  },
});

export default Button;
