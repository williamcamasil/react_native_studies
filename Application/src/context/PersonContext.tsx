import React from 'react';

/*
Temos dois exemplos: (usando async storage e outro sem)
 1 - com async storage armazenamos os dados no BD, fecha e abre o app continua salvo os dados (similar ao localstorage do web)
 2 - sem, utilizamos os hooks de use state para manter os dados e ser mostrados em outras telas
*/

//Pega as páginas filhas, ex: Home / Profile
interface IProps {
  children: React.ReactElement;
}

export interface IPerson {
  name: string;
  age: string;
}

//O que irá conter nesse Contexto
export interface IPersonContext {
  //Propriedades
  person: IPerson;

  //Métodos
  addPerson(person: IPerson): void;
  removePerson(): void;
}

//Retorno da gestão das propriedades e métodos do IPersonContext nas páginas
export const PersonContext = React.createContext<IPersonContext>(
  {} as IPersonContext,
);

//Passado no local onde será chamado as páginas, nesse caso no App.tsx
export const PersonProvider: React.FunctionComponent<IProps> = ({children}) => {
  const [data, setData] = React.useState<IPerson>({
    name: '',
    age: '0',
  });

  const addPerson = async (person: IPerson) => {
    try {
      setData(person);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removePerson = async () => {
    setData({
      name: '',
      age: '0',
    });
  };

  return (
    <PersonContext.Provider value={{person: data, addPerson, removePerson}}>
      {children}
    </PersonContext.Provider>
  );
};

//HOOK criado para facilitar a manipulação
export function usePersonContext(): IPersonContext {
  const context = React.useContext(PersonContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em um PersonProvider');
  }

  return context;
}
