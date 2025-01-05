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
import { useCreateTaskMutation } from "@/redux/api/baseApi";
import { TMissionPriority } from "@/Types/types";
import { ChangeEvent, FormEvent, useState } from "react";

const AddMissionModal = () => {
  const [createTask, { data }] = useCreateTaskMutation();
  console.log("Data: ", data);

  const [priority, setPriority] = useState<TMissionPriority>("medium");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target?.value as TMissionPriority);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const title = Form.titlee.value;
    const description = Form.desc.value;
    const dueDate = Form.date.value;
    const isCompleted = false;
    const formData = { title, description, dueDate, priority, isCompleted };
    console.log(formData);
    const res = await createTask(formData).unwrap();
    console.log("Inside Submit: ", res);
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
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
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

export default AddMissionModal;
