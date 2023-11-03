import React from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs/plugin/utc";

days.extend(utc);

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-800 md:max-w-[300px] w-[90%] px-5 py-9 rounded-xl flex flex-col h-full">
      <h1 className="text-2xl font-bold text-center my-2">{task.title}</h1>
      <p className="text-slate-300 text-center my-2 overflow-hidden h-[72px] flex items-center justify-center">{task.description}</p>
      <p className="text-slate-300 text-center mt-2 mb-5">
        {days(task.date).utc().format("DD/MM/YYYY")}
      </p>
      <div className="flex justify-center items-baseline gap-2">
        <button
          onClick={() => {
            deleteTask(task._id);
          }}
          className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md w-[35%]"
        >
          Delete
        </button>
        <Link
          to={`/tasks/${task._id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-[35%] text-center"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
