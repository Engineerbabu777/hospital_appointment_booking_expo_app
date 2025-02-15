import { View, Text } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";

export default function HomeScreen() {
  //   const auth = useAuth();
  const user = useUser();
  console.log({ user });
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
