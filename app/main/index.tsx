import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';
import { clearAndReplace } from '@/util/route-util';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => router.push({ pathname: './overview/[route]', params: { route: 10 } })} title="Overview route"/>
      <Button onPress={() => clearAndReplace(router, { pathname: './active/[route]', params: { route: 10 } })} title="Select route"/>
      <Button onPress={() => router.push('/(aux)/in-app-notification')} title="In App Notification"/>
      <Button onPress={() => router.push('/(aux)/setting')} title="Setting"/>
      <Button onPress={() => clearAndReplace(router, '/auth')} title="Logout"/>
    </View>
  );
  // @formatter:on
}
