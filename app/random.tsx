import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router'



export default function random() {
  const {n} = useGlobalSearchParams(); 
  return (
    <View>
      <Text>{n}</Text>
    </View>
  )
}