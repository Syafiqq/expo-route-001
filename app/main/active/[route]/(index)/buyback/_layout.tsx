import { Stack } from "expo-router";
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Buybacks' }}/>
      <Stack.Screen name="[buyback]" options={{ title: 'Buyback #1' }}/>
    </Stack>
  );
  // @formatter:on
}
