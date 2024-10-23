import React from "react";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "lime",
          },
          headerTintColor: "red",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >

        <Tabs.Screen
            name="index"
            options={{
                title: 'perfil',
            }}
        >
        </Tabs.Screen>
        
        <Tabs.Screen
            name="feed"
            options={{
                title: 'feed',
            }}
        >

        </Tabs.Screen>
      </Tabs>
  );
}
