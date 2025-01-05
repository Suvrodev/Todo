import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  useDeleteMissionMutation,
  useUpdateMissionMutation,
} from "@/redux/api/baseApi";
import { IMission } from "@/Types/types";
import { Trash2 } from "lucide-react";
import UpdateMissionModal from "../UpdateMissionModal/UpdateMissionModal";
import { ChangeEvent, useState } from "react";

interface IProps {
  task: IMission;
}
const MissionCard = ({ task }: IProps) => {
  // console.log("Task: ", task);
  const { _id, title, priority, isCompleted, dueDate, description } = task;

  const [deleteMission] = useDeleteMissionMutation();
  const [updateMission] = useUpdateMissionMutation();
  // console.log("data: ", data);

  const [isChecked, setIsChecked] = useState<true | false>(isCompleted);
  const handleCheckBox = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked as true | false);

    const res = await updateMission({
      id: _id,
      taskData: { isCompleted: !isChecked },
    });
    console.log("Res: ", res);
  };

  const handleDelete = async (id: string) => {
    console.log("Delete id: ", id);
    const res = await deleteMission(id);
    console.log("Res: ", res);
  };

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
          <UpdateMissionModal task={task} />
          <Button
            variant="link"
            className="p-0 text-red-500"
            onClick={() => handleDelete(_id)}
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
      <p className="my-5"> {description} </p>
      <div className="flex justify-between">
        <p className="">
          {dueDate ? new Date(dueDate).toISOString().slice(0, 10) : ""}
        </p>
      </div>
    </div>
  );
};

export default MissionCard;
