import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    await signin(data);
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full sm:p-10 px-5 py-7 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <input
            placeholder="Email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is Required</p>}
          <input
            placeholder="Password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="text-red-500">Password Required</p>}
          <button type="submit" className="w-full p-10 rounded-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-2 my-3 ">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
