import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/app/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Search({
  setSearchValue
}: {
  setSearchValue: Dispatch<SetStateAction<string>>;
}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <View
      style={{
        paddingHorizontal: 15,
        marginTop: 10
      }}
    >
      <View style={styles.medicineGroup}>
        <FontAwesome
          style={styles.icon}
          name="search"
          size={24}
          color="black"
        />
        <TextInput
          placeholder="Enter to search..."
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={e => {
            setSearchValue(searchTerm);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  medicineGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    marginTop: 10,
    backgroundColor: "white"
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1
  },
  icon: {
    color: Colors.Primary,
    borderRightWidth: 1,
    paddingRight: 10,
    borderColor: Colors.DarkGray
  }
});
