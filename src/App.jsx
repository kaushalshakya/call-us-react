import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './components/Sidebar';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element = {<Dashboard/>}></Route>
          <Route exact path='/login' element = {<Login/>}></Route>
          <Route exact path='/side' element = {<Example/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
