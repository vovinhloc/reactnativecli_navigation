import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Text>Home Screen1a</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
        <Button title="Go Home" onPress={() => navigation.navigate("Home)")} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </GestureHandlerRootView>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Text>Details Screen</Text>
      <Button
        title="Go to Details Screen ... again"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Pop to top" onPress={() => navigation.popToTop()} />
    </View>
  );
}
const Drawer = createDrawerNavigator();
const MyStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyStack.Navigator initialRouteName="Home">
        <MyStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <MyStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Trang chi tiết" }}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
