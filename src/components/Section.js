import { useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import WeatherListsNav from './WeatherListsNav';
import SelectedLocation from './SelectedLocation';

const Section = () => {
  const [idx, setIdx] = useState(0);

  //get index from child componet
  const callback = useCallback((idx) => {
    setIdx(idx);
  }, []);

  return (
    <Container as='section'>
      <Row id='main-row'>
        <Col as='nav' sm={4} className='mb-3' id='left-col'>
          <WeatherListsNav parentCallback={callback} />
        </Col>
        <Col as='main' sm={8} id='right-col'>
          <SelectedLocation idx={idx} />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
