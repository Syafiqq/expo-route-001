import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';
import { clearAndReplace } from '@/util/route-util';

export default function Index({ isOverview }) {
  // @formatter:off
  return (
    <>
      <View style={{ flex: 1 }}>
        <Button onPress={() => router.push({pathname: './[route_location]', params: { route_location: '1' }})} title="Route Location 1"/>
        <Button onPress={() => router.push('/(aux)/in-app-notification')} title="In App Notification"/>
      </View>
      <View>
        {
          !!isOverview
            ? (
              <Button onPress={() => clearAndReplace(router, { pathname: '/main/active/[route]', params: { route: 10 } })} title="Start route"/>
            )
            : (
              <Button onPress={() => clearAndReplace(router, { pathname: '/main' })} title="End route"/>
            )
        }
      </View>
    </>
  );
  // @formatter:on
}
