import { SafeAreaView, View, Button, Text, StyleSheet } from "react-native";
import { React, useState } from "react";
import { Header, TxtBox } from "../../components";
import { SIZES, SHADOWS } from "../../constants";
import { firestore } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const EmployeeSave = () => {
  const [Name, set_Name] = useState("");
  const [Mail, set_Mail] = useState("");
  const [Password, set_Password] = useState("");
  const [Authority, set_Authority] = useState("");

  const addEmployee = async () => {
    addDoc(collection(firestore, "Employees"), {
      name: Name,
      mail: Mail,
      password: Password,
      authority: Authority,
    });
  };

  return (
    <SafeAreaView>
      <Header title={"Add Employee"} />
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TxtBox
            placeholder="Name and Surname"
            value={Name}
            setValue={set_Name}
          ></TxtBox>
          <TxtBox
            placeholder="E Mail"
            value={Mail}
            setValue={set_Mail}
          ></TxtBox>
          <TxtBox
            placeholder="Password"
            value={Password}
            setValue={set_Password}
          ></TxtBox>
          <TxtBox
            placeholder="Authority"
            value={Authority}
            setValue={set_Authority}
          ></TxtBox>
        </View>
        <Button
          title={"Add Employee"}
          style={styles.button}
          onPress={addEmployee}
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
export default EmployeeSave;
