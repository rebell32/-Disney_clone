import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Login/>}>
        </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
