import React from 'react';
import {Text} from 'react-native';

interface Label {
  text: string;
}

const TextAction = (props: Label) => {
  return <Text>{props.text}</Text>;
};

export default TextAction;
