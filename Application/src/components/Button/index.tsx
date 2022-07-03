import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface IButton {
  text: string;
  action: () => void;
}

const Button = (props: IButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.action}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
