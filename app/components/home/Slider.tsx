import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getSlider } from "@/services/global.api";

export default function Slider() {
  const [sliderList, setSliderList] = useState([])
  
  useEffect(() => {
    console.log("ok")
    getSliders()
  },[]);

  const getSliders = async () => {
    try {
      const resp = await getSlider();
      setSliderList(resp?.data?.data)
      console.log({ resp:resp.data?.data[0]?.Image?.url });
    } catch (error) {
      console.error("An error occurred while fetching the sliders:", error);
    }
  };
  

  return (
    <View
      style={{
        paddingHorizontal: 15,
        marginTop: 20,
        width:"100%"
      }}
    >
        <FlatList 
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}

        renderItem={({item}:{item:any}) => (
            <Image 
            source={{uri:item?.Image?.url}}
            style={{
                width: Dimensions.get("window").width*0.9,
                height: 180,
                borderRadius:15,
                margin:2
            }}
            />
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({});