import { useAppSelector } from "@/redux/hook";
import TaskCard from "./TaskCard/TaskCard";
import AddTaskModal from "./AddTaskModal/AddTaskModal";

const Task = () => {
  const { tasks } = useAppSelector((state) => state.todo);
  // console.log("Tasks:", tasks);
  // console.log("Filter:", filter);
  return (
    <div>
      <div className="flex justify-between items-center my-10">
        <h1 className=" font-bold">Task</h1>
        <div className="">
          <AddTaskModal />
        </div>
      </div>
      <div className="space-y-5">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
