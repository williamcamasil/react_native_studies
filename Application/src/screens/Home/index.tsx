import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import Button from '../../components/Button';
import FormResult from '../../components/FormResult';

interface Form {
  name: string;
  age: number;
  address: string;
}

const Home = () => {
  const [form, setForm] = React.useState<Form>({
    name: 'William',
    age: 27,
    address: 'Rua Azul Verde, 256',
  });

  const handleForm = () => {
    const data = {
      name: 'João',
      age: 45,
      address: 'Rua Preto Branco, 475',
    };

    setForm(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello World!</Text>
      <Button text={'Change Text'} action={() => {}} />

      <View style={styles.hr} />

      <FormResult form={form} />
      <Button text={'Change Object'} action={handleForm} />
    </View>
  );
};

export default Home;
