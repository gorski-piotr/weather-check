import { useState, useEffect } from "react";
import WeatherStation from "./WeatherStation";

function MainFeed() {
  //useState hook for weather data (initial value = empty array. We will update it later (when we fetch the data from API))
  const [weatherData, setWeatherData] = useState([]);

  //searchTerm and handleChange - to handle our search input
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
      {/* test button */}

      <button
        className="w-auto h-auto bg-gray-200 py-2 px-4 m-4 rounded"
        onClick={() => alert("You pressed the button!")}
      >
        Test button
      </button>

      {/* search input */}
      <div className="mt-4">
        <span>Search city in Poland: </span>
        {/* letters we type into this field will be saved into searchTerm state and used to filter weatherData */}
        <input type="text" value={searchTerm} onChange={handleChange} />
      </div>

      {/* grid with all the Weather Stations  */}
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-600">
        {weatherData
          .filter((val) => {
            // filter to receive only cities thich include letters we typed in the input field
            return val.stacja.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map(
            //map through filterred array (destructured props. Polish API that's why its in Polish language)
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
