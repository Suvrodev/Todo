# React + TypeScript + Vite + Redux + ShadCN

### Types in useState

`bash const [filterTask, setFilterTask] = useState<ITask[]>([]);`

- https://github.com/Suvrodev/Todo/blob/main/src/utilities/filterTask.ts

### Types in set data from props

```bash
const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriority(event?.target?.value as TPriotiy);
}
```

- https://github.com/Suvrodev/Todo/blob/main/src/Layout/Pages/Task/UpdateTaskModal/UpdateTaskModal.tsx

### Types in Dropdown

```bash
const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriority(event?.target?.value as TPriority);
}
```

- https://github.com/Suvrodev/Todo/blob/main/src/Layout/Pages/Task/AddTaskModal/AddTaskModal.tsx

### Types in Check box

```bash const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
};
```

- https://github.com/Suvrodev/Todo/blob/main/src/Layout/Pages/Task/TaskCard/TaskCard.tsx

### Types in Form

```bash
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
}
```

- https://github.com/Suvrodev/Todo/blob/main/src/Layout/Pages/Task/AddTaskModal/AddTaskModal.tsx

### Types in props

```bash
interface IProps {
  user: IUsers;
}
const UserCard = ({ user }: IProps) => {}
```

- https://github.com/Suvrodev/Todo/blob/main/src/Layout/Pages/User/UserCard/UserCard.tsx

### Types in Actions in Reducer

`  addTask: (state, action: PayloadAction<ITask>) => {}`

-
- https://github.com/Suvrodev/Todo/blob/main/src/redux/features/task/taskSlice.ts
