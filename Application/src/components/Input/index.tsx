import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

import styles from './styles';

interface IInputForm {
  inputName: string;
  inputLabel: string;
  control: any;
  errors: any;
}

const Input = (props: IInputForm) => {
  return (
    <View>
      <Controller
        control={props.control}
        name={props.inputName}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: props.errors.username && 1,
                borderColor: props.errors.username && '#ff375b',
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={props.inputLabel}
          />
        )}
      />
      {props.errors.username && (
        <Text style={styles.labelError}>{props.errors.username?.message}</Text>
      )}
    </View>
  );
};

export default Input;
