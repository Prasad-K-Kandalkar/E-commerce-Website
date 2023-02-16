import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import './index.css';
import './bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
            <Route path='/' component = {HomeScreen} exact />
          <Route path='/product/:id' component = {ProductScreen} />
        
          

        </Container>
      </main>
      <Footer />
    </Router>
    
    
  );
};

export default App;
