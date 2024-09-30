import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { GestureHandlerRootView } from "react-native-gesture-handler";

// import HomeScreen from "./screens/HomeScreen";
// import DetailsScreen from "./screens/DetailsScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <GestureHandlerRootView>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </GestureHandlerRootView>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <GestureHandlerRootView>
      <Text>This is {route?.params?.name}'s profile</Text>
    </GestureHandlerRootView>
  );
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MyDrawer = createDrawerNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyDrawer.Navigator>
        <MyDrawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <MyDrawer.Screen name="Profile" component={ProfileScreen} />
      </MyDrawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
