import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  const [sections, setSections] = useState([
    'Featured',
    'All Tabs'
  ])

  return (
    <div className='App'>
      <Header/>
      <Main sections={sections}/>
      <hr id='hrLast' />
      <Footer/>
    </div>
  );
}

export default App;
