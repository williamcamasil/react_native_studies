# Context API

Utilizado para compartilhamento de dados global para qualquer componente relacionado sem a necessidade de props.

### UseContext

A partir desse hook será possivel consumir as informações armazenadas no Context API.

#### Anotações

```tsx
// Serve para pegar informações do contexto
const tasks = React.useContext(TasksContext);
```

### Armazenamento de dados no dispositivo [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)

Usamos os seguintes comandos:

```
yarn add @react-native-async-storage/async-storage
```

Para o ios execute:

```
npx pod-install
ou 
acesse a pasta ios e execute:
pod install
```

Em seguida execute:

```
npx react-native link @react-native-async-storage/async-storage
```

### Exemplos

Temos 2 exemplos básicos usando context api, sendo o src_tasks_1_app da raiz do projeto sendo o primeiro a qual utiliza async storage para armazenamendo dos dados de uma lista no dispositivo, além de persistir os dados em outros locais. (exemplo parecido com o localstorage da web).



No 2° exemplo temos o próprio src que contém o navigation de stack com duas páginas, e o context de informação de 1 pessoa, para ilustrar como funciona esse gerenciamento de dados com o context api entre páginas.



### Link

* https://reactjs.org/docs/context.html

* https://react-native-async-storage.github.io/async-storage/docs/install/

* https://reactnativeelements.com/

* [Entender Context API com React Native de uma vez por todas! ✅ - YouTube](https://www.youtube.com/watch?v=olSeMN70Vo4&list=PLjRSlT0ad2mDrH31fI8MIHuyWOv-cfYbm&index=4&ab_channel=Sujeitoprogramador)
  
  
