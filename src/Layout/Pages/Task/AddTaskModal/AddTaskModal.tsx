import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

const AddTaskModal = () => {
  // type TPriority="High"|"Medium"|"Low";
  const [priority, setPriority] = useState("Medium");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };
  console.log("Priority: ", priority);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Form = event.target as HTMLFormElement;
    const title = (Form.elements.namedItem("title") as HTMLInputElement).value;
    const desc = Form.desc.value;
    const date = Form.date.value;

    console.log("Form Data: ", title, desc, date, priority);
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
              name="title"
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
              placeholder="Task Title"
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
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;
