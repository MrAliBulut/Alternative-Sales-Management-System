import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { icons, images, COLORS, SHADOWS } from "../constants";
import { TxtBox, Button } from "../components";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    console.warn("Login Pressed");
  };
  const onForgotPressed = () => {
    console.warn("Forgot Password Pressed");
  };

  const onTwitterPressed = () => {
    console.warn("Twitter Pressed");
  };
  const onLinkedInPressed = () => {
    console.warn("LinkedIn Pressed");
  };
  const onInstagramPressed = () => {
    console.warn("Instagram Pressed");
  };

  return (
    <ImageBackground
      source={images.wallpaper}
      style={{ width: wWidth, height: wHeight }}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        <View
          style={{ height: wHeight * 0.15, backgroundColor: COLORS.doneView }}
        ></View>

        <View
          style={{
            height: wHeight * 0.1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.doneView,
            ...SHADOWS.medium,
          }}
        >
          <Text
            style={{
              color: COLORS.deepBlue,
              fontSize: wWidth * 0.13,
              fontWeight: "700",
            }}
          >
            Welcome
          </Text>
          <View
            style={{
              width: wWidth * 0.7,
              height: wWidth * 0.0018,
              backgroundColor: COLORS.deepBlue,
              borderRadius: wWidth,
              marginTop: wHeight * 0.008,
            }}
          ></View>
        </View>

        <View
          style={{
            width: wWidth * 0.8,
            height: wHeight * 0.05,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.doneView,
            marginTop: wHeight * 0.025,
            ...SHADOWS.medium,
          }}
        >
          <Text
            style={{
              color: COLORS.customBlue,
              fontSize: wWidth * 0.032,
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Contact your company representative for registration procedures
          </Text>
        </View>

        <View
          style={{
            height: wHeight * 0.2,
            backgroundColor: COLORS.doneView,
            justifyContent: "space-evenly",
            ...SHADOWS.small,
          }}
        >
          <TxtBox
            placeholder="Username"
            value={userName}
            setValue={setUserName}
          />

          <TxtBox
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
        </View>

        <View
          style={{
            height: wHeight * 0.08,
            backgroundColor: COLORS.doneView,
            justifyContent: "center",
            ...SHADOWS.medium,
          }}
        >
          <Button text={"Log in"} onPress={onLoginPressed} />
        </View>

        <Pressable
          onPress={onForgotPressed}
          style={{
            marginEnd: wWidth * 0.33,
            ...SHADOWS.medium,
            backgroundColor: "",
          }}
        >
          <Text
            style={{
              color: COLORS.customBlue,
            }}
          >
            Forgot Password?
          </Text>
        </Pressable>

        <View
          style={{
            height: wHeight * 0.05,
            width: wWidth * 0.8,
            backgroundColor: COLORS.doneView,
            marginTop: wHeight * 0.04,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            ...SHADOWS.medium,
          }}
        >
          <View
            style={{
              height: "1.5%",
              width: "30%",
              backgroundColor: COLORS.customBlue,
              borderRadius: wWidth,
            }}
          ></View>
          <View>
            <Text style={{ fontSize: wWidth * 0.04 }}>Social Media</Text>
          </View>
          <View
            style={{
              height: "1.5%",
              width: "30%",
              backgroundColor: COLORS.customBlue,
              borderRadius: wWidth,
            }}
          ></View>
        </View>

        <View
          style={{
            backgroundColor: COLORS.doneView,
            width: wWidth * 0.4,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: wHeight * 0.02,
            ...SHADOWS.medium,
          }}
        >
          <Pressable onPress={onTwitterPressed}>
            <Image source={icons.twitter}></Image>
          </Pressable>
          <Pressable onPress={onLinkedInPressed}>
            <Image source={icons.linkedin}></Image>
          </Pressable>
          <Pressable onPress={onInstagramPressed}>
            <Image source={icons.instagram}></Image>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
