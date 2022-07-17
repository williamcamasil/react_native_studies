import React from 'react';
import {
  Container,
  Header,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
  Icon,
  LogoutButton,
} from './styles';
import { useAuth } from '../../context/AuthContext';
import avatarDefault from '../../assets/avatar02.png';
import { Alert } from 'react-native';
import logout from '../../assets/logout.png';

const Home = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente sair da aplicação?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>

          <LogoutButton onPress={handleSignOut}>
            <Icon source={logout} />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
};

export default Home;
