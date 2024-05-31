import { StyleSheet, Dimensions } from "react-native";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  black: "#33313B",

  beige: "#E3C4A8",

  white: "#FFFFFF",
  lightWhite: "#F6F5F5",

  doneView: "transparent",

  customBlue: "#4592AF",
  deepBlue: "#2D687E",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  wWidth: wWidth,
  wHeight: wHeight,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const MARGIN = { down: wHeight * 0.13 };

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const Common_Styles = StyleSheet.create({
  BackgroundSize: { width: wWidth, height: wHeight },
  Center: { alignItems: "center", justifyContent: "center" },
});

export { COLORS, FONT, SIZES, SHADOWS, Common_Styles };
