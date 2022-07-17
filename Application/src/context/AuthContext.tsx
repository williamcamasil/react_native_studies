import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { api } from '../services/api';
import { IUser } from '../model/user';

interface IAuthState {
  token: string;
  user: IUser;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
    user: IUser;
    signIn(): void;
    signIn(credentials: ICredentials): void;
    signOut(): void;
}

interface IProps {
    children: React.ReactElement;
}

const tokenData = '@DevProfile:token';
const userData = '@DevProfile:user';

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [data, setData] = React.useState<IAuthState>({} as IAuthState);

    React.useEffect(() => {
        async function loadAuthData() {
        const token = await AsyncStorage.getItem(tokenData);
        const user = await AsyncStorage.getItem(userData);

        if (token && user) {
            setData({ token, user: JSON.parse(user) }); //recuperando como objeto
        }
        }

        loadAuthData();
    }, []);

    const signIn = async ({ email, password }: ICredentials) => {
        try {
            const response = await api.post('sessions', {
                email,
                password,
            });

            //Setando as informacoes do retorno da api, da chave e do usuario logado
            const { token, user } = response.data;

            //Salvando as informacoes no storage
            await AsyncStorage.setItem(tokenData, token);
            //Tipamos o user por ser um objeto, e como sera usado em mais de um lugar, o model foi criado globalmente
            await AsyncStorage.setItem(userData, JSON.stringify(user)); //salvando como string
            setData({ token, user });
        } catch (error) {
            //throw new Error(error as string);
            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, verifique as credenciais.',
            );
        }
    };

    const signOut = async () => {
        await AsyncStorage.removeItem(tokenData);
        await AsyncStorage.removeItem(userData);
        setData({} as IAuthState);
    };

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

//Hook criado
export const useAuth = (): IAuthContext => {
    const context = React.useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth deve ser usado em um AuthProvider.');
    }
  
    return context;
};