import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function dontKnow() {
  const router = useRouter();

  const returnIndex = () => {
    router.push('/');
  };  
  
  return (
    <View>
      <Text>não sei </Text>
      <Button title='Voltar index' onPress={returnIndex}></Button>
    </View>
  )
}