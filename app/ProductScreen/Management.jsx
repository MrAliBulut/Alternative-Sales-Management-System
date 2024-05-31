import {
  ImageBackground,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { images, SIZES } from "../../constants";
import { Product, Header, AddComponent } from "../../components";

const ProductManagement = ({ navigation }) => {
  return (
    <ImageBackground source={images.wallpaper} style={styles.imageBG}>
      <SafeAreaView style={styles.center}>
        <Header title={"Product Management"} />

        <ScrollView style={styles.productsContainer}>
          <View style={styles.center}>
            <Product
              image={images.mock_products.roast_chicken}
              name={"Roast Chicken"}
            ></Product>
            <Product image={images.mock_products.wine} name={"Wine"}></Product>
            <Product
              image={images.mock_products.apple}
              name={"Apple"}
            ></Product>
            <Product
              image={images.mock_products.roast_chicken}
              name={"Roast Chicken"}
            ></Product>
            <Product image={images.mock_products.wine} name={"Wine"}></Product>
            <Product
              image={images.mock_products.apple}
              name={"Apple"}
            ></Product>
            <AddComponent
              page={"ProductSave"}
              navigation={navigation}
            ></AddComponent>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  center: { alignItems: "center", justifyContent: "center" },

  imageBG: { width: SIZES.wWidth, height: SIZES.wHeight },

  productsContainer: {
    marginTop: SIZES.wHeight * 0.05,
    marginBottom: SIZES.wWidth * 0.06,
    width: SIZES.wWidth * 0.95,
    height: SIZES.wHeight * 0.565,
    backgroundColor: "transparent",
  },
});

export default ProductManagement;
