import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import detailItem from "./detailItem";
import main from "./main";
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="detailItem">
        <Stack.Screen name="main" component={main} />
        <Stack.Screen name="detailItem" component={detailItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
