import { Button, View } from "react-native";
import { router } from 'expo-router';
import React from 'react';
import { clearAndNavigate, clearAndReplace } from '@/util/route-util';

export default function Index({ isOverview }) {
  // @formatter:off
  return (
    <>
      <View style={{ flex: 1 }}>
        {
          !!isOverview
            ? (
              <>
                <Button onPress={() => router.push('./orders')} title="Orders"/>
                <Button onPress={() => router.push('./notes')} title="Notes"/>
              </>
            )
            : (
              <>
                <Button onPress={() => router.push({pathname: './[route_location]/orders', params: { route_location: 1 }})} title="Orders"/>
                <Button onPress={() => router.push({pathname: './[route_location]/notes', params: { route_location: 1 }})} title="Notes"/>
                <Button onPress={() => router.push({pathname: './[route_location]/invoices', params: { route_location: 1 }})} title="Invoices"/>
                <Button onPress={() => router.push({pathname: './[route_location]/payments', params: { route_location: 1 }})} title="Payments"/>
              </>
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
              <>
                <Button onPress={() => clearAndReplace(router, {pathname: '/main/survey/[route]/[route_location]', params: { route: 1, route_location: 1 }})} title="Finalise"/>
                <Button onPress={() => clearAndReplace(router, { pathname: '/main' })} title="End route"/>
              </>
            )
        }
      </View>
    </>
  );
  // @formatter:on
}
