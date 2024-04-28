import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { icons, images, COLORS, SHADOWS } from "../constants";
import { TxtBox, Button } from "../components";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const home = () => {
  return (
    <ImageBackground
      source={images.wallpaper}
      style={{ width: wWidth, height: wHeight }}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        <View
          style={{
            width: wWidth * 0.9,
            backgroundColor: COLORS.doneView,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: wHeight * 0.05,
          }}
        >
          <Text style={{ fontSize: wWidth * 0.065, fontWeight: "bold" }}>
            Auth Level
          </Text>
          <Text style={{ fontSize: wWidth * 0.065, fontWeight: "bold" }}>
            User name
          </Text>
        </View>

        <View
          style={{
            marginTop: wHeight * 0.1,
            height: wHeight * 0.6,
            width: wWidth * 0.9,
            backgroundColor: COLORS.doneView,
          }}
        >
          <View
            style={{
              height: wHeight * 0.3,
              width: wWidth * 0.9,
              backgroundColor: COLORS.doneView,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: wWidth * 0.45,
                backgroundColor: COLORS.doneView,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View
                source={images.graph}
                style={{
                  width: wWidth * 0.35,
                  height: wHeight * 0.2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={images.rate}
                  style={{ width: wWidth * 0.25, height: wWidth * 0.25 }}
                ></Image>
              </View>
              <Text style={{ fontSize: wWidth * 0.04 }}>Rate Management</Text>
            </View>
            <View
              style={{
                width: wWidth * 0.45,
                backgroundColor: COLORS.doneView,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View
                source={images.offer}
                style={{
                  width: wWidth * 0.35,
                  height: wHeight * 0.2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={images.graph}
                  style={{ width: wWidth * 0.25, height: wWidth * 0.25 }}
                ></Image>
              </View>
              <Text style={{ fontSize: wWidth * 0.04 }}>Offer Management</Text>
            </View>
          </View>
          <View
            style={{
              height: wHeight * 0.3,
              width: wWidth * 0.9,
              backgroundColor: COLORS.doneView,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: wWidth * 0.45,
                backgroundColor: COLORS.doneView,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View
                source={images.graph}
                style={{
                  width: wWidth * 0.35,
                  height: wHeight * 0.2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={images.graph}
                  style={{ width: wWidth * 0.25, height: wWidth * 0.25 }}
                ></Image>
              </View>
              <Text style={{ fontSize: wWidth * 0.04 }}>
                Graph and Statistics
              </Text>
            </View>
            <View
              style={{
                width: wWidth * 0.45,
                backgroundColor: COLORS.doneView,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View
                source={images.graph}
                style={{
                  width: wWidth * 0.35,
                  height: wHeight * 0.2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={images.employee}
                  style={{ width: wWidth * 0.25, height: wWidth * 0.25 }}
                ></Image>
              </View>
              <Text style={{ fontSize: wWidth * 0.04 }}>
                Employee Management
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default home;
