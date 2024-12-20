import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => { router.push('./forgot-password') }} title="Frogot Password"/>
      <Button onPress={() => { router.push('./verification') }} title="Login"/>
    </View>
  );
  // @formatter:on
}
