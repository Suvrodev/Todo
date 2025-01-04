import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/Types/types";
import { Trash2 } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import UpdateTaskModal from "../UpdateTaskModal/UpdateTaskModal";

interface IProps {
  task: ITask;
}
const TaskCard = ({ task }: IProps) => {
  // console.log("Task", task);
  const { id, isCompleted, assignedBy, dueDate } = task;
  const [isChecked, setIsChecked] = useState(false);

  const { users } = useAppSelector((state) => state.users);
  // console.log("users:", users);
  const dispatch = useAppDispatch();
  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    dispatch(toggleCompleteState({ id, isChecked }));
  }, [isChecked, id, dispatch]);

  ///Handle Delete
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const assignedPerson = users.find((user) => user.id === assignedBy);

  return (
    <div className="border px-5 py-3 rounded-lg">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <p
            className={cn("size-3  rounded-full", {
              "bg-green-500 ": task.priority === "High",
              "bg-yellow-500 ": task.priority === "Medium",
              "bg-red-500 ": task.priority === "Low",
            })}
          ></p>
          <p className={`${isCompleted ? "line-through" : ""}`}>
            {" "}
            {task.title}
          </p>
          <p className="font-bold">({task.priority})</p>
        </div>
        <div className="flex gap-3 items-center">
          <UpdateTaskModal task={task} />
          <Button
            variant="link"
            className="p-0 text-red-500"
            onClick={handleDelete}
          >
            <Trash2 />
          </Button>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckBox}
          />
        </div>
      </div>
      <p className="my-5"> {task.desc} </p>
      <div className="flex justify-between">
        <p className="">{dueDate}</p>
        <p>
          Assigned by :
          <span className="font-bold">
            {assignedPerson ? assignedPerson?.name : "No Name"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
