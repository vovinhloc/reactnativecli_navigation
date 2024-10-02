import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MyDrawer = createDrawerNavigator();
const MyStack = createNativeStackNavigator();

function LogoTitle({ navigation }) {
  return (
    <View>
      <Text>Logo custom</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
function ProfileScreen() {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    </GestureHandlerRootView>
  );
}

function SettingScreen({ route, navigation }) {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Setting Screen</Text>
        <Text>id : {route.params?.id}</Text>
        <Button
          title="update Title by Set Opt"
          onPress={() => {
            navigation.setOptions({
              title: "New Setting ",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            });
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

function BackScreen() {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Back Screen</Text>
      </View>
    </GestureHandlerRootView>
  );
}
function RootScreen() {
  return (
    <MyStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MyStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "trang Profile" }}
      />
      <MyStack.Screen
        name="Setting"
        component={SettingScreen}
        options={({ route }) => ({
          title: "Setting " + route.params?.id,
          headerBackTitle: "Custom Back",
          headerBackTitleStyle: { fontSize: 30 },
        })}
      />
      <MyStack.Screen
        name="Back"
        component={BackScreen}
        options={{
          headerBackTitle: "Custom Back",
          headerBackTitleStyle: { fontSize: 30 },
        }}
      />
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

        <Button
          title="Goto BackScreen"
          onPress={() => navigation.navigate("Back", { id: 1 })}
        />
      </View>
    </GestureHandlerRootView>
  );
}

function Home1Screen({ navigation }) {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState("a");
  const a = "ABC";
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count1" />
      ),
    });
  }, [navigation]);
  console.log(count);
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home1 Screen</Text>
        <Text>Count:{a} </Text>
        <Text>Count:{count} </Text>
      </View>
    </GestureHandlerRootView>
  );
}

function Home2Screen({ navigation }) {
  const a = "ABC";
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home2 Screen</Text>
        <Text>{a} </Text>
      </View>
    </GestureHandlerRootView>
  );
}

function Home2Screen_ok({ navigation }) {
  const a = "ABC";
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home2 Screen</Text>
        <Text>{a}</Text>
      </View>
    </GestureHandlerRootView>
  );
}
function App() {
  return (
    <NavigationContainer>
      <MyDrawer.Navigator>
        <MyDrawer.Screen
          name="Root"
          component={RootScreen}
          options={{ headerShown: true }}
        />
        <MyDrawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <MyDrawer.Screen
          name="Home1"
          component={Home1Screen}
          options={{
            headerTitle: (props) => (
              <LogoTitle {...props} navigation={props.navigation} />
            ),
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert("This is a button!")}
            //     title="Info"
            //     color="blue"
            //   />
            // ),
            headerRight: () => <Button title="Update count" />,
          }}
        />
        <MyDrawer.Screen name="Home2" component={Home2Screen} />
      </MyDrawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
