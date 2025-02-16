import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import AppointmentScreen from '../screens/AppointmentScreen'
import ProfileScreen from '../screens/ProfileScreen'


const Tabs = createBottomTabNavigator()
const TabNavigation = () => {
  
    return (
   <Tabs.Navigator >
    <Tabs.Screen name='Home' component={HomeScreen}/>
    <Tabs.Screen name='Appointment' component={AppointmentScreen}/>
    <Tabs.Screen name='Profile' component={ProfileScreen}/>

   </Tabs.Navigator>
  )

}

export default TabNavigation

const styles = StyleSheet.create({})