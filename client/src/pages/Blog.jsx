import React, { useEffect , useState} from 'react'
import {ArrowLeft} from '@phosphor-icons/react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Blog = () => {
  const navigate = useNavigate()
  const {blogId} = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await axios.get(`http://localhost:3000/api/blog/${blogId}`)
        setBlog(data.data.blog)
        
      } catch (error) {
        alert(error.response.data.message)
        return
      }
    }
    getBlog()
  },[blogId])
  return (
    <>
      {blog && (
        <div className="w-3/4 mx-auto mt-5">
          <div className="flex gap-4 items-center">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft size={20} color="#000" />
            </button>
            <Link to = {`/${blog.owner.username}`} className="flex items-center gap-2">
              <img
                src={blog.owner.avatar.url}
                alt="Profile"
                className="w-8 h-8 rounded-full border"
              />
              <span>{blog.owner.username}</span>
            </Link>
          </div>

          <div className="mt-5">
            <h1 className="text-8xl font-bold mb-5">{blog.title}</h1>
            <div className="blog-content" dangerouslySetInnerHTML={{__html:blog.content}}>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog
