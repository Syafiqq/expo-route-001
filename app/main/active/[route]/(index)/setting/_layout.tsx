import { Stack } from "expo-router";
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Settings' }}/>
    </Stack>
  );
  // @formatter:on
}
