import {
  ImageBackground,
  View,
  Pressable,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import { icons, images, mock_products, COLORS, SHADOWS } from "../constants";
import { Product } from "../components";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const ProductM = ({ navigation }) => {
  const onAddProductPressed = () => {
    console.warn("AddProductPressed");
  };
  return (
    <ImageBackground
      source={images.wallpaper}
      style={{ width: wWidth, height: wHeight }}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        <View
          style={{
            marginTop: wHeight * 0.08,
            alignItems: "center",
            justifyContent: "center",
            ...SHADOWS.medium,
          }}
        >
          <Text style={{ fontSize: wWidth * 0.08, fontWeight: "bold" }}>
            Product Management
          </Text>
        </View>
        <ScrollView
          style={{
            marginTop: wHeight * 0.05,
            marginBottom: wWidth * 0.06,
            width: wWidth * 0.95,
            height: wHeight * 0.565,
            backgroundColor: "transparent",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Product
              image={mock_products.roast_chicken}
              name={"Roast Chicken"}
            ></Product>
            <Product image={mock_products.wine} name={"Wine"}></Product>
            <Product image={mock_products.apple} name={"Apple"}></Product>
            <Product
              image={mock_products.roast_chicken}
              name={"Roast Chicken"}
            ></Product>
            <Product image={mock_products.wine} name={"Wine"}></Product>
            <Product image={mock_products.apple} name={"Apple"}></Product>
          </View>

          <Pressable
            onPress={onAddProductPressed}
            style={{
              marginTop: wHeight * 0.01,
              marginBottom: wHeight * 0.01,
              height: wWidth * 0.16,
              width: wWidth * 0.16,
              backgroundColor: "rgb(240,240,240)",
              borderRadius: wWidth,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              ...SHADOWS.medium,
            }}
          >
            <View
              style={{
                width: "55%",
                height: "9%",
                borderRadius: wHeight,
                backgroundColor: "rgb(0,0,0)",
                position: "absolute",
              }}
            ></View>
            <View
              style={{
                width: "9%",
                height: "55%",
                borderRadius: wHeight,
                backgroundColor: "rgb(0,0,0)",
                position: "absolute",
              }}
            ></View>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProductM;
