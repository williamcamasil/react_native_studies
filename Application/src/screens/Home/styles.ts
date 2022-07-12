import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: 180px;
  font-size: 24px;
  background-color: ${({theme}) => theme.colors.secondary};
`;
