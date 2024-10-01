import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Button, Text, TextInput, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MyDrawer = createDrawerNavigator();
const MyStack = createNativeStackNavigator();

function ProfileScreen() {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    </GestureHandlerRootView>
  );
}
function SettingScreen({ route }) {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Setting Screen</Text>
        <Text>id : {route.params?.id}</Text>
      </View>
    </GestureHandlerRootView>
  );
}
function RootScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Profile" component={ProfileScreen} />
      <MyStack.Screen name="Setting" component={SettingScreen} />
    </MyStack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Goto SettingScreeen"
          onPress={() => navigation.navigate("Setting", { id: 1 })}
        />
        <Button
          title="Goto SettingScreeenNested"
          onPress={() =>
            navigation.navigate("Root", {
              screen: "Setting",
              params: { id: 2 },
            })
          }
        />
      </View>
    </GestureHandlerRootView>
  );
}
function App() {
  return (
    <NavigationContainer>
      <MyDrawer.Navigator>
        <MyDrawer.Screen name="Root" component={RootScreen} />
        <MyDrawer.Screen name="Home" component={HomeScreen} />
      </MyDrawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
