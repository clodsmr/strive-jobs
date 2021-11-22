import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Container, Row, Col, Form} from "react-bootstrap"
import Search from "./components/Search.jsx"
import { useState } from 'react';

function App() {

  const [query, setQuery] = useState("")

  return (
    <div className="App">
     <BrowserRouter>
    <Container>
      <Row>
        <Col sm={12} className="text-center">
          <Link to="/">
            <h1>Strive Jobs</h1>
            <Form.Group controlId="exampleForm.ControlInput1" className="mr-2 mt-1">
                <Form.Control type="text" placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Form.Group>

          </Link>
        </Col>
        
      </Row>
      <hr />
     <Routes>
    
        <Route path="/" element= {query.length > 3 && <Search query={query} />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes> 
    </Container>
  </BrowserRouter>
    </div>
  );
}

export default App;
