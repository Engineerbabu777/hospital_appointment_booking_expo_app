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

export default function Index() {
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
