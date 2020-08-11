import React, {Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Search from './components/search/Search';
import Explore from './components/explore/Explore';
import Adventure from './components/adventures/Adventure';
import Gallary from './components/gallary/Gallary';
import Booking from './components/booking/Booking';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <Search />
        <Explore />
        <Adventure />
        <Booking />
        <Gallary />
        <Contact />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
