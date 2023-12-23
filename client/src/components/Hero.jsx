import { Link } from 'react-router-dom';
import HeroVideo from '../assets/hero.mp4'

const Hero = () => {
    return (
      <div className="relative w-full bg-white mt-5">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Unleash Your Creativity with Bloggle
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Welcome to Bloggle, where stories come alive and
              voices echo across the digital realm.
            </p>
            
            <Link to={'/'} className='mt-5'>
                <button
                    type="button"
                    className="btn rounded-full px-6 duration-300"
                >
                    Start Reading
                </button>
            </Link>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <video
              src={HeroVideo}
              autoPlay
              loop
              muted
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
            />
          </div>
        </div>
      </div>
    );
}

export default Hero