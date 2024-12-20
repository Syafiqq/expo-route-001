import { Tabs, useSegments } from "expo-router";
import React from 'react';

const stripRouteLocation = (input: string): string => {
  const regex = /.*?\(index\)\/\[route_location]/;
  return input.replace(regex, '');
}

export default function Index() {
  const segments = useSegments();

  // @formatter:off
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Route Name' }}/>
      <Tabs.Screen name="[route_location]" options={ () => {
        const strippedRoute = stripRouteLocation((segments.join('/'))).replace('/orders', '')
        return {
          title: 'Route Location Name',
          headerShown: false,
          tabBarStyle: {
            display: strippedRoute
              ? 'none'
              : 'flex',
          }
        }
      }}/>
      <Tabs.Screen name="buyback" options={{ title: 'Buyback', headerShown: false}}/>
      <Tabs.Screen name="cog" options={{ title: 'Cust. Owned Goods' }}/>
      <Tabs.Screen name="setting" options={{ title: 'Settings', headerShown: false}}/>
    </Tabs>
  );
  // @formatter:on
}
