import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Blog = () => {
    const {blogId} = useParams()
  return (
    <div className="w-3/4 mx-auto mt-5">
      <Link className='flex items-center gap-2'>
        <img
          src="https://res.cloudinary.com/dnlgbefvz/image/upload/v1703334115/Bloggle/Profiles/default_profile_nsnxfk.webp"
          alt="Profile" className='w-8 h-8 rounded-full border'
        />
        <span>Username</span>
      </Link>

      <div className='mt-5'>
        <h1 className="text-8xl font-bold mb-5">Blog Title</h1>
        <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus praesentium ratione iusto distinctio, voluptatum esse obcaecati consequatur officia molestiae laboriosam! Sint saepe, deserunt sequi eveniet nam reiciendis esse doloribus ducimus pariatur tenetur ipsa, laborum repellat neque voluptas excepturi eos voluptate assumenda nesciunt alias tempore architecto a? Ipsam aut quo eius eveniet repudiandae, corporis impedit accusamus veritatis. Amet omnis nihil ex dolores, repellat et delectus? Accusantium, delectus. Quis commodi temporibus consequatur optio, sed expedita unde ea doloremque deserunt asperiores magnam praesentium, id ullam. Ducimus quasi illo nulla molestias repellendus veritatis corrupti amet illum, aut totam officiis. Nobis cum voluptates quod.</div>
      </div>
    </div>
  );
}

export default Blog
