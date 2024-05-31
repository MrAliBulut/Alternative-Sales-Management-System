import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES, SHADOWS } from "../../constants";

const FONT_headerText = { fontSize: SIZES.wWidth * 0.08, fontWeight: "bold" };

const Header = ({ title }) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    height: SIZES.wHeight * 0.13,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.medium,
  },
  text: { ...FONT_headerText },
});

export default Header;
