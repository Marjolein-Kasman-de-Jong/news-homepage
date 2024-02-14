import React from 'react';
import './App.css'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  const [menu, toggleMenu] = React.useState(false);
  
  return (
    <>
      <Header menu={menu} toggleMenu={toggleMenu} />
      <Main />
      <Footer />
    </>
  )
}

export default App;