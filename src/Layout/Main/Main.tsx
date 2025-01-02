import { Outlet } from "react-router";
import Header from "../Pages/Shared/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
