import TextareaAutosize from "react-textarea-autosize";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Blogs from '../components/Blogs'
import axios from 'axios'
import { NotePencil } from '@phosphor-icons/react' 

const Profile = () => {
    const {username} = useParams()
    const [tab,setTab] = useState("Home")
    const [user, setUser] = useState(null)   

    useEffect(() => {
      const getProfile = async () => {
        try {
          const data = await axios.get(`http://localhost:3000/api/${username}`)
          setUser(data.data.user)

        } catch (error) {
          alert(error.response.data.message)
        }
      }
      getProfile()
    },[username])

    useEffect(()=>{
      console.log(user)
    },[user])
  return (
    <>
      {user && (
        <div className="flex flex-col justify-center items-center mt-5 w-[900px] mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={user && user.avatar.url}
              alt="Profile"
              className="rounded-full border w-[200px] mb-3"
            />

            <h2 className="capitalize text-5xl font-semibold ">
              {user && user.name}
            </h2>
            <p className="text-gray-500">{user && user.username}</p>
            <Link className=" flex items-center gap-2 mt-2" to={"edit"}>
              <NotePencil size={20} className='text-gray-800' />
              Edit Profile
            </Link>
          </div>

          <div className="flex gap-10 w-full mt-[30px] px-4">
            <button
              className={`${
                tab === "Home" && "border-b font-semibold border-black"
              } py-3`}
              onClick={() => setTab("Home")}
            >
              Home
            </button>
            <button
              className={`${
                tab === "About" && "border-b font-semibold border-black"
              } py-3`}
              onClick={() => setTab("About")}
            >
              About
            </button>
          </div>

          <div className="w-full">
            {tab === "Home" ? (
              user && user.blogs.length > 0 ? (
                <Blogs />
              ) : (
                <p className="mx-4 mt-5 text-2xl font-semibold text-gray-500">
                  No blogs created yet
                </p>
              )
            ) : (
              <div className="border-t py-4">
                
                {
                  user && user.bio ? <p>{user.bio}</p> : <div>
                    <TextareaAutosize placeholder= "write about yourself..." className="outline-none resize-none w-full text-xl"/>
                    <div className="w-full py-10 flex justify-end">
                      <button className="btn px-10 py-1 font-bold">Save</button>
                    </div>
                    </div>
                  }
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Profile
