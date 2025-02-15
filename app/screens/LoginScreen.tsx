import { useRouter } from "expo-router";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useCallback } from "react";

import * as WebBrowser from "expo-web-browser";

import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useSSO } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startSSOFlow } = useSSO();

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: "oauth_google",
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/login.png")}
          style={{
            width: 200,
            height: 400,
            borderRadius: 15,
            marginTop: 40,
            borderWidth: 5,
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: Colors.White,
          width: "100%",
          height: "100%",
          marginTop: -20,
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
          }}
        >
          Your Ultimate Doctor Appointment Booking App
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "000",
            marginTop: 20,
          }}
        >
          Book appointments effortlessly and manage your health journey
        </Text>

        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
          style={{
            backgroundColor: Colors.Primary,
            borderRadius: 50,
            marginTop: 30,
            padding: 15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.White,
              textAlign: "center",
            }}
          >
            Login/Signup
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar barStyle={"dark-content"} />
    </SafeAreaView>
  );
}
