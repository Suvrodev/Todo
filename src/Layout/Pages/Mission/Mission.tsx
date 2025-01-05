import { useGetTasksQuery } from "@/redux/api/baseApi";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch } from "@/redux/hook";
import { updateFilter } from "@/redux/features/task/taskSlice";
import MissionCard from "./MissionCard/MissionCard";
import { IMission } from "@/Types/types";
import AddMissionModal from "./AddMissionModal/AddMissionModal";

const Mission = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetTasksQuery(undefined);
  // console.log({ data, isLoading });
  // console.log("Data: ", data?.tasks);
  if (isLoading) {
    return <div> Loading..... </div>;
  }
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
            <AddMissionModal />
          </div>
        </div>
      </div>
      <div className="space-y-5">
        {!isLoading &&
          data.tasks.map((task: IMission, idx: number) => (
            <MissionCard key={idx} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Mission;
