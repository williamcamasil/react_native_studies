import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {usePersonContext} from '../../context/PersonContext';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation<propsStack>();
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  //Usado para pegar o método do contexto de add pessoa
  const {addPerson} = usePersonContext();

  const handleAddNewTask = () => {
    const data = {
      name: name ? name : 'Sem nome',
      age: age ? age : '0',
    };

    addPerson(data);
    handleClearInput();
  };

  const handleClearInput = () => {
    setName('');
    setAge('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Informações compartilhadas</Text>
        <TextInput
          onChangeText={setName}
          placeholderTextColor="#555"
          placeholder="Insira seu nome"
          style={styles.input}
          value={name}
        />

        <TextInput
          onChangeText={setAge}
          placeholderTextColor="#555"
          placeholder="Insira sua idade"
          style={styles.input}
          value={age}
        />

        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
