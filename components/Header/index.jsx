import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES, Font_Styles } from "../../constants";

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
  },
  text: Font_Styles.Title,
});

export default Header;
