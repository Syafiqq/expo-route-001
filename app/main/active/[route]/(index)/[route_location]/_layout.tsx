import { Stack } from "expo-router";
import React from 'react';

export default function Index() {
  // @formatter:off
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Route Location Name' }}/>
      <Stack.Screen name="notes/index" options={{ title: 'Notes' }}/>
      <Stack.Screen name="orders/index" options={{ title: 'Orders' }}/>
      <Stack.Screen name="orders/[order_item]/index" options={{ title: 'Order Item 1' }}/>
      <Stack.Screen name="orders/[order_item]/notes" options={{ title: 'Notes' }}/>
      <Stack.Screen name="invoices/index" options={{ title: 'Invoices' }}/>
      <Stack.Screen name="invoices/[invoice]" options={{ title: 'Invoice #1' }}/>
      <Stack.Screen name="payments/index" options={{ title: 'Payments' }}/>
      <Stack.Screen name="payments/[payment]" options={{ title: 'Payment #1' }}/>
    </Stack>
  );
  // @formatter:on
}
