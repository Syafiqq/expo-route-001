import { Button, View } from "react-native";
import React from 'react';
import { router } from 'expo-router';
import { clearAndNavigate, clearAndReplace } from '@/util/route-util';

export default function Index({ isOverview }) {
  // @formatter:off
  return (
    <>
      <View style={{ flex: 1 }}>
        {
          !!isOverview
            ? (
              <></>
            )
            : (
              <Button onPress={() => router.push('./notes')} title="Notes"/>
            )
        }
      </View>
      <View>
        {
          !!isOverview
            ? (
              <Button onPress={() => clearAndReplace(router, { pathname: '/main/active/[route]', params: { route: 10 } })} title="Start route"/>
            )
            : (
              <Button onPress={() => clearAndReplace(router, {pathname: '/main/survey/[route]/[route_location]', params: { route: 1, route_location: 1 }})} title="Finalise"/>
            )
        }
      </View>
    </>
  );
  // @formatter:on
}
