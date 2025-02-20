import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light')
  const [alert, setAlert]=useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#253044'
      // document.body.style.color='white'
      showAlert("Darkmode has been Enabled", "success")
      document.title = "Textgame-darkmode"
      // setInterval(()=>{
      //   document.title = 'text game is Amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Update your virus'
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      // document.body.style.color='dark'
      showAlert("Lightmode has been Enabled", "success")
      document.title = "Textgame-lightmode"
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextGame" mode= {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
    <Route path="/" element={<TextForm head="Thoughts" mode={mode} showAlert={showAlert} />} />
      <Route path="/about" element={<About mode={mode}/>} />
      <Route path="/textform" element={<TextForm head="Thoughts" mode={mode} showAlert={showAlert} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
