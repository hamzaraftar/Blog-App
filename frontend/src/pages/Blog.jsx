import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams ,useNavigate } from "react-router-dom";
import axios from "axios";

export default function Blog() {
  const { id } = useParams();
  let navigate = useNavigate()
  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function fetchdata() {
      const data = await axios.get(`http://127.0.0.1:8000/api/blog/${id}/`);
      // console.log(data.data);
      setBlog(data.data);
    }
    fetchdata();
  }, [id]);

  async function handleDelete() {
    let deleteBlog = await axios.delete(
      `http://127.0.0.1:8000/api/blog/${id}/`
    );
    console.log(deleteBlog.data);
    navigate('/')
  }
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>BLOGGER | Blog {id}</title>
      </Helmet>
      <div className="flex flex-col w-[60%] mx-auto ">
        <h1 className="mt-1 text-3xl font-extrabold">{blog.title}</h1>
        <div className="flex mt-4 mb-4">
          <small className="text-sm">Jan 20, 2024</small>
        </div>
        <img
          className="rounded-lg object-cover w-full  h-[30rem]"
          src={blog.image && "https://picsum.photos/200/300"}
          alt="img"
        />
        <div>
          <h2 className="text-2xl mt-2 mb-2">What is Lorem Ipsum?</h2>
          <p>{blog.content}</p>
          <button
            onClick={handleDelete}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
