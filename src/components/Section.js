import { useContext, useState, useCallback } from 'react';
import { MyContext } from '../lib/context';
import { Container, Row, Col } from 'react-bootstrap';

import WeatherListsNav from './WeatherListsNav';
import SelectedLocation from './SelectedLocation';

const Section = () => {
  const { weatherData, toggleOn } = useContext(MyContext) //get global data using Context api
  const [idx, setIdx] = useState(0);
  
  //get index from child componet
  const callback = useCallback((idx) => {
    setIdx(idx);
  }, []);

  return (
    <Container as="section">
      <Row id="main-row">
        <Col as="nav" sm={4} className="mb-3" id="left-col">
          <WeatherListsNav weatherData={weatherData} parentCallback={callback}/>        
        </Col>
        <Col as="main" sm={8} id="right-col">
          <SelectedLocation 
            weatherData={weatherData} 
            toggleOn={toggleOn} 
            idx={idx}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Section
