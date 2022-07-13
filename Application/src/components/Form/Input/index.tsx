
import React from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../../global/styles/theme';
import { Container } from './styles';

/*
Esse componente permitira passar alem das propriedades obrigatorias, tambem 
permitira passar outras propriedades referente as propriedades dele
*/
export const Input: React.FunctionComponent<TextInputProps> = ({
  ...otherProps
}) => {
  return (
    <Container placeholderTextColor={theme.colors.gray500} {...otherProps} />
  );
};