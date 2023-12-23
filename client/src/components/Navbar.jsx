import {Plus} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [token,setToken] = useState(Cookies.get('token') || '')
    useEffect(()=>{
      setToken(Cookies.get("token"));
    },[Cookies.get('token')])
    return (
      <nav className="flex justify-between items-center border-b px-16 py-4 sticky top-0 bg-white z-30">
        <Link to='/' className="logo text-4xl font-bold">Bloggle</Link>
        <div className="flex items-center gap-6">
          {!token ? (
            <Link
              to="/login"
              className="border-2 rounded-full px-6 py-2 text-sm border-primary hover:bg-primary duration-300 ease-in-out"
            >
              Sign in
            </Link>
          ) : (
            <Link to="/profile">
              <img
                src="https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
                alt="Profile"
                className="inline-block h-6 w-6 rounded-full"
              />
            </Link>
          )}
          <Link
            to="/create-blog"
            className="bg-primary rounded-full p-2 duration-300 ease-in-out hover:rotate-90"
          >
            <Plus size={20} className="text-black" />
          </Link>
        </div>
      </nav>
    );
}

export default Navbar