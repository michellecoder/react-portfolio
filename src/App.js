import React, {useState} from 'react';
import './App.css';
import AboutMe from './components/About-Me';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Header from './components/Header';

function App() {
  const [page, setPage]= useState(<AboutMe/>)
  return (
    <div className="App">
    
     <Header setPage={setPage}></Header>
    {page}
    <button onClick = {()=> setPage(<Contact/>)}>Change</button>
    <Footer/>
    </div>

  );
}

export default App;
