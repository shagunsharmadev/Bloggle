import { Eye,EyeSlash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Cookies from 'js-cookie'

const LoginForm =() => {
    const [isPassVis,setIsPassVis]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

    const handleLogin = async(e) => {
      e.preventDefault()
      if(password.length<6){
        alert("Password must be 6 characters long")
        return
      }

      try {
        const data = await axios.post("http://localhost:3000/api/login", {
          email,
          password,
        });
        Cookies.set("token", data.data.token, { expires: 90 });
      } catch (error) {
        alert(error.response.data.message)
        return 
      }
      navigate('/')
    }

    return (
      <form className="flex flex-col gap-10 p-4" onSubmit={handleLogin}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          className="border p-2 rounded-md w-[380px] outline-none text-sm border-primary"
          required
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
          </div>
        </div>

        <button
          type="submit"
          className="btn"
        >
          Login
        </button>
      </form>
    );
}

export default LoginForm