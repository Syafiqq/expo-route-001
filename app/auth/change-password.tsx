import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => { router.navigate('/auth') }} title="Confirm"/>
    </View>
  );
  // @formatter:on
}
