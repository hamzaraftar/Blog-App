import { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import { Helmet } from "react-helmet";
import axios from "axios";


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://127.0.0.1:8000/api/blog/");
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>BLOGGER | Home</title>
      </Helmet>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((item) => (
          <Blogcard blogData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
