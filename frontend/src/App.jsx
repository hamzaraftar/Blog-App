import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Createblog from "./pages/Createblog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <>
      <Routes>
        <Route exect path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/create" element={<Createblog />} />
          <Route path="/edit/:id" element={<EditBlog />} /> {/* Add Edit Route */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
