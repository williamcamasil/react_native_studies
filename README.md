# React Native Navigation

 

### Como utilizar

Após configurar o ambiente, instale a dependência:

```
yarn add @react-navigation/native
```

```
yarn add react-native-screens react-native-safe-area-context
```

##### Stack navigation

```
yarn add @react-navigation/native-stack
```



### Principais conectores

src/routes/

```
Stack
    Models
        index.ts //tipagem das páginas com passagem de parametro em Profile
    index.ts //declaração das páginas utilizadas em Stack
index.ts //container contendo tudo em Stack
```

##### Recebendo route file

src/App.tsx

```tsx
import React from 'react';

import Route from './routes';

export default function () {
  return <Route />;
}
```

##### Exemplos

Como passar params para tela Profile:

```tsx
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Home!</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Profile', {name: 'William Camargo', age: 27})
        }>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

```

Como receber params da tela de Profile

```tsx
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';

const Profile = () => {
  const params = useRoute<any>();
  const navigation = useNavigation<propsStack>();
  return (
    <View>
      <Text>Profile</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>

      <Text>{params.params?.name}</Text>
      <Text>{params.params?.age}</Text>
    </View>
  );
};

export default Profile;

```





### Tipos de Navegação

* Stack

* Tabs

* Drawer



### Links

* [Navegação entre telas no React Native + Typescript - YouTube](https://www.youtube.com/watch?v=6BDwQJq8z4E)

* [Doc Navigation](https://reactnavigation.org/docs/getting-started/)


