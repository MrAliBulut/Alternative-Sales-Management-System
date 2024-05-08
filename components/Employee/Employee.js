import { Pressable, View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { images, icons, COLORS } from "../../constants";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;
const ppImSize = wWidth * 0.15;
const settingImSize = wWidth * 0.1;
const innerMargin = 0;
const cardColor = "rgb(230,230,230)";

const Employee = () => {
  const employeePressed = () => {
    console.warn("Employe Details Pressed");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: wWidth * 0.8,
        height: wHeight * 0.1,
        backgroundColor: cardColor,
        marginTop: wHeight * 0.01,
        marginBottom: wHeight * 0.01,
        borderRadius: 20,
      }}
    >
      <View style={{ marginStart: innerMargin }}>
        <Image
          source={images.myPP}
          style={{ width: ppImSize, height: ppImSize, borderRadius: wWidth }}
        ></Image>
      </View>
      <View>
        <Text
          style={{
            marginStart: innerMargin,
            fontSize: wWidth * 0.04,
            fontWeight: "bold",
          }}
        >
          Employee Name
        </Text>
      </View>
      <Pressable onPress={employeePressed} style={{ marginStart: innerMargin }}>
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

export default Employee;
