import { SafeAreaView, View, Button, Text, StyleSheet } from "react-native";
import { React, useState } from "react";
import { Header, TxtBox } from "../../components";
import { SIZES, SHADOWS } from "../../constants";
import { firestore } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const OfferSave = () => {
  const [Name, set_Name] = useState("");
  const [Description, set_Description] = useState("");
  const [Groups, set_Groups] = useState("");

  const addOffer = async () => {
    addDoc(collection(firestore, "Offers"), {
      name: Name,
      description: Description,
      groups: Groups,
    });
  };

  return (
    <SafeAreaView>
      <Header title={"Add Offer"} />
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TxtBox placeholder="Name" value={Name} setValue={set_Name}></TxtBox>
          <TxtBox
            placeholder="Description"
            value={Description}
            setValue={set_Description}
          ></TxtBox>
          <TxtBox
            placeholder="Groups"
            value={Groups}
            setValue={set_Groups}
          ></TxtBox>
        </View>
        <Button
          title={"Add Offer"}
          style={styles.button}
          onPress={addOffer}
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
export default OfferSave;
