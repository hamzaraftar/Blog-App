import { Link } from "react-router-dom";

export default function Blogcard({ blogData }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-105">
      <Link to={`/blog/${blogData.id}`}>
        <div className="flex flex-col w-full">
          <img
            src={blogData.image && "https://picsum.photos/200/300"}
            alt="blog image"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 flex flex-col justify-between h-full">
            <h2 className="text-xl font-semibold text-gray-800">{blogData.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blogData.content}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
