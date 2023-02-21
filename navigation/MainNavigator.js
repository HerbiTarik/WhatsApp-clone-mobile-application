import { View, Text } from 'react-native'
import React from 'react'
import ChatListScreen from '../screens/ChatListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerTitle: ''
    }}>
    <Tab.Screen name="ChatList" component={ChatListScreen} 
    options={{
      tabBarLabel: 'Chats',
      tabBarIcon: ({size, color}) => <Ionicons name="chatbubble-outline" size={size} color={color} />
    
    }} />
    <Tab.Screen name="Settings" component={SettingsScreen} options={{
      tabBarLabel: 'Settings',
      tabBarIcon: ({size, color}) => <Ionicons name="settings-outline" size={size} color={color} />
    }} />
    </Tab.Navigator>
    
  )
}
const MainNavigator = () => {
  return (
             <Stack.Navigator>
    
      <Stack.Screen name="Home" component={TabNavigator} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="ChatSettings" component={ChatSettingsScreen}  options={{
        headerTitle: "Settings",
        headerBackTitle: "Back",
        
      }}  />
    
      </Stack.Navigator>
  )
}

export default MainNavigator