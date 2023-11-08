import { useEffect } from "react";
import { useAuth } from "../context/AuthContextt";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <h1 className="text-2xl font-bold text-center">Register</h1>

          <input
            placeholder="Username"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="text"
            {...register("username", { required: true })}
          />
          {errors.username && <p className="text-red-500">Username Required</p>}
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
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
