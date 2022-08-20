import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { Icon } from '../../components'
import { HomeScreen, ImagesScreen, SheetsScreen } from '../../screens'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'hsl(243, 100%, 69%)',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              height={size}
              width={size}
              fill={color}
              style={{ marginBottom: 4 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Images"
        component={ImagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="image" height={size} width={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sheets"
        component={SheetsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="csv-file" height={size} width={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
