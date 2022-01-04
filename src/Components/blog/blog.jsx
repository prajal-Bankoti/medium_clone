import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("blog");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get(
      `https://medium-clone-backend-prajal.herokuapp.com/user/blog/${name}`
    );
    console.log(data);
    setBlog(data);
  }

  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "50px",
        fontFamily: "auto",
      }}
    >
      <h1 style={{ marginTop: "80px" }}>{blog.title}</h1>
      <h3 style={{ textAlign: "left", marginTop: "50px" }}>{blog.des}</h3>
      <img
        style={{ width: "100%", marginTop: "50px" }}
        src={
          blog.blogimg
            ? blog.blogimg
            : `https://medium-clone-backend-prajal.herokuapp.com/uploads/${
                blog.img ? blog.img.split("uploads/")[1] : ""
              }`
        }
        alt=""
      />
      <div
        style={{ marginTop: "30px", fontSize: "20px", textAlign: "justify" }}
      >
        {" "}
        {blog.text}
      </div>
    </div>
  );
}
