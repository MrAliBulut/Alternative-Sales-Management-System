import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";

const FONT_NameText = { fontSize: SIZES.wWidth * 0.055 };

const TxtBox = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.Text}
        value={value}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={secureTextEntry}
        capi
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: SIZES.wWidth * 0.78,
    height: SIZES.wWidth * 0.13,
    backgroundColor: "customWhite",
    borderRadius: SIZES.wWidth,
    borderColor: "black",
    borderWidth: SIZES.wWidth * 0.001,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    width: SIZES.wWidth * 0.7,
    height: SIZES.wWidth * 0.07,
    backgroundColor: COLORS.doneView,
    ...FONT_NameText,
    color: "black",
  },
});

export default TxtBox;
