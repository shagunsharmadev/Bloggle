import { TrendUp } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Trending = () => {

    return (
      <div className="mx-auto max-w-7xl px-12 mb-5">
        <div className="flex items-center gap-3 mb-8">
          <div className="border rounded-full p-1">
            <TrendUp size={15} color="#000"/>
          </div>
          <span className="text-sm">Trending on Bloggle</span>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-10 pb-4">
            {
                Array.from({length:6}).map(e=>{
                    return (
                      <Link className="fade-in group flex gap-5 hover:cursor-pointer hover:bg-primary p-2 rounded-md">
                        <h2 className="text-5xl text-gray-200 group-hover:text-black">01</h2>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <img
                              src="https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
                              alt="Profile"
                              className="h-6 w-6 rounded-full border"
                            />
                            <p className="text-sm">John Doe</p>
                          </div>
                          <h2 className="text-lg font-bold">
                            Lorem ipsum dolor sit amet.
                          </h2>
                          <p className="text-sm text-gray-400">Dec 19</p>
                        </div>
                      </Link>
                    );
                })
            }
          
        </div>
      </div>
    );
}

export default Trending