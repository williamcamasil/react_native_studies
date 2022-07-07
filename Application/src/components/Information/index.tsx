import React from 'react';
import {Alert, View, Text, TouchableOpacity} from 'react-native';
import {usePersonContext} from '../../context/PersonContext';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';

const Information = () => {
  //Recebendo informação gravada no contexto de person que contem nome e idade e método da context api
  const {person, removePerson} = usePersonContext();
  const navigation = useNavigation<propsStack>();

  const handleRemoveInformation = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => {
          console.log('person', person);
          removePerson();
        },
      },
    ]);
  };

  return (
    <View>
      <Text>{person.name}</Text>
      <Text>{person.age}</Text>
      <TouchableOpacity
        onPress={handleRemoveInformation}
        style={styles.buttonPerson}>
        <Text style={styles.titlePerson}>Deletar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonPerson}>
        <Text style={styles.titlePerson}>Retornar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Information;
