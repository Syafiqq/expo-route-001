import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => { router.push('./change-password') }} title="Conform"/>
    </View>
  );
  // @formatter:on
}
