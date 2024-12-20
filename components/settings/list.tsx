import React from 'react';
import { Button, View } from 'react-native';
import { router } from 'expo-router';
import { clearAndReplace } from '@/util/route-util';

export default function List() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => router.push('/(aux)/change-password')} title="Change Password"/>
      <Button onPress={() => clearAndReplace(router, '/auth')} title="Logout"/>
      <Button onPress={() => router.push('/(aux)/in-app-notification')} title="In App Notification"/>
    </View>
  );
  // @formatter:on
}
