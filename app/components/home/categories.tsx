

import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCategories } from '@/services/global.api';
import Colors from '@/app/constants/Colors';

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        console.log("ok")
        getSliders()
    }, []);

    const getSliders = async () => {
        try {
            const resp = await getCategories();
            setCategories(resp?.data?.data)
            console.log({ resp: resp.data?.data[0] });
        } catch (error) {
            console.error("An error occurred while fetching the sliders:", error);
        }
    };

    return (
        <View style={{
            padding: 15
        }}>
            <View style={{
                backgroundColor: "#f2f2f2",
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}
                >Doctor Speciality</Text>
                <Text style={{
                    fontSize: 16,
                    color: Colors.Primary
                }}>View all</Text>
            </View>

            <FlatList
                data={categories}
         
                renderItem={({ item }: { item: any }) => (
                    <View style={{
                        alignItems: "center",

                    }}>
                        <Pressable
                            style={{
                                backgroundColor: "#0000ff",
                                opacity: 0.5,
                                padding: 10,
                                overflow: "hidden",
                                borderRadius: 99,

                            }}
                        >

                            <Image
                                source={{ uri: item?.Icon?.url }}
                                style={{
                                    width: 60,
                                    height: 60,
                                }}
                            />
                           
                        </Pressable>
                        <Text style={{
                                color: Colors.Primary,
                                fontSize: 14,
                                fontWeight: "500"
                            }}>{item?.Name}</Text>

                    </View>
                )}
                keyExtractor={(item) => item?.id}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: "space-evenly"
                }}
                numColumns={3}

            />
        </View>
    )
}

const styles = StyleSheet.create({}) 