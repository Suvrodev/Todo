import { Button } from "@/components/ui/button";
import {
  decrement,
  increment,
  reset,
} from "../../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = (value: number) => {
    dispatch(increment(value));
  };
  const handleDecrement = (value: number) => {
    dispatch(decrement(value));
  };

  const handleReset = () => {
    dispatch(reset());
  };
  //   console.log("count: ", count);

  return (
    <div>
      <div className="w-2/4 border p-5 flex flex-col gap-4 mt-4">
        <p className="text-center bg-orange-600 p-2 rounded-md">{count}</p>
        <div className="flex justify-center gap-10">
          <Button
            className="btn bg-green-500 hover:bg-green-500 text-white w-[100px] h-[50px]  "
            onClick={() => handleDecrement(2)}
          >
            <p className="text-4xl  w-full h-full"> - </p>
          </Button>

          <Button
            className="btn bg-red-500 hover:bg-red-500 text-white w-[100px] h-[50px] "
            onClick={() => handleReset()}
          >
            <p className="text-4xl  w-full h-full"> 0 </p>
          </Button>

          <Button
            className="btn bg-green-500 hover:bg-green-500 text-white w-[100px] h-[50px] "
            onClick={() => handleIncrement(5)}
          >
            <p className="text-4xl  w-full h-full"> + </p>
          </Button>
        </div>
      </div>

      <div>
        <Button>Shadcn Button</Button>
      </div>
    </div>
  );
};

export default Home;
