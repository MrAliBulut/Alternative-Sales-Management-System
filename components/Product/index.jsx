import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { icons, SIZES, SHADOWS, Font_Styles } from "../../constants";

const ppImSize = SIZES.wWidth * 0.15;
const settingImSize = SIZES.wWidth * 0.07;
const innerMargin = SIZES.wWidth * 0.05;
const cardColor = "rgb(240,240,240)";

const Product = ({ image, name }) => {
  const product_pressed = () => {
    console.warn("Product Details Pressed");
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.ProductIMGContainer}>
        <Image source={image} style={styles.ProductIMG}></Image>
      </View>
      <View style={styles.ProductNameContainer}>
        <Text style={styles.ProductNameText}>{name}</Text>
      </View>
      <TouchableOpacity
        onPress={product_pressed}
        style={styles.SettingsContainer}
      >
        <Image source={icons.settings} style={styles.SettingsIMG}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SIZES.wWidth * 0.85,
    height: SIZES.wWidth * 0.2,
    backgroundColor: cardColor,
    marginTop: SIZES.wHeight * 0.01,
    marginBottom: SIZES.wHeight * 0.01,
    borderRadius: 20,
    ...SHADOWS.medium,
  },
  ProductIMGContainer: {
    marginStart: innerMargin,
    backgroundColor: "transparent",
    ...SHADOWS.medium,
  },
  ProductIMG: {
    width: ppImSize,
    height: ppImSize,
    borderRadius: SIZES.wWidth,
  },
  ProductNameContainer: {
    width: SIZES.wWidth * 0.35,
    backgroundColor: "transparent",
  },
  ProductNameText: Font_Styles.Regular,
  SettingsContainer: { marginEnd: innerMargin, ...SHADOWS.medium },
  SettingsIMG: {
    width: settingImSize,
    height: settingImSize,
    borderRadius: SIZES.wWidth,
  },
});

export default Product;
