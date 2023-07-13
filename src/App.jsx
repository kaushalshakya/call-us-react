import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element = {<Dashboard/>}></Route>
          <Route exact path='/login' element = {<Login/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
