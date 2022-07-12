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
  Icon
} from './styles';
import avatarDefault from '../../assets/avatar02.png';
import logout from '../../assets/logout.png';

const Home = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Jorge</UserName>
            </UserInfoDetail>
          </UserInfo>

          <UserAvatarButton onPress={() => {}}>
            <Icon source={logout} />
          </UserAvatarButton>
        </UserWrapper>
      </Header>
    </Container>
  );
};

export default Home;
