import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { SIZES, SHADOWS, Font_Styles } from "../../constants";

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
    backgroundColor: "transparent",
    borderRadius: SIZES.wWidth,
    borderColor: "black",
    borderWidth: SIZES.wWidth * 0.001,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
  },
  Text: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: SIZES.wWidth,
    ...Font_Styles.Regular,
    padding: SIZES.wWidth * 0.04,
  },
});

export default TxtBox;
