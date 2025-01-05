import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IMission } from "@/Types/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: IMission;
}
const MissionCard = ({ task }: IProps) => {
  //   console.log("Task: ", task);
  const { title, priority, isCompleted, dueDate, description } = task;
  return (
    <div className="border px-5 py-3 rounded-lg">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <p
            className={cn("size-3  rounded-full", {
              "bg-green-500 ": priority === "high",
              "bg-yellow-500 ": priority === "medium",
              "bg-red-500 ": priority === "low",
            })}
          ></p>
          <p className={`${isCompleted ? "line-through" : ""}`}> {title}</p>
          <p className="font-bold">({priority})</p>
        </div>
        <div className="flex gap-3 items-center">
          {/* <UpdateTaskModal task={task} /> */}
          <Button
            variant="link"
            className="p-0 text-red-500"
            // onClick={handleDelete}
          >
            <Trash2 />
          </Button>
          <input
            type="checkbox"
            // checked={isChecked}
            // onChange={handleCheckBox}
          />
        </div>
      </div>
      <p className="my-5"> {description} </p>
      <div className="flex justify-between">
        <p className="">{dueDate}</p>
      </div>
    </div>
  );
};

export default MissionCard;
