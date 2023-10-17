import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Traffic from "./pages/js/traffic";
import Light from "./pages/js/light";
import ParkingMonitor from "./pages/js/parkingMonitor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router basename="/subDir">
      <Routes>
        <Route path="/" element={<ParkingMonitor/>} />
        <Route path="/traffic" element={<Traffic/>} />
        <Route path='/light' element={<Light/>} />
        <Route path='/parking' element={<ParkingMonitor/>} />
      </Routes>
    </Router>

  );
}

export default App;
