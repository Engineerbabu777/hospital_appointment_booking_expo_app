import LoginScreen from "./screens/LoginScreen";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { tokenCache } from "@/cache";
import TabNavigation from "./navigations/TabNavigation";
import { StatusBar } from "react-native";
import {useFonts} from "expo-font"

export default function Index() {

  const [loaded, error] = useFonts({
    "Outfit-Black": require("../assets/fonts/Outfit-Black.ttf"),
    "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "Outfit": require("../assets/fonts/Outfit-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <ClerkLoaded>
        <SignedIn>
          <StatusBar hidden/>
          {/* <NavigationContainer> */}
            <TabNavigation />
          {/* </NavigationContainer> */}
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
