import { BookmarksSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import {htmlToText} from 'html-to-text'

const Blog = ({blog}) => {

    const formatDate = (dateTime)=>{
      const date = new Date(dateTime);

      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}`;

      return formattedDate;
    }
    return (
      <>
        {blog && (
          <Link to={`/blog/${blog._id}`} className="blog-anim_link border-t w-full h-[200px] p-4 flex flex-col gap-2 cursor-pointer relative overflow-hidden hover:px-6 duration-300 ease-in-out">
            <div className="blog-anim absolute inset-0 w-full bg-primary"></div>
            <div className="flex items-center gap-2 z-20">
              <img
                src={blog.owner.avatar.url}
                alt="Profile"
                className="inline-block h-6 w-6 rounded-full"
              />
              <p className="text-sm">{blog.owner.username}</p>
            </div>
            <div className="flex justify-between gap-5">
              <div className="z-20">
                <h1 className="text-lg font-bold mb-2">{blog.title}
                </h1>
                <p className="text-sm min-h-[50px] opacity-80 z-20">{htmlToText(blog.content).substring(0,30)+'...'}</p>
              </div>

              <ArrowRight size={40} className="z-20" />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-70">{formatDate(blog.createdAt)}</span>
                <span className="bg-gray-100 px-4 z-20 py-1.5 rounded-full text-sm">
                  category
                </span>
              </div>

              <button className="z-20">
                <BookmarksSimple size={25} color="#595959" />
              </button>
            </div>
          </Link>
        )}
      </>
    );
}

export default Blog