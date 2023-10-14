import React, { useState } from 'react';
import './App.css';


// Importing Components
import Header from './components/Header';
import Cars from './components/Cars';
import Footer from './components/Footer';


function App() {

  const [ pageNumber, setPageNumber ] = useState(1);
  const [ searchTerm, setSearchTerm ] = useState("");

  return (
    <div className="Home">
      
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
      
      <Cars pageNumber={pageNumber}  searchTerm={searchTerm} />
      
      <Footer setPageNumber={setPageNumber}/>

    </div>
  );
}

export default App;
