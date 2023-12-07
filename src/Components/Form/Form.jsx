import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

function Form() {
  const navigate = useNavigate();
 
  const [username, setName] = useState();
  const [password, setPassword] = useState();

  const { setItem } = useLocalStorage();
  const handleSubmit = (event) => {
    console.log({ password, username });
    event.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
       setItem("token", res.data.token);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className=" flex place-content-center mt-32  ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded px-4 w-[500px] pt-12  pb-8 mb-4"
        >
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3  "
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
