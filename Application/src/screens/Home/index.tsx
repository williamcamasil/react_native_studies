import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';
import {setInformartion} from '../../Utils/Util';
import {Student} from '../../Interfaces/Interfaces';
import api from '../../services/apis';
import styles from './styles';

import Button from '../../components/Button';

const Home = () => {
  const navigation = useNavigation<propsStack>();
  const [student, setStudent] = useState<Student[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    api
      .get<Student[]>('alunos')
      .then(response => {
        setStudent(response.data);
      })
      .catch(ex => {
        const error =
          ex.response.status === 404
            ? 'Resource Not found'
            : 'An unexpected error has occurred';

        setInformartion('error', 'Erro', `Algo deu errado [${error}]`);
      });
  }, [isFocused]);

  const addNewStudent = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Button text={'Adicionar'} action={addNewStudent} />
      </View>
      <Text style={styles.mainTitle}>Lista de estudantes</Text>
      {student.length > 0 ? (
        <FlatList
          style={styles.flatList}
          data={student}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.list}
              onPress={() => {
                navigation.navigate('Register', {
                  student: item,
                });
              }}>
              <Text style={styles.lineList}>{item.nome}</Text>
              <Text style={styles.lineList}>{item.nota}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Lista vazia</Text>
      )}
      <Toast />
    </View>
  );
};

export default Home;
