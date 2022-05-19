import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <RequireAuth><Home></Home></RequireAuth>
        }></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
