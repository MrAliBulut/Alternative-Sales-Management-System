import { Pressable, View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { images, icons, COLORS, SHADOWS } from "../../constants";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;
const ppImSize = wWidth * 0.15;
const settingImSize = wWidth * 0.07;
const innerMargin = wWidth * 0.05;
const cardColor = "rgb(240,240,240)";
const img_bg_color = "rgb(230,230,230)";

const Product = ({ image, name }) => {
  const product_pressed = () => {
    console.warn("Product Details Pressed");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: wWidth * 0.85,
        height: wWidth * 0.2,
        backgroundColor: cardColor,
        marginTop: wHeight * 0.01,
        marginBottom: wHeight * 0.01,
        borderRadius: 20,
        ...SHADOWS.medium,
      }}
    >
      <View
        style={{
          marginStart: innerMargin,
          backgroundColor: "transparent",
          ...SHADOWS.medium,
        }}
      >
        <Image
          source={image}
          style={{
            width: ppImSize,
            height: ppImSize,
            borderRadius: wWidth,
          }}
        ></Image>
      </View>
      <View style={{ width: wWidth * 0.35, backgroundColor: "transparent" }}>
        <Text
          style={{
            marginStart: 0,
            fontSize: wWidth * 0.04,
            fontWeight: "bold",
            ...SHADOWS.medium,
          }}
        >
          {name}
        </Text>
      </View>
      <Pressable
        onPress={product_pressed}
        style={{ marginEnd: innerMargin, ...SHADOWS.medium }}
      >
        <Image
          source={icons.settings}
          style={{
            width: settingImSize,
            height: settingImSize,
            borderRadius: wWidth,
          }}
        ></Image>
      </Pressable>
    </View>
  );
};

export default Product;
