# React + TypeScript + Vite + Redux + ShadCN

### Types in useState

- const [filterTask, setFilterTask] = useState<ITask[]>([]);

### Types in Dropdown

- const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {setPriority(event?.target?.value);};

### Types in Check box

- const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {setIsChecked(event.target.checked);};

### Types in Check Form

- const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {}

### Types in set data from props in useState

- const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  setPriority(event?.target?.value as "Low" | "High" | "Medium");
  };

### Types in Check Box
