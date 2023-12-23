import React from 'react'
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const RegisterForm = () => {

  const [email,setEmail]=useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isPassVis, setIsPassVis] = useState(false)
  const [isConfirmPassVis, setIsConfirmPassVis] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()

    if (password.length > 6) {
      alert("Password must be 6 characters long")
      return
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (!usernameRegex.test(username)) {
      alert("Username can only contain alphanumeric characters and underscore and must be 3-16 characters long")
      return
    }
    try {
      const data = await axios.post('http://localhost:3000/api/register',{
        email,
        username,
        name,
        password
      })    
      Cookies.set("token", data.data.token , { expires: 90 });
      

    }catch(error){
      alert(error.response.data.message)
      return
    }

    setEmail("")
    setUsername("")
    setName("")
    setPassword("")
    setConfirmPassword("")

    navigate('/')
  }

  return (
    <form
      className="flex flex-col gap-6 p-4 w-[380px]"
      onSubmit={handleRegister}
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
        className="border p-2 rounded-md outline-none text-sm border-primary"
        required
      />

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        className="border p-2 rounded-md outline-none text-sm border-primary"
      />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        className="border p-2 rounded-md outline-none text-sm border-primary"
      />

      <div>
        <div className="flex justify-center items-center border rounded-md border-primary">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={isPassVis ? "text" : "password"}
            placeholder="password"
            className="p-2 rounded-md w-[350px] outline-none text-sm"
            required
          />
          {password.length > 0 && (
            <button type="button" onClick={() => setIsPassVis((prev) => !prev)}>
              {isPassVis ? (
                <EyeSlash
                  size={20}
                  className="mr-2 text-gray-500 cursor-pointer"
                />
              ) : (
                <Eye size={20} className="mr-2 text-gray-500 cursor-pointer" />
              )}
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center border rounded-md border-primary">
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={isConfirmPassVis ? "text" : "password"}
            placeholder="confirm password"
            className="p-2 rounded-md w-[350px] outline-none text-sm"
            required
          />

          {confirmPassword.length > 0 && (
            <button
              type="button"
              onClick={() => setIsConfirmPassVis((prev) => !prev)}
            >
              {isConfirmPassVis ? (
                <EyeSlash
                  size={20}
                  className="mr-2 text-gray-500 cursor-pointer"
                />
              ) : (
                <Eye size={20} className="mr-2 text-gray-500 cursor-pointer" />
              )}
            </button>
          )}
        </div>
      </div>

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
}

export default  RegisterForm    
