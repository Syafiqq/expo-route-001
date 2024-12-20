import React from 'react';
import { Button, View } from 'react-native';
import { clearAndReplace } from '@/util/route-util';
import { router } from 'expo-router';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => clearAndReplace(router, {pathname: '/main/active/[route]/(index)/[route_location]/invoices', params: { route: 1, route_location: 1 }})} title="Go to invoice"/>
      <Button onPress={() => router.push('./bins-handover')} title="Start"/>
      <Button onPress={() => router.push('./bins-handover')} title="Bins Handover"/>
    </View>
  );
  // @formatter:on
}
