// screens/DetailsScreen.tsx
import * as React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type Props = {
  route: DetailsScreenRouteProp;
};

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
