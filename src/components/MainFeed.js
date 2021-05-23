import { useState, useEffect } from "react";
import WeatherStation from "./WeatherStation";

function MainFeed() {
  //useState hook for weather data (initial value = empty array. We will update it later (when we fetch the data from API))
  const [weatherData, setWeatherData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //useEffect with empty array as a second parameter will run the code only once (onMount)
  useEffect(() => {
    // fetch data from weather API
    fetch(`https://danepubliczne.imgw.pl/api/data/synop/`, {
      mode: "cors", // it is DEFAULT VALUE
      method: "GET", // allowed
    })
      .then((res) => res.json())
      .then((resJSON) => {
        //show in the console if we received the data from the API
        // console.log("resJSON", resJSON);
        //updating the state of weatherData
        setWeatherData(resJSON);
      })
      //catch the error
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //show in the consol if weatherData updated
  // console.log("weatherData", weatherData);

  return (
    <div>
      {/* search input */}
      <div className="mt-4">
        <span>Search city in Poland: </span>
        <input type="text" value={searchTerm} onChange={handleChange} />
      </div>

      {/* grid with all the Weather Stations  */}
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-600">
        {weatherData
          .filter((val) => {
            return val.stacja.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map(
            ({
              id_stacji,
              stacja,
              data_pomiaru,
              godzina_pomiaru,
              temperatura,
              suma_opadu,
              cisnienie,
              wilgotnosc_wzgledna,
            }) => (
              <WeatherStation
                //passing props to the WeatherStation component
                key={id_stacji}
                city={stacja}
                date={data_pomiaru}
                time={godzina_pomiaru}
                temp={temperatura}
                precipitation={suma_opadu}
                pressure={cisnienie}
                humidity={wilgotnosc_wzgledna}
              />
            )
          )}
      </div>
    </div>
  );
}

export default MainFeed;
