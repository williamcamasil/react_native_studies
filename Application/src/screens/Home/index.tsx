import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Home!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Profile', {name: 'William Camargo', age: 27})
        }>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
