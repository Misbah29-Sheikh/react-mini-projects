import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) return;

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(
      user => user.username === username
    );

    if (userExists) {
      alert("Username already exists");
      return;
    }

    const user = {
      id: Date.now(),
      username,
      password
    };


    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers, user])
    );

    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-orange-100"
      >
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Sign Up
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
          Signup
        </button>

        <p className="text-center text-gray-500 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup