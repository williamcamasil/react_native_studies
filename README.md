# Hooks - [Improve this documentation]

##### O que são?

**React Hook** é uma feature que permite que você use estado e outras features do **React** sem ter a necessidade de escrever uma classe. Com **React Hook** você vai poder: Utilizar estado em funções que são componentes. Executar funções quando o componente é montado e quando ele vai desmontar.

##### Tipos

* UseEffect

* UseContext

* ...

##### O que encontrar nessa aplicação

* Util/Helper file

* mock Json file used by interface and useState list

* render Flatlist showed by json mock list

* alert component showing more details

###### 

###### Simples exemplo de declaração [Utils/Helper](https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native)

src/utils/UtilMath.ts

```
export function sum(n1: number, n2: number): number {
  return n1 + n2;
}

export function subtract(n1: number, n2: number): number {
  return n1 * n2;
}
```

src/screens/Home/index.tsx

    import {sum, subtract} from '../../utils/UtilMath';
    
    console.log(sum(4, 5));
    console.log(subtract(4, 5));

##### 
