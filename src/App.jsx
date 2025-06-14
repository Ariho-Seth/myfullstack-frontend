
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Layout/Navbar'
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from "./Users/AddUser";

function App() {

    return(
      <div className="App">
          <Router>
              <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/> 
              <Route path="/adduser" element={<AddUser />}/> 
            </Routes>
          </Router>

     
      </div>
    )
 
}

export default App
