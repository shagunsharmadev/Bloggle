import { useNavigate } from 'react-router-dom';
import LoginImg from '../assets/man-riding-a-rocket.svg'
import LoginForm from '../components/LoginForm'
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Login = () =>{

  const navigate = useNavigate()
  useEffect(() => {
    const token = Cookies.get("token")
    if(token) {
      navigate(-1)
    }
  },[navigate])
    return (
      <div className="login_div flex justify-center items-center w-full min-h-screen max-h-full">
        <div className="shadow-xl flex justify-center items-center h-[500px] bg-white gap-10 p-10 rounded-lg">
          <img src={LoginImg} className="w-[400px]" />
          <div className="flex flex-col">
            <h1 className="text-7xl font-bold text-center mb-6">Login</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    );
}

export default Login