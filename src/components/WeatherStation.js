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
      <p className="font-bold">
        City: <span className="font-normal italic">{city}</span>
      </p>
      <p className="font-bold">
        Date: <span className="font-normal italic">{date}</span>
      </p>
      <p className="font-bold">
        Time: <span className="font-normal italic">{time}</span>
      </p>
      <p className="font-bold">
        Temperature: <span className="font-normal italic">{temp}</span>
      </p>
      <p className="font-bold">
        Precipitation sum:{" "}
        <span className="font-normal italic">{precipitation}</span>
      </p>
      <p className="font-bold">
        Air pressure: <span className="font-normal italic">{pressure}</span>
      </p>
      <p className="font-bold">
        Relative humidity:{" "}
        <span className="font-normal italic">{humidity}</span>
      </p>
    </div>
  );
}

export default WeatherStation;
