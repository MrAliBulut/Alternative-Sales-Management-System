import {
  ImageBackground,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { images, mock_products, SIZES } from "../../constants";
import { Product, Header, AddComponent } from "../../components";

const ProductM = ({ navigation }) => {
  return (
    <ImageBackground source={images.wallpaper} style={styles.imageBG}>
      <SafeAreaView style={styles.center}>
        <Header title={"Product Management"} />

        <ScrollView style={styles.productsContainer}>
          <View style={styles.center}>
            <Product
              image={mock_products.roast_chicken}
              name={"Roast Chicken"}
            ></Product>
            <Product image={mock_products.wine} name={"Wine"}></Product>
            <Product image={mock_products.apple} name={"Apple"}></Product>
            <Product
              image={mock_products.roast_chicken}
              name={"Roast Chicken"}
            ></Product>
            <Product image={mock_products.wine} name={"Wine"}></Product>
            <Product image={mock_products.apple} name={"Apple"}></Product>
            <AddComponent
              page={"addProduct"}
              navigation={navigation}
            ></AddComponent>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProductM;

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
