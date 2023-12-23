import { BookmarksSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

const Blog = () => {

    return (
      <Link className="blog-anim_link border-t w-full h-[200px] p-4 flex flex-col gap-2 cursor-pointer relative overflow-hidden hover:px-6 duration-300 ease-in-out">
        <div className="blog-anim absolute inset-0 w-full bg-primary"></div>
        <div className="flex items-center gap-2 z-20">
          <img
            src="https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
            alt="Profile"
            className="inline-block h-6 w-6 rounded-full border"
          />
          <p className="text-sm">John Doe</p>
        </div>
        <div className="flex justify-between gap-5">
          <div className="z-20">
            <h1 className="text-lg font-bold mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              atque.
            </h1>
            <p className="text-sm opacity-80 z-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nulla voluptatibus quaerat nemo enim amet voluptatem, voluptatum
              qui obcaecati totam. Et nobis libero laborum accusamus vel hic
              sunt nisi illo!
            </p>
          </div>

          <ArrowRight size={60} className="z-20"/>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-70">Dec 15</span>
            <span className="bg-gray-100 px-4 z-20 py-1.5 rounded-full text-sm">
              category
            </span>
          </div>

          <button className="z-20">
            <BookmarksSimple size={25} color="#595959" />
          </button>
        </div>
      </Link>
    );
}

export default Blog