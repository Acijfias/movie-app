import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Bookmared from './pages/Bookmared'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './layout/MainLayout'
import NotFound from './pages/NotFound'

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />} >
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<Series />} />
              <Route path='/bookmared' element={<Bookmared />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
