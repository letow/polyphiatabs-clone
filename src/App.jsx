import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import SectionItem from './components/Section/SectionItem/SectionItem';

function App() {
  const [sections, setSections] = useState([
    'Featured',
    'All Tabs'
  ])

  return (
    <div className="App">
      <Header/>
      <Main sections={sections}/>
      
      <Footer/>
    </div>
  );
}

export default App;
