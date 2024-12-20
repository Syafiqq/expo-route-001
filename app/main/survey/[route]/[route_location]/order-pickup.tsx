import React from 'react';
import { Button, View } from 'react-native';
import { clearAndReplace } from '@/util/route-util';
import { router } from 'expo-router';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => router.replace('./flat-rate')} title="Done"/>
      <Button onPress={() => router.replace('./flat-rate')} title="Skip"/>
    </View>
  );
  // @formatter:on
}
