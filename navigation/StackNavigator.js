
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './TabNavigator'
import PostScreen from '../screens/PostScreen'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    //Aqui eu tive que mudar de Home pra Tela Inicial
    <Stack.Navigator initialRouteName="Tela Inicial"
    //Adicionei o screenOptions pra mudar o headerStyle
    screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Tela Inicial" component={TabNavigator}/>
      <Stack.Screen name="Tela de Posts" component={PostScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
