import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

// Esses cenarios servem para identificar o tamanho da tela e redimensionar os elementos de acordo com os diferentes tamanhos de tela dos dispositivos
// RFPercentage = percentual da tela
// RFValue = pixels da tela

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px; /* porcentual de 17% da tela para preenchimento */
  background-color: ${({theme}) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(28)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 10px;
`;

export const UserInfoDetail = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const Icon = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
`;

export const LogoutButton = styled.TouchableOpacity``;