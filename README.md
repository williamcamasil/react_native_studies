# Projeto 

### O que esta sendo utilizado

* React Native + Typescript
* Eslint + Prettier
* [Styled components](https://github.com/williamcamasil/react_native_studies/tree/feature/StyledComponents)
* [React-native-responsive-fontsize](https://github.com/heyman333/react-native-responsive-fontSize)
* Passagem de pros por componentes
* [React Navigation](https://reactnavigation.org/)
    * [Stack](https://reactnavigation.org/docs/hello-react-navigation)
    * [Hook useNavigation](https://reactnavigation.org/docs/use-navigation/) usado para navegação de páginas
* [React Hook Form](https://react-hook-form.com/)
    * [React Native example](https://react-hook-form.com/get-started#ReactNative)
    * [Yup github](https://github.com/jquense/yup)
* [Backend utilizado](https://github.com/aluiziodeveloper/api-node-devprofile)
* [Axios para consumo de apis](https://axios-http.com/docs/intro)
* [https://react-native-async-storage.github.io/async-storage/docs/install/](Async Storage)

### Como usar o RN responsive fontsize

Utilizado para identificar o tamanho da tela e redimensionar os elementos de acordo com os diferentes tamanhos de tela dos dispositivos.

* RFPercentage = percentual da tela / usado em dimensões de view por exemplo
* RFValue = pixels da tela / usado em dimensões de fontes por exemplo

##### Instalar
```
yarn add react-native-responsive-fontsize
```

### Para utilizar imagens no projeto

* Crie uma pasta @types e adicione um arquito com o modulo para aceite das extensões;
* Adicione as imagens de acordo com a extensão em assets;
* Adicione o source da imagem no elemento de Imagem;

### Como usar o React Navigation

Navegação de paginas

##### Instalar
```
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
```

Executar o comando para ios 
```
npx pod-install ios
```

Em caso de utilizar Stack
```
yarn add @react-navigation/native-stack
```

### Como usar o React Hook Form

Biblioteca para criação de formulários

##### Instalar
```
yarn add react-hook-form

yarn add @hookform/resolvers yup
```

### Backend utilizado

Usaremos um backend contruindo em node js a qual conterá as APIs que utilizaremos na autenticação, criação de conta, páginas privadas e publicas, etc.

[Repositório + Documentação](https://github.com/aluiziodeveloper/api-node-devprofile)

Para executar o projeto após configuração concluída, execute o comando
```
yarn dev
```

### Como usar o Axios

Biblioteca para consumo de rest apis.

##### Instalar
```
yarn add axios
```

### Como usar o Async Storage

Biblioteca para armazenamento local de informações.

##### Instalar
```
yarn add @react-native-async-storage/async-storage

//IOS
npx pod-install
ou 
acesse a pasta ios e execute:
pod install

//Em seguida
npx react-native link @react-native-async-storage/async-storage
```

### Desafios

* Inserir spinning de loading nas chamadas e bloquear os botões durante o carregamento;

