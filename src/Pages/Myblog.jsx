import React, { useState } from "react";
import Preview from "./Preview";
import { toast } from "react-toastify";
const Myblog = () => {
  const [Blog, setBlog] = useState({});
  // const [toast, settoast] = useState(false)
  //   const blogfunc = (e) => {
  //     const { name, value } = e.target;
  //     setBlog((prev) => ({ ...prev, [name]: value }));
  //   };

  const FormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //   const blogData =
    if (
      formData.get("title")?.length == 0 ||
      formData.get("descritpion")?.length == 0 ||
      formData.get("image")?.length == 0
    ) {
      toast.error("Data is empty.");
      return
    }
    const blogData = {
      title: formData.get("title"),
      descritpion: formData.get("descritpion"),
      image: formData.get("image"),
    };
    setBlog(blogData);
    console.log(blogData);
    let data = localStorage.getItem("blog");
    data = data ? JSON.parse(data) : [];
    data.push(blogData);
    const json = JSON.stringify(data);
    localStorage.setItem("blog", json);
  };

  // console.log(Blog)
  return (
    <div className="bg-[#151934] w-full h-screen p-5 flex">
      <form
        className="w-[50%] h-full p-5 flex flex-col gap-6 text-2xl text-white"
        onSubmit={(e) => FormSubmit(e)}
      >
        <h1>Write Blog Post</h1>
        <div className="flex flex-col gap-2">
          <label className="text-[15px]">Blog Title</label>
          <input
            className="h-15 rounded text-white placeholder:text-white border-2 px-2"
            name="title"
            type="text"
            placeholder="Enter Your Blog Title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[15px]">Short Descritption</label>
          <textarea
            className="h-30 rounded text-white placeholder:text-white border-2 px-2 py-3"
            name="descritpion"
            type="text"
            placeholder="Descrtiption"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[15px]">Cover Image URL</label>
          <input
            className="h-12 rounded text-white placeholder:text-white placeholder:text-[18px] border-2 px-2 py-3"
            name="image"
            type="text"
            placeholder="Paste URL"
          />
        </div>
        <div className="w-full flex items-center justify-between gap-2">
          <button
            type="submit"
            className="bg-red-500 w-full rounded h-12 cursor-pointer active:scale-95 transition-all ease-in"
          >
            Submit
          </button>
          {/* <button
            type="button"
            className="bg-red-500 w-full rounded h-12 cursor-pointer active:scale-95 transition-all ease-in"
          >
            Preview
          </button> */}
        </div>
      </form>
      <div className="w-[50%] h-full p-4">
        <Preview blog={[Blog]} />
      </div>

    
    </div>
  );
};

export default Myblog;
