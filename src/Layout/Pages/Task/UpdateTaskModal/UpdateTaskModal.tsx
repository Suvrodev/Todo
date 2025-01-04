import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { updateTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask, TPriority } from "@/Types/types";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { SquarePen } from "lucide-react";
import { ChangeEvent, useState } from "react";

type IProps = {
  task: ITask;
};
const UpdateTaskModal = ({ task }: IProps) => {
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  //   console.log("Update task: ", task);
  const { id, title, desc, dueDate } = task;

  const [priority, setPriority] = useState<TPriority>(task.priority);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriority(event?.target?.value as TPriority);
  };

  const [assignedBy, setAssignedBy] = useState<string>("");
  const handleAssignedBy = (event: ChangeEvent<HTMLSelectElement>) => {
    setAssignedBy(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const title: string = Form.titlee.value;
    const desc: string = Form.desc.value;
    const dueDate: string = Form.date.value;
    const taskData = {
      title,
      desc,
      dueDate,
      priority,
      assignedBy,
    };
    console.log("Task Data: ", taskData);
    dispatch(updateTask({ taskData, id }));
  };
  // console.log("Task Data in Update: ", dueDate);
  const formattedDate = new Date(dueDate).toISOString().split("T")[0];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen className="size-4" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-start ">
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
              defaultValue={desc}
            />
          </div>

          <div className="flex flex-col gap-2 items-start ">
            <p>Due Date</p>
            <input type="date" name="date" id="" defaultValue={formattedDate} />
          </div>

          <div className="flex flex-col gap-2 items-start ">
            <p>Priority</p>
            <select
              id="priority"
              value={priority}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 text-sm"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 items-start ">
            <p>Assigned By</p>
            <select
              id="assignedBy"
              onChange={handleAssignedBy}
              className="border border-gray-300 rounded-md p-2 text-sm"
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

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

export default UpdateTaskModal;
