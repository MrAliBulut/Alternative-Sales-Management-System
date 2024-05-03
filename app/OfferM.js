import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import { icons, images, COLORS, SHADOWS } from "../constants";
import { TxtBox, Button } from "../components";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const OfferM = () => {
  const onEditOfferPressed = () => {
    console.warn("Edit Pressed");
  };
  const onAddOfferPressed = () => {
    console.warn("Add Offer Pressed");
  };
  return (
    <ImageBackground
      source={images.wallpaper}
      style={{ width: wWidth, height: wHeight }}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        <View style={{ marginTop: wHeight * 0.12, ...SHADOWS.medium }}>
          <Text style={{ fontSize: wWidth * 0.08, fontWeight: "bold" }}>
            Current Offers
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          style={{
            marginTop: wHeight * 0.05,
            width: wWidth * 0.9,
            height: wHeight * 0.6,
            backgroundColor: COLORS.doneView,
            ...SHADOWS.small,
          }}
        >
          <View
            style={{
              marginStart: wWidth * 0.1,
              width: wWidth * 0.7,
              height: "100%",
              backgroundColor: "transparent",
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "black",
              alignItems: "center",
            }}
          >
            <View style={{ marginTop: "5%" }}>
              <Text style={{ fontSize: wWidth * 0.065, fontWeight: "bold" }}>
                Offer Name
              </Text>
            </View>
            <View
              style={{
                marginTop: "5%",
                width: "80%",
                height: 1,
                backgroundColor: "black",
              }}
            ></View>
            <View style={{ marginTop: "5%" }}>
              <Text style={{ fontSize: wWidth * 0.13 }}>%30</Text>
            </View>

            <ScrollView
              style={{
                marginTop: "5%",
                width: "70%",
                height: "12%",
                borderColor: "black",
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <View style={{ marginTop: "2%", alignItems: "center" }}>
                <Text style={{ fontSize: wWidth * 0.04 }}>Offer Details</Text>
              </View>
            </ScrollView>
            <Pressable
              onPress={onEditOfferPressed}
              style={{
                marginTop: "5%",
                width: wWidth * 0.3,
                height: wWidth * 0.1,
                backgroundColor: "black",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: COLORS.white }}>Edit Offer</Text>
            </Pressable>
            <View style={{ marginTop: "5%" }}>
              <Text style={{ fontSize: wWidth * 0.05, fontWeight: "bold" }}>
                Affected Products
              </Text>
            </View>
            <View
              style={{
                marginTop: "5%",
                width: "80%",
                height: 1,
                backgroundColor: "black",
              }}
            ></View>
            <ScrollView
              style={{
                marginTop: "5%",
                width: "70%",
                marginBottom: "5%",
                borderColor: "black",
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    marginTop: "2%",
                    width: "70%",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: wWidth * 0.04 }}>
                    Product Group 1
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: "2%",
                    width: "70%",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: wWidth * 0.04 }}>
                    Product Group 2
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              marginStart: wWidth * 0.1,
              width: wWidth * 0.7,
              height: "100%",
              backgroundColor: "transparent",
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "black",
              alignItems: "center",
            }}
          >
            <View style={{ marginTop: "5%" }}>
              <Text style={{ fontSize: wWidth * 0.065, fontWeight: "bold" }}>
                Offer Name
              </Text>
            </View>
            <View
              style={{
                marginTop: "5%",
                width: "80%",
                height: 1,
                backgroundColor: "black",
              }}
            ></View>
            <View style={{ marginTop: "5%" }}>
              <Text style={{ fontSize: wWidth * 0.13 }}>%30</Text>
            </View>

            <ScrollView
              style={{
                marginTop: "5%",
                width: "70%",
                height: "12%",
                borderColor: "black",
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <View style={{ marginTop: "2%", alignItems: "center" }}>
                <Text style={{ fontSize: wWidth * 0.04 }}>Offer Details</Text>
              </View>
            </ScrollView>
            <Pressable
              onPress={onEditOfferPressed}
              style={{
                marginTop: "5%",
                width: wWidth * 0.3,
                height: wWidth * 0.1,
                backgroundColor: "black",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: COLORS.white }}>Edit Offer</Text>
            </Pressable>
            <View style={{ marginTop: "5%" }}>
              <Text style={{ fontSize: wWidth * 0.05, fontWeight: "bold" }}>
                Affected Products
              </Text>
            </View>
            <View
              style={{
                marginTop: "5%",
                width: "80%",
                height: 1,
                backgroundColor: "black",
              }}
            ></View>
            <ScrollView
              style={{
                marginTop: "5%",
                width: "70%",
                marginBottom: "5%",
                borderColor: "black",
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    marginTop: "2%",
                    width: "70%",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: wWidth * 0.04 }}>
                    Product Group 1
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: "2%",
                    width: "70%",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: wWidth * 0.04 }}>
                    Product Group 2
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <Pressable
            onPress={onAddOfferPressed}
            style={{
              marginStart: wWidth * 0.1,
              marginEnd: wWidth * 0.1,
              width: wWidth * 0.25,
              height: wWidth * 0.25,
              backgroundColor: "black",
              borderRadius: wWidth,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "55%",
                height: "5%",
                borderRadius: wHeight,
                backgroundColor: COLORS.white,
                position: "absolute",
              }}
            ></View>
            <View
              style={{
                width: "5%",
                height: "55%",
                borderRadius: wHeight,
                backgroundColor: COLORS.white,
                position: "absolute",
              }}
            ></View>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OfferM;
