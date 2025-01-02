import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/Types/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}
const TaskCard = ({ task }: IProps) => {
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
          {task.title}
          <p className="font-bold">({task.priority})</p>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5"> {task.desc} </p>
    </div>
  );
};

export default TaskCard;
