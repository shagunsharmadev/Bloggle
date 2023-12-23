import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Blogs from '../components/Blogs'

const Profile = () => {
    const {username} = useParams()
    const [tab,setTab] = useState("Home")   
  return (
    <div className="flex flex-col justify-center items-center mt-5 w-[900px] mx-auto">
      <div className="flex flex-col items-center">
        <img
          src="https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
          alt="Profile"
          className="rounded-full border w-[200px] mb-3"
        />

        <h2 className="text-5xl font-semibold ">Shagun</h2>
        <p className="text-gray-500">@shagun</p>
        <Link className="mt-2" to={"edit"}>
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
          <Blogs />
        ) : (
          <div className="border-t py-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              accusamus quis minus itaque? Sunt, est adipisci velit dicta quae
              vel iure ipsam recusandae, earum sequi nemo, possimus nam dolores
              alias beatae explicabo ipsa illo voluptatum unde rem consequatur
              sed fuga provident? Quas eaque unde nemo omnis dolore, quaerat
              perspiciatis doloribus?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile
