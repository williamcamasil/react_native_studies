## React Native Notes

## Indice

1. [Intro commands](#introcommands)

2. [Settings](#settings)

3. [Debug](#debug)

4. [Stylization (Android / IOS)](#Stylization (Android / IOS))

5. [Folders and files](#Folders and files)

6. [IOS Anotations](#IOS Anotations)

7. [Android Anotations](#Android Anotations)

8. [Examples founded here](#Examples founded here)

9. [Links](#Links)

### Intro commands

- Create JS project
  
  - npx react-native init MyApp

- [Add TS project](https://reactnative.dev/docs/typescript)
  
  - yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer

- Run project
  
  - yarn start                        > run bundle (debug/logs)
  
  - yarn run android           > run simulador android
  
  - yarn run ios                    > run simulador ios

### Settings

Add these extentions

- eslint

- editor config

- prettier

##### tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

##### jest.config.js

```js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

 **OBS:** change App.js to App.tsx

##### .editorconfig

```json
root = true

[*]
indent_size = 2
indent_style = space
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

##### .eslintrc

- Install eslint
  
  - yarn add -D eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier

##### .eslintignore

```
**/*.js
node_modules
build
android
ios
.expo
```

**Restart VSCode to finish applied**

##### .prettierrc.js

- Install prettier
  
  - yarn add -D prettier

```js
module.exports = {
  semi: true,
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  printWitdh: 80,
};
```

##### Sample App.tsx

```tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello World!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default App;
```

### Debug

Na tela executada apartir do comando npm start / yarn start (bundle) é aberto no terminal a possibilidade de "r" - reload ou "d" developer menu, ao teclar "d" será aberto no simulador DevMenu, onde é possível acompanhar a tela de debug do app (clicando em Debug) obs: igual do web. A qual é possivel inserir breakpoints, para isso selecione no devtools: Source e busque pela página a ser debugada.

### Stylization (Android / IOS)

Para diferenciar a estilização entre os S.O´s é utilizado o comando Platfrom.OS na estilização especifica, conforme o exemplo abaixo:

```css
padding: Platform.OS === 'ios' ? 15 : 12,
```

### Folders and files

```
android
ios
src
    assets
    components
    global
        styles
    screens
        Home
            index.tsx
            styles.ts
    services
    utils
.editorconfig
.eslintignore
.eslintrc.js
.prettierrc.js
jest.config.js
tsconfig.json
```



### IOS Anotations

##### How to run ios project in Xcode

```
- Ao criar o projeto, acesse a pasta IOS e execute o comando “pod Install” ele irá add as dependências do projeto para permitir funcionar o projeto;
- Abra o Xcode e ao buscar o projeto, procure dentro da pasta IOS do projeto por um arquivo com extensão .xcworkspace e selecione o para abrir
- No Xcode clique no play para iniciar o projeto;
- OBS: também é possível executar o projeto a partir do comando yarn rua ios do terminal do VSCode;


```



### Android Anotations

....



### Examples founded here

Criar sub branchs com cada estudo, lincado a esses itens

- [Boilerplate](https://github.com/williamcamasil/react_native_studies/tree/boilerplate)

- [Props / Components](https://github.com/williamcamasil/react_native_studies/tree/feature/Props)

- [TS types and List](https://github.com/williamcamasil/react_native_studies/tree/feature/TsTypes)

- [Styled Components](https://github.com/williamcamasil/react_native_studies/tree/feature/StyledComponents)

- Using Images, fonts and Icons

- UseEffect / UseState / Utils

- Navigation

- Context Api

- Redux

- Use libs

- Natives resources (Camera / sound / bluetooth, geolocation / ...)

- Rest Api (CRUD using json server)

- Diferent styles Android / IOS

- Tests

- Partners
  
  - composition root

### Links

* [Criando app com React Native e Typescript - YouTube](https://www.youtube.com/watch?v=tze6z7wAD-M)
