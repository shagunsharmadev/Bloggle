import Blog from "./Blog"
const Blogs = () => {

    return(
        <div className="w-full">
            {
                Array.from({length:6}).map(()=> {
                    return <Blog/>
                })
            }
            
        </div>
    )
}

export default Blogs