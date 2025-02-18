import { View, Text } from "react-native";
import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import Header from "../components/home/header";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../components/home/Search";
import Slider from "../components/home/Slider";
import Categories from "../components/home/categories";

export default function HomeScreen() {
  const user = useUser();

  const [searchValue, setSearchValue] = useState<string>("")
  return (
    <SafeAreaView>
      {/* Header! */}
      <Header />

      {/* Search! */}
      <Search setSearchValue={setSearchValue}/>

      {/* Slider */}
      <Slider />

      {/* Categories! */}
      <Categories />
    </SafeAreaView>
  );
}
