import React from 'react'

function Card({ data }) {
  if (!data.current) return null;

  return (

    <div className="mt-4 bg-gray-800 text-white rounded-xl p-5 shadow-lg">
      <div className="flex items-center gap-2">
        <img
          src={data.current?.condition?.icon}
          alt={data.current?.condition?.text}
        />
        <h2 className="text-2xl font-bold">
          {data.location?.name}
        </h2>
      </div>

      <p className="text-gray-300 mt-1">
        {data.current?.condition?.text}
      </p>

      <p className="text-5xl font-bold mt-4">
        {data.current?.temp_c}°C
      </p>

      <p className="text-2xl font-bold mt-4">
        Humidity : {data.current?.humidity}
      </p>

      <p className="text-2xl font-bold mt-4">
        Wind : {data.current?.wind_kph}km/h
      </p>

    </div>
  )
}

export default Card