import { useAppSelector } from "@/redux/hook";
import AddUserModal from "./AddUser/AddUserModal";
import UserCard from "./UserCard/UserCard";

const User = () => {
  const { users } = useAppSelector((state) => state.users);
  // console.log(users);

  return (
    <div>
      <div className="flex justify-between items-center my-10">
        <h1 className=" font-bold">Users</h1>
        <div className="flex items-center gap-4">
          <div>
            <AddUserModal />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-40">
        {users.map((user, idx) => (
          <UserCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
