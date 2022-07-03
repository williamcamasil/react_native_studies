import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import Register from '../../screens/Register';
// import Search from '../../screens/Search';
import {propsNavigationStack} from './Models';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Register" component={Register} />
      {/* <Screen name="Search" component={Search} /> */}
    </Navigator>
  );
}
