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

* [GitHub - testing-library/react-hooks-testing-library: 🐏 Simple and complete React hooks testing utilities that encourage good testing practices.](https://github.com/testing-library/react-hooks-testing-library)

 

### Próximos passos

### 

### Exemplos

* [Validando input](https://github.com/aluiziodeveloper/rn-app-mytasks/commit/91dc00912b759ed848e2f0d75db823467b276a60)
  
  * Através do render da página, é possível pegar várias ações da página ou componente;

* [React Hooks](https://github.com/aluiziodeveloper/rn-app-mytasks/commit/e90b7283e75f2dbc29d64bacd9a49c5f94309928)
  
  * Teste do hook personalizado do context api, além de teste dos hooks padrão;

* [Testando pressionar do botão](https://github.com/aluiziodeveloper/rn-app-mytasks/commit/3acd5399a27d30b5b8ea559f3e89c275a82cfbfe)
  
  * Teste de alteração de texto no input;
  
  * Teste de clique do botão para add item na lista;
  
  * Inserção de item na lista do context api;

* [Testando componente](https://github.com/aluiziodeveloper/rn-app-mytasks/commit/5c1140476f21317d7af2a6e57d0b12122493c1cb)
  
  * Teste para remover item da lista; 

### Links

* [Base curso Udemy - Seção 6](https://www.udemy.com/course/react-native-typescript/learn/lecture/30518112#overview)
