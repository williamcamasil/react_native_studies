## Feature Props / Components

## ### Code snippets (exemples)

**Declaration:** Tipagem de lista [TS]

```typescript
interface Task {
    id: string;
    title: string;
}


export const Home = () => {
    const [newTask, setNewTask] = React.useState('');
    const [tasks, setTasks] = React.useState<Task[]>([]);

    const handleAddNewTask = () => {
        const data = {
            id: String(new Date().getTime()),
            title: newTask ? newTask : 'Task empty',
        };

        setTasks([...tasks, data]);
    };

    ...
}
```

**Declaration:** props [TS]

Exemplo de componente enviando props

```tsx
<TaskList tasks={tasks} />
```

Exemplo do componente recebendo props

```tsx
interface Task {
    id: string;
    title: string;
}

interface TaskListProps {
    tasks: Task[];
}

export const TaskList = ({tasks}: TaskListProps) => {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.buttonTask}>
                    <Text style={styles.titleTask}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    );
};
```

### Links

* ...
