import { Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:"#fff"
      }}
    >
     <LoginScreen />
    </View>
  );
}
