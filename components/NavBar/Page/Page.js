import { View, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { images, icons } from "../../../constants";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const Page = ({ size, image, margin, nav }) => {
  const onNav = () => {
    console.warn(nav);
  };
  return (
    <Pressable
      onPress={onNav}
      style={{
        width: size,
        height: size,
        borderRadius: wWidth,
        backgroundColor: "transparent",
        borderWidth: 0.2,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: margin,
      }}
    >
      <Image
        source={image}
        style={{
          width: "60%",
          height: "60%",
        }}
      ></Image>
    </Pressable>
  );
};

export default Page;
