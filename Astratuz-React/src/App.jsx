import './App.css'
import Cabecera from './components/Cabecera'
import Login from './components/Login'
import Status from './components/Status'
import Stadistics from './components/Stadistics'
import Principal from './components/Principal'
import Profile from './components/Profile'
import Pruebas from './components/Pruebas'
import Fuera from './components/fueradeservicio'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ServiceDescription from './components/ServiceDescription'


function App() {

  return (
    <div className="App">
      
      <Router>    
      <Cabecera screen="principal"/>    
        <Routes>
          <Route path="/login" element={<Login/>} exact></Route>
          <Route path="/status" element={<Status/>} exact></Route>
          <Route path="/stadistics" element={<Stadistics/>} exact></Route>
          <Route path="/principal" element={<Principal/>} exact></Route>
          <Route path="/profile" element={<Profile/>} exact></Route>
          <Route path="/pruebas" element={<Pruebas/>} exact></Route>          
          <Route path="/servicedescription" element={<ServiceDescription/>} exact></Route>
          <Route path="/service-astrazeneca" element={<Fuera/>} exact></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
