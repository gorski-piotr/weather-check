function WeatherStation({
  city,
  date,
  time,
  temp,
  precipitation,
  pressure,
  humidity,
}) {
  return (
    <div className="p-4 bg-gray-200 rounded-lg m-4 w-auto">
      <p>City: {city}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Temperature: {temp}</p>
      <p>Precipitation sum: {precipitation}</p>
      <p>Air pressure: {pressure}</p>
      <p>Relative humidity: {humidity}</p>
    </div>
  );
}

export default WeatherStation;
