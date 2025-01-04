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
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUsers } from "@/Types/types";
import { FormEvent } from "react";

const AddUserModal = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;

    const name = Form.namee.value;
    const userData = { name };
    dispatch(addUser(userData as IUsers));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="bg-green-500 ">
          Add User
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
            <p>Name</p>
            <input
              type="text"
              name="namee"
              id=""
              placeholder="Task Title"
              className="w-full bg-transparent border-2 rounded-md py-2 px-4"
            />
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

export default AddUserModal;
