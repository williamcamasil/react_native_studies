import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import axios, {AxiosResponse} from 'axios';
import {Student} from '../../Interfaces/Interfaces';

import styles from './styles';

const Home = () => {
  const [student, setStudent] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get<Student[]>('http://10.0.2.2:3000/alunos')
      .then((response: AxiosResponse) => {
        console.log('sucesso>>>: ', response.data);
        setStudent(response.data);
      })
      .catch(ex => {
        const error =
          ex.response.status === 404
            ? 'Resource Not found'
            : 'An unexpected error has occurred';
        console.log('erro>>>: ', error);
      });
  }, []);

  const handleSaveNewStudant = async () => {
    console.log('Salvo');

    const response = await axios.post('http://10.0.2.2:3000/alunos', {
      // id: Math.random,
      nome: 'william',
      nota: 10,
    });

    if (response.status === 201) {
      console.log('Criado');
    }
  };

  const handlePutStudant = async () => {
    console.log('Editado');
    let id = 2;
    await axios.put(`http://10.0.2.2:3000/alunos/${id}`, {
      nome: 'joão paulo',
      nota: 6,
    });
  };

  const handleDeleteStudant = async (id: string) => {
    console.log('Deletado');
    // let id = 2;
    await axios.delete(`http://10.0.2.2:3000/alunos/${id}`);
  };

  const showId = (student: Student) => {
    console.log('Meu ID: ', student.id);
    handleDeleteStudant(student.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Lista de estudantes</Text>
      <FlatList
        data={student}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.list} onPress={() => showId(item)}>
            <Text>{item.nome}</Text>
            <Text>{item.nota}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.greeting}>Cadastrar novo estudante</Text>
      <View>
        <Text>Id</Text>
        <Text>Nome</Text>
        <Text>Nota</Text>
        <TouchableOpacity onPress={handleSaveNewStudant}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePutStudant}>
          <Text>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleDeleteStudant('2')}>
          <Text>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
