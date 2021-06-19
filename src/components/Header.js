import { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Switch from './Switch';

const Header = ({ parentCallback }) => {
  const [on, setON] = useState(false);
  const handleToggle = () => {
    setON(!on);
    parentCallback(on);
  };
  return (
    <Navbar as='header' fixed='top' expand='lg' variant='light' bg='primary'>
      <Container>
        <Navbar.Brand id='title' href='/'>
          <i className='fas fa-umbrella'></i>Weather
        </Navbar.Brand>
        <Switch isOn={on} onColor='#EF476F' handleToggle={handleToggle} />
      </Container>
    </Navbar>
  );
};

export default Header;
