import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextt";
import Swal from "sweetalert2";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 sm:px-10 px-4 rounded-lg items-center">
      <Link to={isAuthenticated ? "/tasks" : "/login"}>
        <h1 className="text-2xl font-bold text-center mr-4">Task Manager</h1>
      </Link>
      <ul className="flex md:gap-x-5 gap-y-2 flex-col items-center md:flex-row">
        {isAuthenticated ? (
          <>
            <li className="text-center">Welcome {user.username}</li>
            <li className="w-full">
              <Link
                to="/add-task"
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-sm flex w-full justify-center"
              >
                Add Task
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/login"
                className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-sm flex w-full justify-center"
                onClick={async () => {
                  const confirmed = await Swal.fire({
                    title: "Are you sure you want to log out?",
                    icon: "warning",
                    confirmButtonText: "Yes, logout",
                    showCloseButton: true,
                  });

                  if (confirmed.isConfirmed) logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 justify-center items-center">
            <li className="w-full">
              <Link
                to="/login"
                className="bg-indigo-500 px-4 py-1 rounded-sm flex w-full justify-center"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-sm flex h-full"
              >
                Register
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
