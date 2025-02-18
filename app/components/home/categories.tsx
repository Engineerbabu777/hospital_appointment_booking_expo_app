

import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCategories } from '@/services/global.api';

export default function Categories() {

    const [categories, setCategories] = useState([])
      
      useEffect(() => {
        console.log("ok")
        getSliders()
      },[]);
    
      const getSliders = async () => {
        try {
          const resp = await getCategories();
          setCategories(resp?.data?.data)
          console.log({ resp:resp.data?.data[0] });
        } catch (error) {
          console.error("An error occurred while fetching the sliders:", error);
        }
      };
      
  return (
    <View>
      <Text>Categories</Text>
    </View>
  )
}

const styles = StyleSheet.create({}) 