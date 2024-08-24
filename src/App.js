import React from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Users from './Pages/Users'
import Registration from './Pages/Registration'
const App = () => {
  return <div>
         <BrowserRouter>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to="/index" className='navbar-brand'>Login</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li><Link to="/index" className='nav-link'>Home</Link></li>
                        <li><Link to="/about" className='nav-link'>About</Link></li>
                        <li><Link to="/services" className='nav-link'>Services</Link></li>
                        <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                        <li><Link to="/users" className='nav-link'>Users</Link></li>
                        <li><Link to="/registration" className='nav-link'>Registration</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="index" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="registration" element={<Registration/>}/>
            </Routes>
            </BrowserRouter>
          </div>
}

export default App