// App.js

import './App.css';
import AdminComponent from './components/Admin/AdminComponent';
import OrderSuccess from './components/Orders/OrderSuccess';
import MainComponent from './components/main/MainComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/order" element={<OrderSuccess />} />
          <Route path="/" element={<MainComponent />} />
          <Route path="/admin" element={<AdminComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
