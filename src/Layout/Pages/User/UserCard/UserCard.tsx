import { Trash2 } from "lucide-react";
import { IUsers } from "@/Types/types";
import { useAppDispatch } from "@/redux/hook";
import { deleteUser } from "@/redux/features/user/userSlice";

interface IProps {
  user: IUsers;
}
const UserCard = ({ user }: IProps) => {
  // console.log(user);
  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-md px-5 py-4">
      <div className=" flex justify-between">
        <h1>{user?.name}</h1>
        <p className="text-red-500  flex justify-center items-center">
          <Trash2
            className="size-4"
            onClick={() => dispatch(deleteUser(user.id))}
          />
        </p>
      </div>
    </div>
  );
};

export default UserCard;
