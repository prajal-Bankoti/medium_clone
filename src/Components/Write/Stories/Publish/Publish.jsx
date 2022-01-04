import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Publish.module.css";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Publish() {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [del, setDel] = React.useState(false);

  useEffect(() => {
    getData();
  }, [del]);

  async function getData() {
    const { data } = await axios.get(
      `https://medium-clone-backend-prajal.herokuapp.com/user/onevlog/${window.localStorage.getItem(
        "id"
      )}`
    );
    console.log(data);
    setBlogs(data);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {blogs.map((e) => {
        return (
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={`/blog/?blog=${e._id}`}
          >
            <div
              className="div"
              style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
            >
              <div className={styles.blogs}>
                <img
                  style={{ width: "150px" }}
                  src={
                    e.blogimg
                      ? e.blogimg
                      : `https://medium-clone-backend-prajal.herokuapp.com/uploads/${
                          e.img ? e.img.split("uploads/")[1] : ""
                        }`
                  }
                  alt=""
                />
                <h3 style={{ width: "60%", overflow: "hidden", height: "25%" }}>
                  {e.title}
                </h3>
                <div>{e.des}</div>
                <div>
                  <p>{e.date.slice(4, 7) + " " + new Date(e.date).getDate()}</p>
                  <p style={{ marginLeft: "10px", width: "100px" }}>
                    {Math.floor((Date.now() - Date.parse(e.date)) / 1000 / 60)}{" "}
                    min read
                  </p>
                </div>

                <Link to={`/write?id=${e._id}`}>
                  <EditIcon
                    style={{
                      float: "right",
                      marginRight: "15%",
                      fontSize: "25px",
                      color: "black",
                      marginTop: "-35",
                    }}
                  />
                </Link>
                <Link
                  onClick={() => {
                    setOpen(true);
                    navigator.clipboard.writeText(
                      `http://localhost:3000/blog/?blog=${e._id}`
                    );
                  }}
                  to={`/story`}
                >
                  <ShareIcon
                    style={{
                      float: "right",
                      marginRight: "5%",
                      fontSize: "25px",
                      color: "black",
                      marginTop: "-35",
                    }}
                  />
                </Link>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Link copied successfully
                  </Alert>
                </Snackbar>
                <Link
                  onClick={async () => {
                    const { data } = await axios.delete(
                      `https://medium-clone-backend-prajal.herokuapp.com/user/blog/${e._id}`
                    );
                    console.log(data);
                    setDel(data);
                  }}
                  to={`/story`}
                >
                  <DeleteIcon
                    style={{
                      float: "right",
                      marginRight: "10%",
                      fontSize: "25px",
                      color: "black",
                      marginTop: "-35",
                    }}
                  />
                </Link>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Publish;
