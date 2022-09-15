import './App.css';
import User from './Pages/UserP'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminP from './Pages/AdminP';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<User />} />
          <Route path='/admin' element={<AdminP />} />

        </Routes>
      </Router>

    </div > 
  );
}

export default App;
