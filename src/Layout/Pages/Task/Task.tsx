import { useAppDispatch, useAppSelector } from "@/redux/hook";
import "./Task.css";
import TaskCard from "./TaskCard/TaskCard";
import AddTaskModal from "./AddTaskModal/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updateFilter } from "@/redux/features/task/taskSlice";
import { useFilterTask } from "@/utilities/filterTask";

const Task = () => {
  const { tasks } = useAppSelector((state) => state.todo);
  const { filter } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const filterTask = useFilterTask(tasks, filter);

  return (
    <div>
      <div className="flex justify-between items-center my-10">
        <h1 className=" font-bold">Task</h1>
        <div className="flex items-center gap-4">
          <div className="">
            <Tabs defaultValue="All" className="">
              <TabsList className="grid grid-cols-4 tabColor">
                <TabsTrigger
                  value="All"
                  onClick={() => dispatch(updateFilter("All"))}
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="High"
                  onClick={() => dispatch(updateFilter("High"))}
                >
                  High
                </TabsTrigger>
                <TabsTrigger
                  value="Medium"
                  onClick={() => dispatch(updateFilter("Medium"))}
                >
                  Medium
                </TabsTrigger>
                <TabsTrigger
                  value="Low"
                  onClick={() => dispatch(updateFilter("Low"))}
                >
                  Low
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div>
            <AddTaskModal />
          </div>
        </div>
      </div>
      <div className="space-y-5">
        {filterTask.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
