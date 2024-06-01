import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import {
  icons,
  images,
  COLORS,
  SHADOWS,
  SIZES,
  Font_Styles,
  Common_Styles,
} from "../constants";
import { TxtBox, Button } from "../components";

import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = ({ navigation }) => {
  const [userMail, set_userMail] = useState("");
  const [password, set_password] = useState("");
  const [loading, set_loading] = useState(false);

  const handle_login = async () => {
    set_loading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userMail,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign In Failed", error.message);
    } finally {
      set_loading(false);
    }
  };

  const onLoginPressed = () => {
    handle_login();
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
      style={Common_Styles.BackgroundSize}
    >
      <SafeAreaView style={Common_Styles.Center}>
        <View style={styles.TitleContainer}>
          <Text style={styles.TitleText}>Welcome</Text>
          <View style={styles.TitleLine}></View>
        </View>

        <View style={styles.DetailsContainer}>
          <Text style={styles.DetailsText}>
            Contact your company representative for registration procedures
          </Text>
        </View>

        <View style={styles.TextBoxContainer}>
          <TxtBox
            placeholder="E Mail"
            value={userMail}
            setValue={set_userMail}
          />

          <TxtBox
            placeholder="Password"
            value={password}
            setValue={set_password}
            secureTextEntry
          />
        </View>

        <View style={styles.ButtonContainer}>
          <Button text={"Log in"} onPress={onLoginPressed} />
        </View>

        <Pressable onPress={onForgotPressed} style={styles.ForgetContainer}>
          <Text style={styles.ForgetText}>Forgot Password?</Text>
        </Pressable>

        <View style={styles.MediaContainer}>
          <View style={styles.MediaLineLeft}></View>
          <View>
            <Text style={styles.MediaText}>Social Media</Text>
          </View>
          <View style={styles.MediaLineRight}></View>
        </View>

        <View style={styles.MediaIconContainer}>
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
};

const styles = StyleSheet.create({
  TitleContainer: {
    height: SIZES.wHeight * 0.1,
    marginTop: SIZES.wHeight * 0.15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    ...SHADOWS.medium,
  },
  TitleText: Font_Styles.Huge,
  TitleLine: {
    width: SIZES.wWidth * 0.7,
    height: SIZES.wWidth * 0.0018,
    backgroundColor: COLORS.deepBlue,
    borderRadius: SIZES.wWidth,
    marginTop: SIZES.wHeight * 0.008,
  },
  DetailsContainer: {
    width: SIZES.wWidth * 0.8,
    height: SIZES.wHeight * 0.05,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: SIZES.wHeight * 0.025,
    ...SHADOWS.medium,
  },
  DetailsText: Font_Styles.Tiny,
  TextBoxContainer: {
    height: SIZES.wHeight * 0.2,
    backgroundColor: "transparent",
    justifyContent: "space-evenly",
    ...SHADOWS.small,
  },
  ButtonContainer: {
    height: SIZES.wHeight * 0.08,
    backgroundColor: "transparent",
    justifyContent: "center",
    ...SHADOWS.medium,
  },
  ForgetContainer: {
    ...SHADOWS.medium,
    backgroundColor: "transparent",
  },
  //special for this screen
  ForgetText: {
    color: COLORS.customBlue,
  },
  MediaContainer: {
    height: SIZES.wHeight * 0.05,
    width: SIZES.wWidth * 0.8,
    backgroundColor: "transparent",
    marginTop: SIZES.wHeight * 0.04,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    ...SHADOWS.medium,
  },
  MediaLineLeft: {
    height: "1.5%",
    width: "30%",
    backgroundColor: COLORS.customBlue,
    borderRadius: SIZES.wWidth,
  },
  MediaText: Font_Styles.Regular,
  MediaLineRight: {
    height: "1.5%",
    width: "30%",
    backgroundColor: COLORS.customBlue,
    borderRadius: SIZES.wWidth,
  },
  MediaIconContainer: {
    backgroundColor: "transparent",
    width: SIZES.wWidth * 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.wHeight * 0.02,
    ...SHADOWS.medium,
  },
});

export default LogIn;
