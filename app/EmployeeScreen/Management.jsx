import {
  ImageBackground,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { images, SIZES, Common_Styles } from "../../constants";
import { AddComponent, Employee, Header } from "../../components";

const EmployeeManagement = ({ navigation }) => {
  return (
    <ImageBackground
      source={images.wallpaper}
      style={Common_Styles.BackgroundSize}
    >
      <SafeAreaView style={Common_Styles.Center}>
        <Header title={"Employee Management"} />
        <ScrollView style={styles.EmployeeContainer}>
          <View style={Common_Styles.Center}>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <AddComponent page={"EmployeeSave"} navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  EmployeeContainer: {
    marginTop: SIZES.wHeight * 0.05,
    marginBottom: SIZES.wWidth * 0.06,
    width: SIZES.wWidth * 0.95,
    height: SIZES.wHeight * 0.565,
    backgroundColor: "transparent",
  },
});

export default EmployeeManagement;
