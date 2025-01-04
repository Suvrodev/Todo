import { ITask } from "@/Types/types";
import { useEffect, useState } from "react";

export const useFilterTask = (tasks: ITask[], filter: string) => {
  const [filterTask, setFilterTask] = useState<ITask[]>([]);
  useEffect(() => {
    if (filter === "All") {
      setFilterTask(tasks);
      return;
    }
    const taskFilter = tasks.filter((task) => task.priority === filter);
    setFilterTask(taskFilter);
  }, [tasks, filter]);
  return filterTask;
};
