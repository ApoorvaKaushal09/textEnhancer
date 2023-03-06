// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

  function App() {
    const [mode, setmode] = useState('light')
    const [alert, setAlert ] = useState(null);
    const [clrmode, setclrmode] = useState('primary');

    const showAlert = (message, type) =>
    {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

    
    const toggleMode = ()=>
    {
      if(mode === 'light')
      {
        setmode('dark');
        document.body.style.backgroundColor = '#B2B2B2';
        showAlert(" Dark Mode Enabled", "success");
      }
      else{
        setmode('light');
        document.body.style.backgroundColor = 'white';
        showAlert(" Light Mode Enabled", "success");
      }
    }
  return (
    <>


     {/* <AboutUs/> */}
     <Alert alert={alert}/>
     <div className='container'>
      <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} setclrmode={setclrmode} clrmode={clrmode} toggleMode={toggleMode}/>
      <Routes>
          <Route exact path="/about" element={<AboutUs/>}>
            {/* <AboutUs/> */}
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} clrmode={clrmode} heading="Enter Text to Analyze" mode={mode}/>}>
          </Route>
        </Routes>
      </Router>
     </div>


    </>
    
  );
  
}
  
export default App;