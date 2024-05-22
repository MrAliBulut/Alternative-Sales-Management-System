import {
  ImageBackground,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { icons, images, COLORS, SHADOWS, SIZES } from "../../constants";
import { AddComponent, Employee, Header } from "../../components";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const EmployeeM = ({ navigation }) => {
  return (
    <ImageBackground
      source={images.wallpaper}
      style={{ width: wWidth, height: wHeight }}
    >
      <SafeAreaView style={styles.center}>
        <Header title={"Employee Management"} />
        <ScrollView style={styles.EmployeeContainer}>
          <View style={styles.center}>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <AddComponent page={"addEmployee"} navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EmployeeM;

const styles = StyleSheet.create({
  EmployeeContainer: {
    marginTop: SIZES.wHeight * 0.05,
    marginBottom: SIZES.wWidth * 0.06,
    width: SIZES.wWidth * 0.95,
    height: SIZES.wHeight * 0.565,
    backgroundColor: "transparent",
  },
  center: { alignItems: "center", justifyContent: "center" },
});
