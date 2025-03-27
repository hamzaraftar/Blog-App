import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({ title: "", content: "" });

  useEffect(() => {
    // Fetch existing blog data
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/blog/${id}/`
        );
        setBlogData({
          title: response.data.title,
          content: response.data.content,
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:8000/api/blog/${id}/`, blogData);
      navigate(`/blog/${id}`); // Redirect after updating
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Content
            </label>
            <textarea
              name="content"
              value={blogData.content}
              onChange={(e) =>
                setBlogData({ ...blogData, content: e.target.value })
              }
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog content"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
