import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1 className="text-center text-3xl mt-10">No tasks created...</h1>;
  return (
    <div className="flex flex-wrap gap-3 mt-10 md:mt-5 justify-center items-center">
      {tasks.map((task) => (
       <TaskCard task={task} key={task._id}/>
      ))}
    </div>
  );
};

export default TaskPage;
