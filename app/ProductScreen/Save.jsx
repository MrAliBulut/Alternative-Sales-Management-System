import { SafeAreaView, View, Button, Text, StyleSheet } from "react-native";
import { React, useState } from "react";
import { Header, TxtBox } from "../../components";
import { SIZES, SHADOWS } from "../../constants";
import { firestore } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
const ProductSave = () => {
  const [Name, set_Name] = useState("");
  const [Price, set_Price] = useState("");
  const [Percentage, set_Percentage] = useState("");
  const [Change, set_Change] = useState("");
  const [Group, set_Group] = useState("");

  const addProduct = async () => {
    addDoc(collection(firestore, "Products"), {
      name: Name,
      price: Price,
      percentage: Percentage,
      change: Change,
      group: Group,
    });
  };

  return (
    <SafeAreaView>
      <Header title={"Add Product"} />
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TxtBox placeholder="Name" value={Name} setValue={set_Name}></TxtBox>
          <TxtBox
            placeholder="Price"
            value={Price}
            setValue={set_Price}
          ></TxtBox>
          <TxtBox
            placeholder="Percentage"
            value={Percentage}
            setValue={set_Percentage}
          ></TxtBox>
          <TxtBox
            placeholder="Change"
            value={Change}
            setValue={set_Change}
          ></TxtBox>
          <TxtBox
            placeholder="Group"
            value={Group}
            setValue={set_Group}
          ></TxtBox>
        </View>
        <Button
          title={"Add Product"}
          style={styles.button}
          onPress={addProduct}
        ></Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SIZES.wWidth,
    height: SIZES.wHeight * 0.65,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.medium,
  },
  boxContainer: {
    height: SIZES.wHeight * 0.45,
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  button: {
    width: SIZES.wWidth * 0.78,
    height: SIZES.wWidth * 0.13,
    backgroundColor: "customWhite",
    borderRadius: SIZES.wWidth,
    borderColor: "black",
    borderWidth: SIZES.wWidth * 0.001,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProductSave;
