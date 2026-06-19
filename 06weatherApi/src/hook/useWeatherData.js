import { useEffect,useState } from "react";
const useWeatherData = (city) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=ee4d2c925f4648fbbff100530261906&q=${city}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res),
        setLoading(false)
      })
  }, [city])

 return {data,loading };
}

export default useWeatherData;