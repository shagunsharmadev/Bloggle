import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CreateBlog from './pages/CreateBlog'
import ProtectedRoute from './components/ProtectedRoute'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Blog from './pages/Blog'

function App() {
  const [token,setToken] = useState(Cookies.get('token')||'')
  useEffect(()=>{
    setToken(Cookies.get('token'))
  },[Cookies.get('token')])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/create-blog"
          element={
            <ProtectedRoute token={token}>
              <CreateBlog />
            </ProtectedRoute>
          }
        />

        <Route path="/:username" element={<Profile />} />
        <Route
          path="/blog/:blogId"
          element={
            <ProtectedRoute token={token}>
              <Blog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
