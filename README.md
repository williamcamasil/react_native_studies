# Styled Components

[Documentation]([styled-components: API Reference](https://styled-components.com/docs/api#typescript))

How to install in the project:

```
yarn add -D @types/styled-components @types/styled-components-react-native

OR

npm install --save @types/styled-components @types/styled-components-react-native
```

And install

```
yarn add styled-components
```

And install extension vscode-styled-components

#### Simple example

Home (index.tsx)

```tsx
import React from 'react';

import {Container, Title} from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Hello World!</Title>
    </Container>
  );
};

export default Home;
```

Home (styles.ts)

```tsx
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121214;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #f1f1f1;
`;
```

#### Global colors

create global folder in src with styles folder with two files:

**styled.d.ts**

```ts
import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
```

**theme.ts**

```ts
export default {
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#eba417',
    primaryLight: '#ffdb77',
    secondary: '#79c7ff',
    success: '#12a454',
    danger: '#e83f5b',
    dark: '#121214',
    light: '#f1f1f1',
    gray500: '#a8a8b3',
    gray800: '#29292e',
  },
};
```

Inside App.tsx declare ThemeProvider as the example below:

```tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import Home from './src/screens/Home';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
```

Finally in the file styles.ts from Home change colors properties

```ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.dark};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primaryLight};
`;
```


