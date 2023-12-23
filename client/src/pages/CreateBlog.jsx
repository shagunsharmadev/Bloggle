import React,{useState, useEffect} from 'react'

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TextareaAutosize from "react-textarea-autosize";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [user, setUser] = useState("")

  const navigate = useNavigate()
  
  
  const handleCreateBlog = async () => {

    if(!title && !content) {
      alert('Please fill in all the fields')
      return
    }

    try {
      const data = await axios.post("http://localhost:3000/api/create-blog", {
        owner: jwtDecode(Cookies.get("token")).id,
        title,
        content
      });

    }catch(error) {
      alert(error.response.data.message)
      return
    }
    setTitle("")
    setContent("")
    navigate(`/${user && user.username}`)

  }
  useEffect(() => {
    const toolbar = document.querySelector(".ql-toolbar.ql-snow");
    if (toolbar) {
      toolbar.addEventListener("mousedown", (event) => {
        event.preventDefault();
      });
    }

    const getUser = async()=>{
      try {
        const data = await axios.get(
          `http://localhost:3000/api/user/${jwtDecode(Cookies.get("token")).id}`
        );
        setUser(data.data.user);
      } catch (error) {
        alert(error.response.data.message);
        return;
      }
    }
    getUser()
  }, []);

  useEffect(()=>{
    setUser(user)
  },[user])

  return (
    <div className="w-3/4 mt-5 mx-auto">
      <div id="toolbar">
        <span className="ql-formats">
          <select className="ql-font"></select>
          <select className="ql-header">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="false"></option>
          </select>
        </span>
        <span className="ql-formats">
          <button className="ql-bold"></button>
          <button className="ql-italic"></button>
          <button className="ql-underline"></button>
          <button className="ql-strike"></button>
        </span>
        <span className="ql-formats">
          <select className="ql-color"></select>
          <select className="ql-background"></select>
        </span>
        <span className="ql-formats">
          <button className="ql-script" value="sub"></button>
          <button className="ql-script" value="super"></button>
        </span>
        <span className="ql-formats">
          <button className="ql-blockquote"></button>
          <button className="ql-code-block"></button>
        </span>
        <span className="ql-formats">
          <button className="ql-list" value="ordered"></button>
          <button className="ql-list" value="bullet"></button>
        </span>
        <span className="ql-formats">
          <button className="ql-indent" value="-1"></button>
          <button className="ql-indent" value="+1"></button>
          <select className="ql-align"></select>
        </span>
        <span className="ql-formats">
          <button className="ql-link"></button>
          <button className="ql-image"></button>
        </span>
      </div>
      <TextareaAutosize className='cabinet font-semibold resize-none w-full px-4 mt-10 mb-5 outline-0 text-8xl placeholder:text-sm placeholder:italic placeholder:text-gray-700 placeholder:font-normal' placeholder='Title Here...' 
      value = {title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        theme="snow"
        modules={{ toolbar: "#toolbar" }}
        placeholder="Unleash Your Creativity Here... Your Words Have the Power to Inspire!"
        onChange={setContent}
        value = {content}
      />

      <div className='w-full flex justify-end'>
        <button className='btn px-5 rounded-full mb-5' onClick={handleCreateBlog}>Publish</button>
      </div>
      {/* <div dangerouslySetInnerHTML={{__html:value}} className='blog'></div> */}
    </div>
  );
}

export default CreateBlog
