import * as React from "react";
import { Text, Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, images, COLORS, SHADOWS } from "../constants";

import Home from "./Home";
import ProductM from "./ProductM";
import OfferM from "./OfferM";
import EmployeeM from "./EmployeeM";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const wWidth = Dimensions.get("screen").width;
const wHeight = Dimensions.get("screen").height;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Product"}
        screenOptions={({ route, navigationOptions }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            let icon;
            if (route.name === "Product") {
              icon = focused ? icons.product.fill : icons.product.outline;
            } else if (route.name === "Employee") {
              icon = focused ? icons.employee.fill : icons.employee.outline;
            } else if (route.name === "Offer") {
              icon = focused ? icons.offer.fill : icons.offer.outline;
            } else if (route.name === "Product_groups") {
              icon = focused
                ? icons.product_groups.fill
                : icons.product_groups.outline;
            } else if (route.name === "Graph") {
              icon = focused ? icons.graph.fill : icons.graph.outline;
            }
            if (focused) {
              color = COLORS.deepBlue;
            } else {
              color = "black";
            }

            return (
              <Image
                source={icon}
                style={{
                  width: wWidth * 0.08,
                  height: wWidth * 0.08,
                  tintColor: color,
                }}
              />
            );
          },
          tabBarStyle: {
            position: "absolute",
            height: wHeight * 0.13,
            borderTopStartRadius: 80,
            borderTopEndRadius: 80,
            backgroundColor: "transparent",
            borderWidth: 2,
            ...SHADOWS.small,
          },
          tabBarActiveTintColor: COLORS.deepBlue,
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: { fontSize: wWidth * 0.03, fontWeight: "bold" },
        })}
      >
        <Tab.Screen
          name="Product"
          component={ProductM}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Employee"
          component={EmployeeM}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Offer"
          component={OfferM}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Graph"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
