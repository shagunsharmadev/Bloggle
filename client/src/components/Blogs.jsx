import Blog from "./Blog"
const Blogs = ({blogs}) => {

    return(
        <div className="w-full mb-10">
            {
                blogs && blogs.map((blog)=> {
                    return <Blog blog={blog} key={blog._id}/>
                })
            }
            
        </div>
    )
}

export default Blogs