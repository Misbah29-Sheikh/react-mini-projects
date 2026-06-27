import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

function Home() {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn)

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">
          Welcome to AuthApp
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          A simple authentication app built with React Router,
          Context API, and Local Storage.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {
            !isLoggedIn ? (
              <>
                <Link to="/login">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
                    Login
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-100 transition">
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/dashboard">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
                  Go to Dashboard
                </button>
              </Link>
            )
          }
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-semibold text-orange-500 mb-2">
              React Router
            </h3>
            <p className="text-gray-600 text-sm">
              Learn navigation and routing.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-semibold text-orange-500 mb-2">
              Context API
            </h3>
            <p className="text-gray-600 text-sm">
              Manage authentication state.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-semibold text-orange-500 mb-2">
              Local Storage
            </h3>
            <p className="text-gray-600 text-sm">
              Persist login after refresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home