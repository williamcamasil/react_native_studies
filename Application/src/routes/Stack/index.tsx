import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Search from '../../screens/Search';
import {propsNavigationStack} from './Models';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
}
