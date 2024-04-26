import { View, TextInput, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const TxtBox = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.txt}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: wWidth * 0.78,
    height: wWidth * 0.13,
    backgroundColor: "customWhite",
    borderRadius: wWidth,
    borderColor: "black",
    borderWidth: wWidth * 0.001,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    width: wWidth * 0.7,
    height: wWidth * 0.07,
    backgroundColor: COLORS.doneView,
    fontSize: wWidth * 0.055,
    color: "black",
  },
});

export default TxtBox;
