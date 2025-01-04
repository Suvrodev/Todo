import { useLocation, useNavigate } from "react-router";

const Header = () => {
  type THeader = {
    name: string;
    path: string;
  };
  const headers: THeader[] = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Task",
      path: "/task",
    },
    {
      name: "user",
      path: "/user",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  // console.log("Location: ", location);

  const handleGoRoute = (path: string) => {
    // console.log(path);
    navigate(path);
  };

  return (
    <div className="bg-green-700 p-2 rounded-md flex items-center justify-center gap-5">
      {headers.map((header, idx) => (
        <span
          key={idx}
          className={`cursor-pointer text-xl ${
            location === header.path ? "font-bold" : ""
          }`}
          onClick={() => handleGoRoute(header.path)}
        >
          {" "}
          {header.name}{" "}
        </span>
      ))}
    </div>
  );
};

export default Header;
