import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';
import { clearAndReplace } from '@/util/route-util';

export default function Index({ isOverview }) {
  // @formatter:off
  return (
    <>
      <View style={{ flex: 1 }}>
        <Button onPress={() => router.push({pathname: './[order_item]', params: {order_item: '1'}})} title="Order Item 1"/>
      </View>
      <View>
        {
          !!isOverview
            ? (
              <Button onPress={() => clearAndReplace(router, { pathname: '/main/active/[route]', params: { route: 10 } })} title="Start route"/>
            )
            : (
              <></>
            )
        }
      </View>
    </>
  );
  // @formatter:on
}
