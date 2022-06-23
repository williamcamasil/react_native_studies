import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import styles from './styles';
import {sum, subtract} from '../../utils/UtilMath';

interface IPerson {
  id: number;
  name: string;
  age: number;
  job: string;
  married: boolean;
}

// interface IPeople {
//   people: IPerson[];
// }

const Home = () => {
  const people = require('../../mocks/listPeople.json');

  const [list, setList] = React.useState<IPerson[]>(people);
  // const [list, setList] = React.useState<IPeople>(people);

  useEffect(() => {
    console.log('teste: ', list);
  });

  const handleAddNewPerson = () => {
    console.log(sum(4, 5));
    console.log(subtract(4, 5));

    const data = {
      id: 4,
      name: 'Juana Darking',
      age: 63,
      job: 'Teacher',
      married: true,
    };

    setList([...list, data]);
  };

  const createThreeButtonAlert = (item: IPerson) => {
    let isMarried = item.married ? 'Sim' : 'Não';
    Alert.alert(
      'Mais detalhes',
      'Nome: ' +
        item.name +
        '\nIdade: ' +
        item.age.toString() +
        '\nTrabalho: ' +
        item.job +
        '\nCasado(a): ' +
        isMarried,
      [{text: 'Entendi', onPress: () => {}}],
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAddNewPerson}>
        <Text style={styles.textButton}>Add new Name</Text>
      </TouchableOpacity>

      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => {
          return (
            <View style={styles.listHeader}>
              <Text style={styles.title}>Nomes</Text>
            </View>
          );
        }}
        renderItem={({item}) => (
          <View style={styles.listBody}>
            <TouchableOpacity onPress={() => createThreeButtonAlert(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
