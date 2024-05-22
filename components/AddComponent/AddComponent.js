import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import { SIZES, SHADOWS } from "../../constants";

const AddComponent = ({ page, navigation }) => {
  const onAddProductPressed = () => {
    console.log("Navigating to:", page);
    if (navigation && page) {
      navigation.navigate(page);
    } else {
      console.error("Navigation or page is undefined");
    }
  };
  return (
    <Pressable onPress={onAddProductPressed} style={styles.pressable}>
      <View style={styles.plus1}></View>
      <View style={styles.plus2}></View>
    </Pressable>
  );
};

export default AddComponent;

const styles = StyleSheet.create({
  pressable: {
    marginTop: SIZES.wHeight * 0.01,
    marginBottom: SIZES.wHeight * 0.01,
    height: SIZES.wWidth * 0.16,
    width: SIZES.wWidth * 0.16,
    backgroundColor: "rgb(240,240,240)",
    borderRadius: SIZES.wWidth,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.medium,
  },
  plus1: {
    width: "9%",
    height: "55%",
    borderRadius: SIZES.wHeight,
    backgroundColor: "rgb(0,0,0)",
    position: "absolute",
  },
  plus2: {
    width: "55%",
    height: "9%",
    borderRadius: SIZES.wHeight,
    backgroundColor: "rgb(0,0,0)",
    position: "absolute",
  },
});
