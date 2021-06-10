import { matchWeather } from '../../lib/utils';
import { Card } from 'react-bootstrap';

function SelectedLocation({weatherData, toggleOn, idx}) {

  //Cal Temperature based on the toggle button
  const getTemperature = (temp) => {
    return !toggleOn ? Math.floor((temp * 9/5) + 32)
      : Math.floor(temp);
  }

  return (
    <Card border="0">
      <Card.Title className="main-card-title" id="right-col-title">{weatherData[`${idx}`].name}, {weatherData[`${idx}`].sys.country}</Card.Title> 
      <Card.Body 
        className="col-body" 
        id="right-col-body"
      >
        <div>
          {weatherData[`${idx}`] 
            ? <img 
                src={matchWeather(weatherData[`${idx}`].weather[0].main)} 
                alt={weatherData[`${idx}`].weather[0].description}
              /> 
            : 'Error'}
        </div>
        <div id="right-col-group">
          <span id="right-col-temp">
            {weatherData[`${idx}`] 
              ? <span className={`switch-${toggleOn}`}>
                  {getTemperature(weatherData[`${idx}`].main.temp)}
                </span> : 'Error'}
          </span>
          <span id="right-col-desc">
            {weatherData[`${idx}`] 
              ? weatherData[`${idx}`].weather[0].description.trim().replace(/^\w/, s => s.toUpperCase()) 
              : 'Error'}
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SelectedLocation
