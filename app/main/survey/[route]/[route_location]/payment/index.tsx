import React from 'react';
import { Button, View } from 'react-native';
import { clearAndReplace } from '@/util/route-util';
import { router } from 'expo-router';
import PaymentList from '@/components/payments/payment-list';

export default function Index() {
  // @formatter:off
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => clearAndReplace(router, {pathname: '/main/active/[route]/(index)/[route_location]/invoices', params: { route: 1, route_location: 1 }})} title="Done"/>
      <PaymentList></PaymentList>
      <Button onPress={() => {
        if (router.canGoBack()) {
          router.back();
        } else {
          clearAndReplace(router, {pathname: '/main/survey/[route]/[route_location]', params: { route: 1, route_location: 1 }});
        }
      }} title="Skip"/>
    </View>

  );
  // @formatter:on
}
