import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </GestureHandlerRootView>
  );
}

const Drawer = createDrawerNavigator();
const MyStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={HomeScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
