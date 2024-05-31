import React from "react";
import {
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import { images, COLORS, SHADOWS, SIZES, Common_Styles } from "../../constants";
import { Header, Offer, AddComponent } from "../../components";

const OfferManagement = ({ navigation }) => {
  return (
    <ImageBackground
      source={images.wallpaper}
      style={Common_Styles.BackgroundSize}
    >
      <SafeAreaView style={Common_Styles.Center}>
        <Header title={"Current Ofers"} />

        <ScrollView horizontal={true} style={styles.productContainer}>
          <Offer />
          <Offer />

          <View style={styles.plusContainer}>
            <AddComponent page={"OfferSave"} navigation={navigation} />
          </View>
        </ScrollView>

        <Header />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: SIZES.wWidth * 0.15,
    height: SIZES.wHeight * 0.63,
    backgroundColor: COLORS.doneView,
    ...SHADOWS.small,
  },
  plusContainer: {
    marginStart: SIZES.wWidth * 0.1,
    width: SIZES.wWidth * 0.2,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OfferManagement;
