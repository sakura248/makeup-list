import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/config";

function SignIn() {
  // const [loginInfo, setLoginInfo] = useState({})

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      }
    } catch (error) {
      seterrorMessage(error);
      console.log(errorMessage);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center w-3/6 mx-auto mb-3 bg-gray-200 border-4 border-r-gray-400 border-b-gray-400 border-t-gray-50 border-l-gray-50">
      <h1 className="text-4xl text-white bg-blue-600 w-full text-center">
        Welcome back!
      </h1>

      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center my-8 w-4/5"
      >
        <label htmlFor="email" className="w-full font-bold text-lg mt-3 my-1">
          Email
        </label>
        <input
          className="w-full bg-white p-3 border-2 border-l-gray-400 border-t-gray-400 border-b-gray-50 border-r-gray-50"
          // labelName="Email"
          type="email"
          name="email"
          onChange={handleEmail}
          errorMessage={errorMessage}
        />
        <label
          htmlFor="password"
          className="w-full font-bold text-lg mt-3 my-1"
        >
          Password
        </label>
        <input
          className="w-full bg-white p-3 border-2 border-l-gray-400 border-t-gray-400 border-b-gray-50 border-r-gray-50"
          // labelName="Password"
          type="password"
          name="password"
          onChange={handlePassword}
          errorMessage={errorMessage}
        />

        <button className="mt-5 w-60 p-2 bg-gray-200 border-4 border-r-gray-400 border-b-gray-400 border-t-gray-50 border-l-gray-50 hover:border-l-gray-400 hover:border-t-gray-400 hover:border-b-gray-50 hover:border-r-gray-50">
          sign in
        </button>
        <button
          className="mt-5 w-60 p-2 bg-gray-200 border-4 border-r-gray-400 border-b-gray-400 border-t-gray-50 border-l-gray-50 hover:border-l-gray-400 hover:border-t-gray-400 hover:border-b-gray-50 hover:border-r-gray-50"
          onClick={signInWithGoogle}
          type="button"
        >
          Continue with Google
        </button>
        <Link
          to="/SignUp"
          className="text-sm text-center text-blue-600 hover:underline"
        >
          Not a member? Sign up here!
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
