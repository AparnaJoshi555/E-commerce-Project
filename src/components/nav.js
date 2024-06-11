/*import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';

function nav() {
  return (
    <Navbar style={{backgroundColor:'#361500'}} expand="lg" >
      <Container fluid>
        <Navbar.Brand  style={{color:'white',fontSize:'21px'}} href="#">Vintage Vista</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll >
            <Nav.Link style={{color:'white'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/login">Login</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/register">SignUp </Nav.Link>

            <NavDropdown title="Category" id="navbarScrollingDropdown" >
              <NavDropdown.Item  href="#action3">Camera</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Watches</NavDropdown.Item>
               <NavDropdown.Item href="#action4"> Clothes </NavDropdown.Item>
             
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{color: 'white', borderColor: 'white'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default nav;*/
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';
import SearchResult from './SearchResult';
import Home from './Home';
import { Link } from 'react-router-dom';




function Navigation( ) {
    const [query, setQuery] = useState('');
    //const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(query);
        window.location.href = `/searchresult/${encodeURIComponent(query)}`;
        // Navigate to the search results page with the query as a URL parameter
       // history.push(`/searchresult?query=${query}`);
    };
  /* const fetchItemsFromBackend = async (searchQuery) => {
    try {
      const response = await fetch(`http://localhost:9078/api/byname/${searchQuery}`);
      
      if (response.ok) {
        const data = await response.json();
        //console.log('Search Results:', data);
        
        //onSearch(data);
       
      } else {
        console.error('Failed to fetch items from the backend');
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };*/

  return (
      <Navbar style={{ backgroundColor:'#361500'}} expand="lg" >
      <Container fluid>
        <Navbar.Brand  style={{color:'white',fontSize:'21px'}} href="#">Vintage Vista</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll >
            <Nav.Link style={{color:'white'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/login">Login</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/register">SignUp </Nav.Link>

            <NavDropdown title="Category" id="navbarScrollingDropdown" >
              <NavDropdown.Item  href="#action3">Camera</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Watches</NavDropdown.Item>
               <NavDropdown.Item href="#action4"> Clothes </NavDropdown.Item>
             
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
                          onChange={(e) => setQuery(e.target.value)} 
                      />
                 
            <Button type="submit" variant="outline-success" style={{color: 'white', borderColor: 'white'}} >Search</Button>
          </Form>
        </Navbar.Collapse>
          </Container>
         
    </Navbar>
  );
}

export default Navigation;
