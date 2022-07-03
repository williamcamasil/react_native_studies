import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './styles';
import Input from '../../components/Input';

interface IForm {
  username: string;
  email: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required('Informe seu usuário'),
  email: yup.string().email('Email Inválido').required('Informe seu email'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 digitos')
    .required('Informe sua senha'),
});

const Home = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data: any) => {
    console.log('data: ', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a)</Text>

      {/* <Controller
        control={control}
        name="username"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: errors.username && 1,
                borderColor: errors.username && '#ff375b',
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite seu usuário"
          />
        )}
      />
      {errors.username && (
        <Text style={styles.labelError}>{errors.username?.message}</Text>
      )} */}

      <Input
        inputName={'username'}
        inputLabel={'Digite seu usuário'}
        control={control}
        errors={errors}
      />

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff375b',
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite seu email"
          />
        )}
      />

      {errors.email && (
        <Text style={styles.labelError}>{errors.email?.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: errors.password && 1,
                borderColor: errors.password && '#ff375b',
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        )}
      />

      {errors.password && (
        <Text style={styles.labelError}>{errors.password?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleSignIn)}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
