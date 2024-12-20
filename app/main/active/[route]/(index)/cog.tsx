import { Button, Text, View } from "react-native";
import React from 'react';
import { router } from 'expo-router';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => router.push('/(aux)/in-app-notification')} title="In App Notification"/>
    </View>
  );
  // @formatter:on
}
