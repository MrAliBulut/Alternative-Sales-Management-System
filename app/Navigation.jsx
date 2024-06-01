import * as React from "react";
import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS, SHADOWS, SIZES, Font_Styles } from "../constants";

import Rate from "./Rate"; // To Do

import ProductScreen from "./ProductScreen";
import Offer from "./OfferScreen";
import Employee from "./EmployeeScreen";

import LogIn from "./LogIn";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const LogInStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const EmployeeStack = createNativeStackNavigator();
const OfferStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Product_Stack = () => {
  return (
    <ProductStack.Navigator initialRouteName={"Product"}>
      <ProductStack.Screen
        name="ProductManagement"
        component={ProductScreen.Management}
        options={{
          headerShown: false,
        }}
      />
      <ProductStack.Screen
        name="ProductSave"
        component={ProductScreen.Save}
        options={{
          headerShown: false,
        }}
      />
    </ProductStack.Navigator>
  );
};
const Employee_Stack = () => {
  return (
    <EmployeeStack.Navigator
      initialRouteName={"Employee"}
      options={{
        headerShown: false,
      }}
    >
      <EmployeeStack.Screen
        name="EmployeeManagement"
        component={Employee.Management}
        options={{
          headerShown: false,
        }}
      />
      <EmployeeStack.Screen
        name="EmployeeSave"
        component={Employee.Save}
        options={{
          headerShown: false,
        }}
      />
    </EmployeeStack.Navigator>
  );
};

const Offer_Stack = () => {
  return (
    <OfferStack.Navigator
      initialRouteName={"Offer"}
      options={{
        headerShown: false,
      }}
    >
      <OfferStack.Screen
        name="OfferManagement"
        component={Offer.Management}
        options={{
          headerShown: false,
        }}
      />
      <OfferStack.Screen
        name="OfferSave"
        component={Offer.Save}
        options={{
          headerShown: false,
        }}
      />
    </OfferStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Product"}
      screenOptions={({ route, navigationOptions }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let icon;
          try {
            switch (route.name) {
              case "Product": {
                icon = focused ? icons.product.fill : icons.product.outline;
                break;
              }
              case "Employee": {
                icon = focused ? icons.employee.fill : icons.employee.outline;
                break;
              }
              case "Offer": {
                icon = focused ? icons.offer.fill : icons.offer.outline;
                break;
              }
              case "Product_groups": {
                icon = focused
                  ? icons.product_groups.fill
                  : icons.product_groups.outline;
                break;
              }
              case "Graph": {
                icon = focused ? icons.graph.fill : icons.graph.outline;
                break;
              }
            }
          } finally {
            focused ? (color = COLORS.deepBlue) : (color = "black");
          }
          return (
            <Image
              source={icon}
              style={{
                width: SIZES.wWidth * 0.08,
                height: SIZES.wWidth * 0.08,
                tintColor: color,
              }}
            />
          );
        },
        ...styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Product"
        component={Product_Stack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Employee"
        component={Employee_Stack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Offer"
        component={Offer_Stack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Graph"
        component={Rate}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const Root = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("USER:", user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <LogInStack.Navigator>
        {user ? (
          <LogInStack.Screen
            name="application"
            component={Tabs}
            options={{ headerShown: false }}
          />
        ) : (
          <LogInStack.Screen
            name="login"
            component={LogIn}
            options={{ headerShown: false }}
          />
        )}
      </LogInStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    tabBarStyle: {
      position: "absolute",
      height: SIZES.wHeight * 0.13,
      borderTopStartRadius: 80,
      borderTopEndRadius: 80,
      backgroundColor: "transparent",
      borderWidth: 2,
      ...SHADOWS.small,
    },
    tabBarActiveTintColor: COLORS.deepBlue,
    tabBarInactiveTintColor: "black",
    tabBarLabelStyle: Font_Styles.Tiny,
  },
});

export default Root;
