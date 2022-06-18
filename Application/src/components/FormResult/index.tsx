import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface Form {
  name: string;
  age: number;
  address: string;
}

interface FullForm {
  form: Form;
}

const FormResult = ({form}: FullForm) => {
  return (
    <View style={styles.form}>
      <Text style={styles.formText}>{form.name}</Text>
      <Text style={styles.formText}>{form.age}</Text>
      <Text style={styles.formText}>{form.address}</Text>
    </View>
  );
};

export default FormResult;
