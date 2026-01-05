import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {GetUser} from '../Service/LoginService'


const Login = () => {
  const navigate = useNavigate();
  const [FormField, setFormField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [US, setUser] = useState([]);
  useEffect( () => {
    const FetchReq = async () => {
      const response = await GetUser();
      setUser(response.data);
    };
    FetchReq()
  }, [])
  console.log(US)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField((prev) => ({ ...prev, [name]: value }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(FormField);
    console.log(jsonData);
    setSubmitted(true);
    const user = US.find(
      (u) =>
        u.name === FormField.name &&
        u.email === FormField.email &&
        u.password === FormField.password
    );
  
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="bg-[#151934] w-full h-screen flex items-center justify-center">
      <div className="w-100 h-119 bg-[#1E2347] rounded-2xl shadow-[0_0_10px_#000] p-4 py-4 flex flex-col gap-3">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-1">Welcome Back</h1>
          <p className="text-[#8B92B2] text-ms font-light">
            Sign in to your account
          </p>
        </div>
        <form
          className="flex flex-col justify-between gap-5"
          onSubmit={FormSubmit}
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="name"
              value={FormField.name}
              className="border-2 h-12 px-3 rounded-lg border-white placeholder:text-white text-white focus:outline focus:outline-2 focus:outline-blue-500"
              placeholder="Enter Your Name..."
              onChange={handleChange}
            ></input>
            <span
              className="text-red-600 font-light "
              style={{
                display: submitted && !FormField.name.trim() ? "block" : "none",
              }}
            >
              Empty Field !!
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              value={FormField.email}
              name="email"
              className="border-2 h-12 px-3 rounded-lg border-white placeholder:text-white text-white focus:outline focus:outline-2 focus:outline-blue-500"
              placeholder="Enter Your Email"
              onChange={handleChange}
            ></input>
            <span
              className="text-red-600 font-light"
              style={{
                display:
                  submitted && !FormField.email.trim() ? "block" : "none",
              }}
            >
              Email is required
            </span>
          </div>{" "}
          <div className="flex flex-col gap-1">
            <input
              type="password"
              name="password"
              value={FormField.password}
              className="border-2 h-12 px-3 rounded-lg border-white placeholder:text-white text-white focus:outline focus:outline-2 focus:outline-blue-500"
              placeholder="Enter Password"
              onChange={handleChange}
            ></input>
            <span
              className="text-red-600 font-light"
              style={{
                display:
                  submitted && !FormField.password.trim() ? "block" : "none",
              }}
            >
              Password is required
            </span>{" "}
          </div>
          <button
            type="submit"
            className="h-12 bg-[#4F46E5] text-white rounded-lg font-bold cursor-pointer active:scale-95 transition-all ease-in"
          >
            Sign In
          </button>
        </form>
      </div>

      {showToast && (
        <div className="fixed top-6 right-6 w-[320px] backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl">
          <div class="flex gap-3 p-4">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/30 text-red-400">
              🚫
            </div>

            <div>
              <h3 class="text-white font-semibold text-sm">Access Denied</h3>
              <p class="text-gray-300 text-xs mt-1">
                Credentials do not match our records.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
