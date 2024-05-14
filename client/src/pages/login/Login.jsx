import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
    <div className="flex flex-col md:flex-row rounded-lg bg-pink-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-4/5 md:flex mt-5">
      <div className="hidden md:block w-full shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 p-20">
        <h1 className="text-4xl font-bold text-white mt-6 leading-tight">
          <span className="block">Welcome!</span>
          <span className="block">
            To <span className="text-pink-300">Oh ChatApp</span>
          </span>
        </h1>
        <p className="text-gray-300 mt-6">
          Dive into the conversation and reconnect with your friends.
        </p>
      </div>
      <div className="w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white m-4">
          Sign In
          <span className="text-pink-300"> - Oh-ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
          <div className="text-center mt-4">
            <Link
              to="/signup"
              className="inline-block align-baseline font-bold text-sm text-gray-300 hover:text-gray-400"
            >
              Create A New Account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
