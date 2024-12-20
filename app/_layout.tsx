import { Stack, useGlobalSearchParams, usePathname, useSegments } from "expo-router";
import React from 'react';

export default function Index() {
  const pathname = usePathname();
  const segment = useSegments();
  let gParam = useGlobalSearchParams();
  delete gParam["screen"]
  delete gParam["params"]
  console.log(`CurrentLog - pathname - `, pathname, '----', JSON.stringify({
    ...gParam,
  }), '----', segment)

  // @formatter:off
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Welcome' }}/>
      <Stack.Screen name="auth/index" options={{ title: 'Login' }}/>
      <Stack.Screen name="auth/verification" options={{ title: 'Verification' }}/>
      <Stack.Screen name="auth/forgot-password" options={{ title: 'Forgot Password' }}/>
      <Stack.Screen name="auth/change-password" options={{ title: 'Change Password' }}/>
      <Stack.Screen name="main/index" options={{ title: 'List Routes' }}/>
      <Stack.Screen name="main/overview/[route]/index" options={{ title: 'Route Name' }}/>
      <Stack.Screen name="main/overview/[route]/[route_location]/index" options={{ title: 'Route Location Name' }}/>
      <Stack.Screen name="main/overview/[route]/[route_location]/notes" options={{ title: 'Notes' }}/>
      <Stack.Screen name="main/overview/[route]/[route_location]/orders/index" options={{ title: 'Orders' }}/>
      <Stack.Screen name="main/overview/[route]/[route_location]/orders/[order_item]" options={{ title: 'Order Item 1' }}/>
      <Stack.Screen name="main/active/[route]/(index)" options={{ title: 'Active Route', headerShown: false }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/index" options={{ title: 'Survey' }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/bins-handover" options={{ title: 'Bin Handover' }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/order-pickup" options={{ title: 'Order Pickup' }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/flat-rate" options={{ title: 'Delivered Flat Rate' }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/bin-pickup" options={{ title: 'Bin Pickup' }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/dirty-linen" options={{ title: 'Dirty Linen' }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/payment/index" options={{ title: 'Payment' }}/>
      <Stack.Screen name="main/survey/[route]/[route_location]/payment/[payment]" options={{ title: 'Payment #1' }}/>
      <Stack.Screen name="(aux)/change-password" options={{ title: 'Change Password' }}/>
      <Stack.Screen name="(aux)/setting" options={{ title: 'Settings' }}/>
      <Stack.Screen name="(aux)/in-app-notification" options={{ title: 'Notifications' }}/>
    </Stack>
  );
  // @formatter:on
}
