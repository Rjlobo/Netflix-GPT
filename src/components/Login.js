import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="backgroundImage"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-3/12 absolute my-36 p-12 mx-auto right-0 left-0 text-white bg-opacity-80 bg-black"
        >
          <h1 className="text-3xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-6 w-full bg-gray-600"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 my-6 w-full bg-gray-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-6 bg-gray-600 w-full"
          />
          <p className="text-lg font-semibold m-2 text-red-700">
            {errorMessage}
          </p>
          <button
            className=" w-full bg-red-600 p-4 my-4 border rounded-lg text-white"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign UP"}
          </button>
          <p
            className=" font-semibold cursor-pointer py-4"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registered? Sign in Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
