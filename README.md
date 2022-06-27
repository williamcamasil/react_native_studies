criei uma pasta backend > dentro da pasta instalei json server pelo terminal com o comando:

npm install -g json-server

crie um arquivo db.json

populamos o arquivo .json

execute o comando:

json-server --watch db.json

GET

http://localhost:3000/alunos

POST

http://localhost:3000/alunos

```json
{
    "nome": "Joaquim",
    "nota": 8
}
```

PUT

http://localhost:3000/alunos/3

```json
{
    "nome": "Joaquim",
    "nota": 4
}
```

DELETE

http://localhost:3000/alunos/3

link

[React Native: REST APIs com JSON server | Alura](https://www.alura.com.br/artigos/react-native-rest-apis-json-server)

[Network error with axios and react native - Stack Overflow](https://stackoverflow.com/questions/49370747/network-error-with-axios-and-react-native)

[📱🤘🏾Calling API Data with TypeScript and React Native - YouTube](https://www.youtube.com/watch?v=JUiacuYwEvc)



Projeto

yarn add axios
