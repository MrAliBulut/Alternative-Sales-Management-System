import * as React from "react";
import { useEffect, useState } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, images, COLORS, SHADOWS, SIZES } from "../constants";

import Home from "./Home";

import ProductM from "./Product/ProductM";
import addProduct from "./Product/addProduct";

import OfferM from "./Offer/OfferM";
import addOffer from "./Offer/addOffer";

import EmployeeM from "./Employee/EmployeeM";
import addEmployee from "./Employee/addEmployee";

import log_in from "./LogIn";

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
        name="ProductM"
        component={ProductM}
        options={{
          headerShown: false,
        }}
      />
      <ProductStack.Screen
        name="addProduct"
        component={addProduct}
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
        name="EmployeeM"
        component={EmployeeM}
        options={{
          headerShown: false,
        }}
      />
      <EmployeeStack.Screen
        name="addEmployee"
        component={addEmployee}
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
        name="OfferM"
        component={OfferM}
        options={{
          headerShown: false,
        }}
      />
      <OfferStack.Screen
        name="addOffer"
        component={addOffer}
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
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
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
            component={log_in}
            options={{ headerShown: false }}
          />
        )}
      </LogInStack.Navigator>
    </NavigationContainer>
  );
}

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
    tabBarLabelStyle: { fontSize: SIZES.wWidth * 0.03, fontWeight: "bold" },
  },
});
