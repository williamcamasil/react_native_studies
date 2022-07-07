import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

//Será as telas a qual conterá as informações, ex.: Home
interface IProps {
  children: React.ReactElement;
}

//Informação que estará contida no contexto global
export interface ITask {
  id: string;
  title: string;
}

//O que contem nesse contexto, id title e metodos
export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  removeTask(id: string): void;
}

//Chave usada para armazenar os dados (AsyncStorage)
const tasksData = '@MyTasks:Tasks';

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

//Responsável por receber e enviar as informações das telas que utilizam ele
export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  //Usado para verificar se foi alterado o que contem no bd  local, para não precisar ficar consultando o tempo todo o bd
  const [data, setData] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    //Criamos essa function para poder utilizar o async
    async function loadTasks() {
      //Pega dados do BD
      const taskList = await AsyncStorage.getItem(tasksData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }

    //executa a função
    loadTasks();
  }, []);

  //Adiciona nova task
  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      //salva dados no BD
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  //Remove task
  const removeTask = async (id: string) => {
    //retorna exatamento o item selecionado que quer excluir
    const newTaskList = data.filter(task => task.id !== id);
    setData(newTaskList);
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
  };

  return (
    //Retorna data contendo id e task e métodos para as telas relacionadas como filhos
    <TasksContext.Provider value={{tasks: data, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};

//Hook criado para facilitar o fluxo
export function useTaskList(): ITasksContext {
  const context = React.useContext(TasksContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em um TasksProvider');
  }

  return context;
}
