import React from "react";
import {
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import { images, COLORS, SHADOWS, SIZES } from "../../constants";
import { Header, Offer, AddComponent } from "../../components";

const OfferM = ({ navigation }) => {
  return (
    <ImageBackground source={images.wallpaper} style={styles.background}>
      <SafeAreaView style={styles.centers}>
        <Header title={"Current Ofers"} />

        <ScrollView horizontal={true} style={styles.productContainer}>
          <Offer />
          <Offer />

          <View style={styles.plusContainer}>
            <AddComponent page={"addOffer"} navigation={navigation} />
          </View>
        </ScrollView>

        <Header />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { width: SIZES.wWidth, height: SIZES.wHeight },
  center: { alignItems: "center", justifyContent: "center" },
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

export default OfferM;
