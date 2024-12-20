import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => router.push({pathname: './buyback/[buyback]', params: {buyback: '1'}})} title="Buyback #1"/>
      <Button onPress={() => router.push('/(aux)/in-app-notification')} title="In App Notification"/>
    </View>
  );
  // @formatter:on
}
