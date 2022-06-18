import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello World!</Text>
    </View>
  );
};

export default Home;
