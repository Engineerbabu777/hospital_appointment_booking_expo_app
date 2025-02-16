import { View, Text } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import Header from "../components/home/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  //   const auth = useAuth();
  const user = useUser();
  console.log({ user });
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
}
