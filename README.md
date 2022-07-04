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



### Link

* https://reactjs.org/docs/context.html

* https://react-native-async-storage.github.io/async-storage/docs/install/
