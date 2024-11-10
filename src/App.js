import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode Enalbed", "success")
    }
    else {
      setMode("dark");
      showAlert("Dark mode Enalbed", "success")
      document.body.style.backgroundColor = "black"
    }
  }
  return (
    <>
      {/* <Router> */}

        <Navbar title="TEXT Utils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} mode={mode} />
        {/* <About  mode={mode}/> */}
        {/* <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
          <Route path="/about" element={<About  mode={mode}/>} />
        </Routes> */}


      {/* </Router> */}
    </>
  );
}

export default App;
