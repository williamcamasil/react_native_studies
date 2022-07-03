import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Toast from 'react-native-toast-message';
import {useNavigation, useRoute} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';
import {setInformartionWithTimeout} from '../../Utils/Util';
import styles from './styles';
import api from '../../services/apis';
import Button from '../../components/Button';

const Register = () => {
  const params = useRoute<any>();
  const navigation = useNavigation<propsStack>();
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    if (params.params !== undefined) {
      setFlag(true);
      setId(params.params.student?.id);
      setName(params.params.student?.nome);
      setGrade(params.params.student?.nota);
    }
  }, [params]);

  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [grade, setGrade] = useState<string>('');

  const handleSaveNewStudent = async () => {
    if (name && grade) {
      await api
        .post('alunos', {
          nome: name,
          nota: grade,
        })
        .then(res => {
          if (res.status === 201) {
            console.log('entrou');
            setInformartionWithTimeout(
              'success',
              'Sucesso',
              'Cadastrado com sucesso!',
              navigation,
            );
          }
        })
        .catch(() => {
          console.log('entrou1');
          setInformartionWithTimeout(
            'info',
            'Erro',
            'Ocorreu um erro',
            navigation,
          );
        });
    } else {
      setInformartionWithTimeout(
        'info',
        'Erro',
        'Insira todas as informações',
        navigation,
      );
    }
  };

  const handlePutStudent = async () => {
    const idUser = id !== '' ? id : '1';
    if (name && grade) {
      await api.put(`alunos/${idUser}`, {
        nome: name,
        nota: grade,
      });

      setInformartionWithTimeout(
        'success',
        'Sucesso',
        'Edição realizada com sucesso!',
        navigation,
      );
    } else {
      setInformartionWithTimeout(
        'info',
        'Erro',
        'Insira todas as informações',
        navigation,
      );
    }
  };

  const handleDeleteStudent = async () => {
    setInformartionWithTimeout(
      'success',
      'Sucesso',
      'Deletado com sucesso!',
      navigation,
    );
    const idUser = id !== '' ? id : '1';
    await api.delete(`alunos/${idUser}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Cadastro do Aluno</Text>
      <View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="Insira o nome"
            onChangeText={newName => setName(newName)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Insira a nota"
            onChangeText={newGrade => setGrade(newGrade)}
            value={grade}
          />
        </View>

        {flag ? (
          <View>
            <Button text={'Salvar'} action={handlePutStudent} />
            <Button text={'Deletar'} action={handleDeleteStudent} />
          </View>
        ) : (
          <Button text={'Cadastrar'} action={handleSaveNewStudent} />
        )}

        <Button text={'Voltar'} action={() => navigation.navigate('Home')} />
      </View>

      <Toast />
    </View>
  );
};

export default Register;
