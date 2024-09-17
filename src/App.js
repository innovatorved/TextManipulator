// import logo from './logo.svg';
import './App.css';
import About from './comp/About';
import Navbar from './comp/Navbar';
import TextForm from './comp/TextForm';
import Contact from './comp/Contact';
import {useState} from 'react';
import Alert from './comp/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#32383e";
      showAlert("Dark Mode is Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#eef2e4";
      showAlert("Bright Mode is Enable", "success");
    }
  };

  const [alertVar, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar title="TextManipulator" aboutTXT="About" cont="Contact" mode={mode} toggleMode={toggleMode} />
        <Alert alertMsg={alertVar} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/contact" element={<Contact mode={mode} showAlert={showAlert} />} />
            <Route exact path="/" element={<TextForm heading={"Enter the text to analyze below "} mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;