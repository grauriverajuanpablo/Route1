import {Container,Nav,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar expand="lg" bg="danger" variant="dark">
      <Container className="justify-content-between">
        <Nav>
          <Link className='nav-item nav-link' to='/'><i className="fas fa-home"></i> Inicio</Link>
          <Link className='nav-item nav-link' to='/contacto'><i className="fas fa-square text-warning"></i> Contacto</Link>
          </Nav>
        <Navbar.Brand href="#home"><i className="fas fa-birthday-cake"></i> Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Menu

