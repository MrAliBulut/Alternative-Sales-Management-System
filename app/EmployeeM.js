import {
  ImageBackground,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { icons, images, COLORS, SHADOWS } from "../constants";
import { Employee } from "../components";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const AdminP = () => {
  return (
    <ImageBackground
      source={images.wallpaper}
      style={{ width: wWidth, height: wHeight }}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        <View
          style={{
            marginTop: wHeight * 0.12,
            alignItems: "center",
            justifyContent: "center",
            ...SHADOWS.medium,
          }}
        >
          <Text style={{ fontSize: wWidth * 0.08, fontWeight: "bold" }}>
            Employee Management
          </Text>
        </View>
        <ScrollView
          style={{
            marginTop: wHeight * 0.05,
            marginBottom: wHeight * 0.25,
            width: wWidth * 0.8,
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 30,
          }}
        >
          <Employee></Employee>
          <Employee></Employee>
          <Employee></Employee>
          <Employee></Employee>
          <Employee></Employee>
          <Employee></Employee>
          <Employee></Employee>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AdminP;
