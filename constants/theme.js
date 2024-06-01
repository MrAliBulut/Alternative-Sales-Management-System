import { StyleSheet, Dimensions } from "react-native";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const COLORS = {
  black: "#000000",

  beige: "#E3C4A8",

  white: "#FFFFFF",
  lightWhite: "#F6F5F5",

  doneView: "transparent",

  customBlue: "#4592AF",
  deepBlue: "#2D687E",
};

const SIZES = {
  wWidth: wWidth,
  wHeight: wHeight,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

//reccurring margins could be given here like this:
//const MARGIN = { down: wHeight * 0.13 };

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

const Font_Styles = {
  Huge: {
    fontSize: wWidth * 0.13,
    fontWeight: "700",
    color: COLORS.deepBlue,
    textAlign: "center",
  },
  Title: {
    fontSize: SIZES.wWidth * 0.08,
    fontWeight: "700",
    color: COLORS.deepBlue,
    textAlign: "center",
  },
  Header: {
    fontSize: SIZES.wWidth * 0.065,
    fontWeight: "500",
    textAlign: "center",
  },
  SubHeader: {
    fontSize: SIZES.wWidth * 0.05,
    fontWeight: "500",
    textAlign: "center",
  },
  Tiny: {
    fontSize: wWidth * 0.032,
    fontWeight: "400",
    color: COLORS.black,
    textAlign: "center",
  },
  Regular: {
    fontSize: wWidth * 0.04,
    fontWeight: "400",
    color: COLORS.black,
    ...SHADOWS.small,
  },
};

export { COLORS, Font_Styles, SIZES, SHADOWS, Common_Styles };
