# Testes automatizados

### Tipos de testes

* Teste unitário
  
  * Utilizado para testar funcionalidades especficas, por exemplo: componente, funções etc.

* Teste de integração
  
  * Testa 2 ou mais funcionalidades, nesse caso podem ser 2 testes unitários

* Teste end to end
  
  * Teste de ponta a ponta, esse teste simula as ações do usuário na aplicação, muito comum para testar interface gráfica, por exemplo: preenchimento de input, precionamento de um botão, etc.

* Teste  Regressão

 

### Instalação

Test Library

```
yarn add --dev @testing-library/react-native
```

Jest

```
yarn add --dev @testing-library/jest-native
```

Em package.json do projeto adicionar essa linha dentro do objeto do jest:

```json
"setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]


//Ficando dessa forma:
"jest": {
     "preset": "react-native",
     "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
}

//OBS: nesse caso eu tive que remover esse jest por que já existia uma configuração com o arquivo na raiz jest.config.js
```

Para começar a rodar os testes, dentro do terminal execute:

```
yarn test
```

Monitoramento continuo, a qual permite testar os teste em tempo real:

```
npx jest --watchAll
```

#### Covarege (Relatório)

Para usar o relatório, é necessário adicionar as configurações do módulo dentro do arquivo jest.config.js os seguintes linhas de códigos:

```js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx"
  ],
  coverageReporters: ["lcov"]
};
```

No terminal execute o comando:

```
yarn test --coverage
```

Na pasta raiz do projeto, após rodar o comando acima, será criado uma pasta com nome coverage. Dentro dessa pasta, acesse coverage > Icov-report > index.html

Abra esse arquivo no bronwser e tenha acesso ao relatório de testes realizado.

#### Importante

Para nomear os arquivos, é interessante como convesão utilizar:

* .spec.tsx ou .test.tsx

* exemplo:
  
  * home.spec.tsx ou home.test.tsx
  
  * calc.spec.tsx ou calc.test.tsx

### Anotações

* **fireEvent:** serve para simular ações do dispositivo, por exemplo: pressionamento de botão, digitação de input de texto, etc;

* **render:** renderiza o componente;

### Para usar o Async Storage com testes

Para utilizar AS é necessário criar um mock, pois não tem dispositivo para acessar o BD, siga os [passos](https://react-native-async-storage.github.io/async-storage/docs/advanced/jest).

### Libs

* [React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/getting-started/)

* [Jest (framework para testes em JS)](https://jestjs.io/docs/getting-started)

* [Async Storage com testes](https://react-native-async-storage.github.io/async-storage/docs/advanced/jest)

### 

### Próximos passos

### 

### Links

* [Base curso Udemy - Seção 6](https://www.udemy.com/course/react-native-typescript/learn/lecture/30518112#overview)
