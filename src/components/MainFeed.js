import { useState, useEffect } from "react";

function MainFeed() {
  //useState hook (initial value = empty array. We will update it later (when we fetch the data from API))
  const [weatherData, setWeatherData] = useState([]);

  //useEffect with empty array as a second parameter will run the code only once (onMount)
  useEffect(() => {
    // fetch data from weather API
    fetch(`https://danepubliczne.imgw.pl/api/data/synop/`, {
      mode: "cors", // it is DEFAULT VALUE
      method: "GET", // allowed
    })
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON);
        //updating the state of weatherData
        setWeatherData(resJSON);
      })
      //catch the error
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("weather data", weatherData);

  return (
    <div className="mt-4">
      {weatherData.map(
        ({
          stacja,
          data_pomiaru,
          temperatura,
          suma_opadu,
          cisnienie,
          wilgotnosc_wzgledna,
        }) => (
          <p>
            City: {stacja}. Date: {data_pomiaru}. Temperature: {temperatura}
          </p>
        )
      )}
    </div>
  );
}

export default MainFeed;
