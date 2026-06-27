import React from 'react'
import { useAuth } from '../../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl p-10 border border-orange-100">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          Dashboard
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Welcome back,
          <span className="font-semibold text-orange-500">
            {" "}{user?.username || user}
          </span>
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
            <h2 className="font-semibold text-orange-500 mb-2">
              Authentication
            </h2>
            <p className="text-gray-600 text-sm">
              Logged in successfully.
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
            <h2 className="font-semibold text-orange-500 mb-2">
              Context API
            </h2>
            <p className="text-gray-600 text-sm">
              User state is managed globally.
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
            <h2 className="font-semibold text-orange-500 mb-2">
              Local Storage
            </h2>
            <p className="text-gray-600 text-sm">
              Login state persists after refresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Dashboard