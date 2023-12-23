import React, { useEffect } from 'react'
import RegisterForm from '../components/RegisterForm';
import RegisterImg from '../assets/digital-nomad.svg'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = Cookies.get("token")
    if(token) {
      navigate(-1)
    }
  },[navigate])
  return (
    <div className="register_div flex justify-center items-center w-full min-h-screen max-h-full">
      <div className="shadow-xl flex justify-center items-center h-[500px] bg-white gap-10 p-10 rounded-lg">
        <img src={RegisterImg} className="w-[400px]" />
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-center mb-2">Register</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register
