# TS Types example

Examples with useState using string, number, boolean, interface, interface list and string list:

```tsx
import React from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';

import styles from './styles';

interface IPerson {
  id: string;
  name: string;
  age: number;
  salary: number;
  flag: boolean;
}

const Home = () => {
  const [name, setName] = React.useState(''); //string
  const [age, setAge] = React.useState(27); //number (int)
  const [salary, setSalary] = React.useState(125.63); //number (float)
  const [flag, setFlag] = React.useState(false); //boolean

  const [person, setPerson] = React.useState<IPerson>({
    id: String(new Date().getTime()),
    name: 'William',
    age: 28,
    salary: 125.63,
    flag: false,
  }); //interface item
  const [people, setPeople] = React.useState<IPerson[]>([]); //interface list

  const [jobs, setJobs] = React.useState<string[]>([]); //List string

  const handleName = () => {
    setName('William Camargo');
  };

  const handleAge = () => {
    setAge(30);
  };

  const handleSalary = () => {
    setSalary(275.25);
  };

  const handleFlag = () => {
    setFlag(true);
  };

  const handlePerson = () => {
    setPerson({
      id: String(new Date().getTime()),
      name: 'João Paulo',
      age: 15,
      salary: 22.1,
      flag: true,
    });
  };

  const handleAddPerson = () => {
    const data = {
      id: String(new Date().getTime()),
      name: 'AAAA',
      age: 1,
      salary: 1.1,
      flag: false,
    };

    setPeople([...people, data]);
  };

  const handleAddJobs = () => {
    let job = 'Programador';
    setJobs([...jobs, job]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setName}
        placeholderTextColor="#555"
        placeholder="Digite seu nome..."
      />

      <TouchableOpacity onPress={handleName}>
        <Text>Nome: {name}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAge}>
        <Text>Idade: {age}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSalary}>
        <Text>Sálario: {salary}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFlag}>
        <Text>Flag: {flag ? 'true' : 'false'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePerson}>
        <Text>Pessoa: {person.name}</Text>
        <Text>Pessoa: {person.age}</Text>
        <Text>Pessoa: {person.salary}</Text>
        <Text>Pessoa: {person.flag ? 'true' : 'false'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAddPerson} activeOpacity={0.7}>
        <Text>Adicionar Pessoa</Text>
      </TouchableOpacity>

      <FlatList
        data={people as unknown as IPerson[]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.salary}</Text>
            <Text>{item.flag ? 'true' : 'false'}</Text>
          </View>
        )}
      />

      <TouchableOpacity onPress={handleAddJobs} activeOpacity={0.7}>
        <Text>Adicionar Trabalho</Text>
      </TouchableOpacity>

      <FlatList
        data={jobs}
        renderItem={job => (
          <View>
            <Text>{job.item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
```
