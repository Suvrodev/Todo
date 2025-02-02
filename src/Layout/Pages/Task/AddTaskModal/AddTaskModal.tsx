import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  //   DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask, TPriority } from "@/Types/types";
import { ChangeEvent, useState } from "react";

const AddTaskModal = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  //For Dopdown
  const [priority, setPriority] = useState<TPriority>("Medium");
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriority(event?.target?.value as TPriority);
  };

  const [assignedBy, setAssignedBy] = useState<string>("");
  const handleAssignedBy = (event: ChangeEvent<HTMLSelectElement>) => {
    setAssignedBy(event.target?.value);
  };
  // console.log("Priority: ", priority);

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
    // console.log("Form Data: ", title, desc, date, priority);
    dispatch(addTask(taskData as ITask));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="bg-green-500 ">
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
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
            />
          </div>
          <div className="flex flex-col gap-2 items-start ">
            <p>Description</p>
            <textarea
              name="desc"
              id=""
              placeholder="Task Description"
              className="w-full bg-transparent border-2 rounded-md  py-2 px-4"
            />
          </div>

          <div className="flex flex-col gap-2 items-start ">
            <p>Due Date</p>
            <input type="date" name="date" id="" />
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

export default AddTaskModal;
