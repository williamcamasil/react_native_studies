import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountTitle,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import enter from '../../assets/enter.png';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

// const SignIn: React.FunctionComponent = () => {
const SignIn = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        //fecha o teclado quando clicar fora dele 
        keyboardShouldPersistTaps="handled"
        // ocupa 100% da tela
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
        
            <Button title="Entrar" />

            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>

      <CreateAccount
        onPress={() => {
          navigate('SignUp');
        }}
      >
        <Icon source={enter} />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};

export default SignIn;