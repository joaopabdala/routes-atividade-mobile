import { View, Text, Button } from 'react-native'
import React from 'react'
import { Href, Link, router,  } from 'expo-router'


const generateRandomId = () => Math.floor(Math.random() * 1000);


export default function index() {
  return (
    <View>
      <Text>index</Text>
      <Button title='Random' 
      onPress={
        ()=> router.push({
           pathname:"/random", 
           params: {n : generateRandomId()}         
          })}
      ></Button>
     <Link href={"/dontKnow"}>
      não sei
     </Link>
     <Link href={"/desafio"}>
     Desafio
     </Link>
    </View>
  )
}