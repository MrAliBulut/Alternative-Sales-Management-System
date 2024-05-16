import { View, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { images, icons } from "../../constants";
import Page from "./Page";

const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

const NavBar = ({ current }) => {
  let home = 0;
  let rate = 0;
  let offer = 0;
  let graph = 0;
  let employee = 0;
  let plus = wWidth * 0.04;
  if (current == "home") {
    home += plus;
  } else if (current == "rate") {
    rate += plus;
  } else if (current == "offer") {
    offer += plus;
  } else if (current == "graph") {
    graph += plus;
  } else if (current == "employee") {
    employee += plus;
  }
  return (
    <View
      style={{
        width: wWidth * 0.9,
        height: wHeight * 0.1,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Page
        size={wWidth * 0.16 + rate}
        image={images.rate}
        nav={"Rate Pressed"}
      ></Page>

      <Page
        size={wWidth * 0.16 + offer}
        image={images.offer}
        nav={"Offer Pressed"}
      ></Page>

      <Page
        size={wWidth * 0.16 + home}
        image={icons.home}
        nav={"Home Pressed"}
      ></Page>

      <Page
        size={wWidth * 0.16 + graph}
        image={images.graph}
        nav={"Graph Pressed"}
      ></Page>

      <Page
        size={wWidth * 0.16 + employee}
        image={images.employee}
        nav={"Employee Pressed"}
      ></Page>
    </View>
  );
};

export default NavBar;
