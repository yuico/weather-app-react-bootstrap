import { matchWeather } from '../lib/utils'
import { Card, Nav } from 'react-bootstrap'

const WeatherListsNav = ({weatherData, parentCallback}) => {
  const handleLocation = (e) => {
    parentCallback(e.target.id.split('-')[1])
  } 

  return (
    <Card border="0">
      <Card.Title className="main-card-title">
        <i className="fas fa-map-marked-alt"></i>
        Favorite Location
      </Card.Title>
      <Nav as="ul" className="flex-column col-body bg-lightblue" id="left-col-body" activeKey="1">
        { weatherData && weatherData.map((loc, i) =>     
          <Nav.Item className="nav-item-link" as="li" key={`nav-${i}`}>
            <Nav.Link 
              eventKey={i+1}
              id={`${loc.name}-${i}`} 
              href={`#${loc.name}`}
              onClick={handleLocation}
              className="left-col-list"
            >
              <img src={matchWeather(loc.weather[0].main)} alt={loc.weather[0].description}/><span>{loc.name}, {loc.sys.country}</span>
            </Nav.Link>
          </Nav.Item>   
        )}
      </Nav>
    </Card>   
  )
}

export default WeatherListsNav
