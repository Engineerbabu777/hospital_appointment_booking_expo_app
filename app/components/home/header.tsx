import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
    const { user, isLoaded, isSignedIn } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }
    return (
        <View style={{
            paddingHorizontal: 15,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
        }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                <View >
                    <Image
                        source={{ uri: user?.imageUrl }}
                        style={{
                            width: 50, height: 50, borderRadius: 99,
                        }}
                    />
                </View>
                <View >
                    <Text style={{
                        fontSize: 18,
                        fontFamily: "Outfit"
                    }}>Hello, 👋</Text>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        fontFamily: "Outfit"
                    }}>{user?.firstName}</Text>
                </View>
            </View>
            <Ionicons name="notifications" size={30} color="black" />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
