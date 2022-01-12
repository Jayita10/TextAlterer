import "./App.css"
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not 
  const [alert, setAlert] = useState(null);  // here alert is an object

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
    <Navbar title="Text Alterer" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    <div className="container my-4">
       <TextForm showAlert={showAlert} heading="Enter The Text to analyze below-" mode={mode}/> 
    </div>
    </>
  );
}

export default App;
