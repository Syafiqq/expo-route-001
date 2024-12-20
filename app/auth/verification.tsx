import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';
import { clearAndReplace } from '@/util/route-util';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => clearAndReplace(router, '/main')} title="Confirm"/>
      <Button onPress={() => router.navigate('/auth')} title="Runs out"/>
    </View>
  );
  // @formatter:on
}
