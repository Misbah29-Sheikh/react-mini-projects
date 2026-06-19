import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card'
import useWeatherData from './hook/useWeatherData'

function App() {
  const [cityInput, setCityInput] = useState("")
  const [city, setCity] = useState("")

  const { data, loading } = useWeatherData(city)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityInput.trim()) return;
    setCity(cityInput);
    setCityInput("")
  }
 
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
     style={{backgroundImage: `url( https://images.pexels.com/photos/33283962/pexels-photo-33283962.jpeg)`}}>
      <div className='bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl w-[340px]'>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <input
            type="text"
            className='bg-gray-800 text-white outline-none rounded p-3 w-full'
            onChange={(e) => setCityInput(e.target.value)}
            value={cityInput}
            placeholder='Enter a city name...'
          />
          <button type="submit" className="bg-gray-800 text-white rounded p-3 w-full font-semibold hover:bg-gray-700 active:scale-95 transition">Search</button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Card data={data} />
        )}
      </div>
    </div>
  )
}

export default App
