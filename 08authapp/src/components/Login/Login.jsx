import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) return;

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (foundUser) {
      setError("");
      login(foundUser);
      setUsername("");
      setPassword("");
      navigate("/dashboard")
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-orange-100"
      >
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Welcome Back
        </h1>

        <input
          type="text"
          placeholder="Enter username"
          className="w-full mb-4 px-4 py-3 rounded-xl border border-orange-200 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full mb-6 px-4 py-3 rounded-xl border border-orange-200 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          Login
        </button>

        <p className="text-red-500 text-center mt-4">
          {error}
        </p>
      </form>
    </div>
  )
}

export default Login