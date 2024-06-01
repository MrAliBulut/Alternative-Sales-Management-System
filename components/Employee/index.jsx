import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { images, icons, SIZES, Font_Styles } from "../../constants";

const ppImSize = SIZES.wWidth * 0.15;
const settingImSize = SIZES.wWidth * 0.1;
const innerMargin = 0;
const cardColor = "rgb(230,230,230)";

const Employee = () => {
  const employeePressed = () => {
    console.warn("Employe Details Pressed"); //Should direct to employee details. TO DO
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.margin}>
        <Image source={images.myPP} style={styles.EmployeeIMG}></Image>
      </View>
      <View>
        <Text style={styles.EmployeeNameText}>Employee Name</Text>
      </View>
      <TouchableOpacity onPress={employeePressed} style={styles.margin}>
        <Image source={icons.settings} style={styles.SettingsContainer}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: SIZES.wWidth * 0.8,
    height: SIZES.wHeight * 0.1,
    backgroundColor: cardColor,
    marginTop: SIZES.wHeight * 0.01,
    marginBottom: SIZES.wHeight * 0.01,
    borderRadius: 20,
  },
  EmployeeIMG: {
    width: ppImSize,
    height: ppImSize,
    borderRadius: SIZES.wWidth,
  },
  EmployeeNameText: {
    marginStart: innerMargin,
    ...Font_Styles.Regular,
  },
  margin: { marginStart: innerMargin },
  SettingsContainer: {
    width: settingImSize,
    height: settingImSize,
    borderRadius: SIZES.wWidth,
  },
});

export default Employee;
