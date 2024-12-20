import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => router.push({pathname: './[invoice]', params: {payment: '1'}})} title="Invoice #1"/>
    </View>
  );
  // @formatter:on
}
