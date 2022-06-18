import React from 'react';
import {TouchableOpacity} from 'react-native';

import TextAction from '../TextAction';

import styles from './styles';

interface IButton {
  text: string;
  action: () => void;
}

const Button = (props: IButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.action}>
      <TextAction text={props.text} />
    </TouchableOpacity>
  );
};

export default Button;
