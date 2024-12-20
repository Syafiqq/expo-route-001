import { Button, View } from "react-native";
import React from 'react';
import { router } from 'expo-router';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => { router.push('./auth') }} title="Login"/>
    </View>
  );
  // @formatter:on
}
