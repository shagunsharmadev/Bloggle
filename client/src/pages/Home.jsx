import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import Blogs from '../components/Blogs'
import Category from '../components/Category'

const Home = () => {
    return (
        <div>
            <Hero/>
            <Trending/>
            <div className='flex justify-between gap-4 w-[1180px] mx-auto'>
                <Blogs/>
                <Category/>
            </div>
        </div>
    )
}

export default Home