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
