import { IUsers } from "@/Types/types";

interface IProps {
  user: IUsers;
}
const UserCard = ({ user }: IProps) => {
  // console.log(user);
  return (
    <div className="border rounded-md px-5 py-4">
      <h1>{user?.name}</h1>
    </div>
  );
};

export default UserCard;
