import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { SIZES, COLORS } from "../../constants";
import React from "react";

const FONT_offerName = { fontSize: SIZES.wWidth * 0.065, fontWeight: "bold" };

const FONT_percentage = { fontSize: SIZES.wWidth * 0.13 };

const FONT_innerText = { fontSize: SIZES.wWidth * 0.04 };

const FONT_affectedProducts = {
  fontSize: SIZES.wWidth * 0.05,
  fontWeight: "bold",
};

const ProductGroup = ({ name }) => {
  return (
    <View style={styles.ProductGroupContainer}>
      <Text style={styles.innerText}>{name}</Text>
    </View>
  );
};

const Offer = () => {
  const onEditOfferPressed = () => {
    console.warn("Edit Pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.InnerMargin}>
        <Text style={styles.offerName}>Offer Name</Text>
      </View>
      <View style={styles.line} />

      <View style={styles.InnerMargin}>
        <Text style={styles.percantage}>%30</Text>
      </View>

      <ScrollView style={styles.offerDetailsContainer}>
        <View style={styles.InnerMargin}>
          <Text style={styles.innerText}>Offer Details</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={onEditOfferPressed}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Edit Offer</Text>
      </TouchableOpacity>
      <View style={styles.InnerMargin}>
        <Text style={styles.affectedProducts}>Affected Products</Text>
      </View>
      <View style={styles.line} />
      <ScrollView style={styles.offerDetailsContainer}>
        <View style={styles.InnerMargin}>
          <ProductGroup name={"Product Group 1"} />
          <ProductGroup name={"Product Group 2"} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ProductGroupContainer: {
    marginTop: "2%",
    width: "70%",
    alignItems: "center",
  },
  InnerMargin: {
    marginTop: "5%",
    alignItems: "center",
  },
  container: {
    marginStart: SIZES.wWidth * 0.05,
    width: SIZES.wWidth * 0.7,
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
  },
  offerName: { ...FONT_offerName },
  line: {
    marginTop: "5%",
    width: "80%",
    height: 1,
    backgroundColor: "black",
  },
  percantage: { ...FONT_percentage },
  offerDetailsContainer: {
    marginTop: "5%",
    width: "70%",
    height: "12%",
    borderColor: "black",
    borderRadius: 30,
    borderWidth: 1,
  },
  innerText: { ...FONT_innerText },
  buttonContainer: {
    marginTop: "5%",
    width: SIZES.wWidth * 0.3,
    height: SIZES.wWidth * 0.1,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: COLORS.white },
  affectedProducts: { ...FONT_affectedProducts },
});

export default Offer;
