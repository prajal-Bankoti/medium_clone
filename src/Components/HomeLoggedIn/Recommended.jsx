import React, { useEffect, useState } from "react";
import "./Recommended.css";
import axios from "axios";
//import { useContext } from "react";
//import { ThemeContexts } from "../../Contexts/ThemeContexts";
import save from "../Image/save.svg";
import { Link } from "react-router-dom";
//import { BASE_URL } from "../../env";

export const Recommended = () => {
  const [addTask, setAddTask] = useState([]);
  //const { handleChangeTheme } = useContext(ThemeContexts);

  function getMyTodos() {
    axios
      .get(`https://medium-clone-backend-prajal.herokuapp.com/user/vlog/`)
      .then((res) => {
        console.log(res.data);

        const result = res.data.filter((e) => e.user);
        let array = result;
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }

        setAddTask(array);
      });
  }

  useEffect(() => {
    getMyTodos();
  }, []);

  return (
    <div style={{ textAlign: "left" }}>
      {addTask.map((e) => {
        return (
          <div className="col4gy3row02" key={e._id}>
            <div className="colis1002">
              <Link
                style={{ textDecoration: "none" }}
                to={`/blog/?blog=${e._id}`}
              >
                <div className="AuthInfo02">
                  <img className="numImg02" src={e.user.img} alt="UserPic" />
                  <span className="authorName02 ms-2">{e.user.name}</span>
                  <span className="authorIn02 mx-1">in</span>
                  <span className="authorDictp02">{"prajal"}</span>
                </div>
                <div className="authHeading02">
                  <p className="authorTitle02">{e.title}</p>
                  <p className="authSubHed02">{e.des}</p>
                </div>
              </Link>
              <div className="authDaTiSt02">
                <span>{e.date} ·</span>
                <span className="mx-1">
                  {" "}
                  {Math.floor(
                    (Date.now() - Date.parse(e.date)) / 1000 / 60
                  )}{" "}
                </span>
                <span className="mx-1">·</span>
                <span style={{ display: "none" }} className="mx-1 userBlogTag">
                  {"###"}
                </span>
                <span className="ms-1">&#9733;</span>
                <span style={{ float: "right" }} className="me-4">
                  <img src={save} alt="" />
                </span>
              </div>
            </div>
            <div className="colis202">
              <img
                src={
                  e.blogimg
                    ? e.blogimg
                    : `https://medium-clone-backend-prajal.herokuapp.com/uploads/${
                        e.img ? e.img.split("uploads/")[1] : ""
                      }`
                }
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
