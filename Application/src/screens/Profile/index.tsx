import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';

import styles from './styles';

const Profile = () => {
  const params = useRoute<any>();
  const navigation = useNavigation<propsStack>();

  const showInformation = () => {
    return params.params?.name ? params.params?.name : 'No content';
  };

  return (
    <View>
      <Text style={styles.title}>Profile</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.result}>
        {/* <Text>{params.params?.name}</Text> */}
        <Text>{showInformation()}</Text>
        <Text>{params.params?.age}</Text>
      </View>
    </View>
  );
};

export default Profile;
