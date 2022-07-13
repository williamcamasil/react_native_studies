import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

/*
Esse componente permitira passar alem das propriedades obrigatorias, tambem 
permitira passar outras propriedades referente as propriedades dele.
Estilo e Elementos envolvidos com essa passagem
*/
export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  ...otherProps
}) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  );
};