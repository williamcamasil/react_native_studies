import React from 'react';
import {ScrollView, KeyboardAvoidingView, Platform, View} from 'react-native';
import {useForm, FieldValues} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Form/Button';
import {InputControl} from '../../components/Form/InputControl';
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

interface IFormInputs {
  //interface generica
  [name: string]: any;
}

//Schema para validacoes quando houver erro
const formSchema = yup.object({
  email: yup.string().email('Email inválido.').required('Informe o email.'),
  password: yup.string().required('Informe a senha.'),
});

// const SignIn: React.FunctionComponent = () => {
const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const {navigate} = useNavigation<ScreenNavigationProp>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        //fecha o teclado quando clicar fora dele
        keyboardShouldPersistTaps="handled"
        // ocupa 100% da tela
        contentContainerStyle={{flex: 1}}>
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            {/* Componente hook form com validacoes e permite inserir funcionalidades do textinput alem do props ja definido  */}
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <InputControl
              control={control}
              name="password"
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
            />

            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>

      <CreateAccount
        onPress={() => {
          navigate('SignUp');
        }}>
        <Icon source={enter} />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
