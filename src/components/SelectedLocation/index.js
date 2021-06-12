import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../lib/context';
import { matchWeather } from '../../lib/utils';
import { fetchFiveDaysData } from '../../lib/fetch';
import { Card } from 'react-bootstrap';

import Loading from '../Loading';

function SelectedLocation({ idx }) {
  const { weatherData, toggleOn } = useContext(MyContext); //get global data using Context api
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async (city) => {
      const res = await fetchFiveDaysData('forecast/daily', city);
      setData(res.list);
    };
    fetchData(weatherData[idx].id);
  }, [weatherData, idx]);

  if (weatherData[idx] === undefined)
    return (
      <Card border='0'>
        <Loading />
      </Card>
    );

  //Cal Temperature based on the toggle button
  const getTemperature = (temp) => {
    return !toggleOn ? Math.floor((temp * 9) / 5 + 32) : Math.floor(temp);
  };

  return (
    <Card border='0'>
      <Card.Title className='main-card-title' id='right-col-title'>
        {weatherData[`${idx}`].name}, {weatherData[`${idx}`].sys.country}
      </Card.Title>
      <Card.Body className='col-body' id='right-col-body'>
        <div>
          <img
            src={matchWeather(weatherData[`${idx}`].weather[0].main)}
            alt={weatherData[`${idx}`].weather[0].description}
          />
        </div>
        <div id='right-col-group'>
          <span id='right-col-temp'>
            <span className={`switch-${toggleOn}`}>
              {getTemperature(weatherData[`${idx}`].main.temp)}
            </span>
          </span>
          <span id='right-col-desc'>
            {weatherData[`${idx}`].weather[0].description
              .trim()
              .replace(/^\w/, (s) => s.toUpperCase())}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SelectedLocation;
