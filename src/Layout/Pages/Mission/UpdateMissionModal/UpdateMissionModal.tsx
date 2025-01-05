import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateMissionMutation } from "@/redux/api/baseApi";
import { IMission, TMissionPriority } from "@/Types/types";
import { SquarePen } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface IProps {
  task: IMission;
}

const UpdateMissionModal = ({ task }: IProps) => {
  // console.log("Update Task: ", task);
  const { _id, title, description, dueDate, priority, isCompleted } = task;

  const [updateMission] = useUpdateMissionMutation();
  // console.log("Dataaaaaaaaa: ", data);
  const [missionPriority, setMissionPriority] =
    useState<TMissionPriority>(priority);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMissionPriority(event.target?.value as TMissionPriority);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const title = Form.titlee.value;
    const description = Form.desc.value;
    const dueDate = Form.date.value;

    const formData = {
      title,
      description,
      dueDate,
      priority: missionPriority,
      isCompleted,
    };
    console.log(formData);
    const res = await updateMission({ id: _id, taskData: formData });
    console.log("res: ", res);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen className="size-4" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Update Mission</DialogTitle>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-start ">
            <p>
              id: <span className="italic font-bold">{_id}</span>{" "}
            </p>
            <p>Title</p>
            <input
              type="text"
              name="titlee"
              id=""
              placeholder="Task Title"
              className="w-full bg-transparent border-2 rounded-md py-2 px-4"
              defaultValue={title}
            />
          </div>
          <div className="flex flex-col gap-2 items-start ">
            <p>Description</p>
            <textarea
              name="desc"
              id=""
              placeholder="Task Description"
              className="w-full bg-transparent border-2 rounded-md  py-2 px-4"
              defaultValue={description}
            />
          </div>

          <div className="flex flex-col gap-2 items-start ">
            <p>Due Date</p>
            <input
              type="date"
              name="date"
              id=""
              defaultValue={
                dueDate ? new Date(dueDate).toISOString().slice(0, 10) : ""
              }
            />
          </div>

          <div className="flex flex-col gap-2 items-start ">
            <p>Priority</p>
            <select
              id="priority"
              value={priority}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 text-sm"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <p>
            Is Completed:{" "}
            <span
              className={`${
                isCompleted ? "text-green-500" : "text-yellow-300"
              }`}
            >
              {" "}
              {isCompleted ? "Yes" : "No"}{" "}
            </span>{" "}
          </p>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateMissionModal;
