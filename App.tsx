import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Button, Text, TextInput, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation, route }) {
  // const { itemId } = route?.params;
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
        <Text>itemID : {route.params?.itemId}</Text>
        <Text>itemID : {JSON.stringify(route.params?.itemId)}</Text>
        <Text>Post :{route.params?.posted}</Text>
        <Button
          title="Update itemId"
          onPress={() =>
            navigation.setParams({ itemId: Math.floor(Math.random() * 100) })
          }
        />
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate("Details", { itemId: 42, name: "nguyendat" })
          }
        />
        <Button
          title="Post Message"
          onPress={() => navigation.navigate("PostMessage")}
        />
        {/* <Button title="Go Home" onPress={() => navigation.navigate("Home)")} />
        <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    </GestureHandlerRootView>
  );
}

function PostMessageScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <TextInput
        placeholder="Post Message"
        multiline
        value={postText}
        onChangeText={setPostText}
        style={{
          height: 140,
          width: "100%",
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Button
        title="Post Message"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { posted: postText },
            // merge: false, //overwrite paramrs
            merge: true, // update existing params
          });
        }}
      />
      <Text>Post Message Screen</Text>
      <Text>itemID : {route.params?.itemId}</Text>
      <Text>Name : {route.params?.name}</Text>
    </View>
  );
}
function DetailsScreen({ navigation, route }) {
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
      <Text>itemID : {route.params?.itemId}</Text>
      <Text>Name : {route.params?.name}</Text>
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
          initialParams={{ itemId: 1, name: "Locvv" }}
        />
        <MyStack.Screen
          name="PostMessage"
          component={PostMessageScreen}
          options={{ title: "Post Message" }}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
