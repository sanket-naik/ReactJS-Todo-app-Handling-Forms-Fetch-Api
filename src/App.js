import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import ApiCall from './practice/ApiCall'
import Form from './practice/Forms'

function App() {
  return (
    <div className="m-2 border">
      <Header />
      <MainContent />
      {/* <ApiCall/>
      <Form/> */}
    </div>
    
  );
}

export default App;
