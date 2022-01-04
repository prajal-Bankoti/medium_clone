import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./WriteStory.module.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function WriteStory() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("id");
  console.log(name);
  const [story, setStory] = useState({});
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState(false);
  const [loadshow, setLoadShow] = useState(false);
  const [img, setImg] = useState(false);
  useEffect(() => {
    if (name) {
      async function getData() {
        const { data } = await axios.get(
          `https://medium-clone-backend-prajal.herokuapp.com/user/blog/${name}`
        );
        await setInput(data);
        console.log(data);
      }

      getData();
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(files[0])
    setStory({
      ...story,
      [name]: value,
      img: img,
      user: window.localStorage.getItem("id"),
      date: Date(),
    });
    console.log(story);
  }

  async function handleSubmit(e) {
    if (input) {
      const data = new FormData();

      data.append("title", story.title);
      if (img) {
        data.append("img", img);
      }
      if (story.des) {
        data.append("des", story.des);
      }
      if (story.text) {
        data.append("text", story.text);
      }
      try {
        console.log(story);
        const data1 = await axios.patch(
          `https://medium-clone-backend-prajal.herokuapp.com/user/blog/${name}`,
          story
        );
        setLoad(true);
        console.log("harish", data1);
        return;
      } catch (err) {
        console.log(err);
      }
    } else {
      const data = new FormData();
      data.append("title", story.title);
      //if (img) {
        data.append("img", img);
        console.log(img)
      // }else{
      //   data.append("img", "");
      // }
      if (!story.des) {
        data.append("des", "false");
      } else {
        data.append("des", story.des);
      }
      if (!story.text) {
        data.append("text", "");
      } else {
        data.append("text", story.text);
      }
      data.append("user", story.user);
      data.append("date", story.date);
      setLoadShow(true)
      const data1 = await axios.post("https://medium-clone-backend-prajal.herokuapp.com/user/vlog/", data);
      setLoad(true);
      console.log("harish", data1);
    }
  }

  return (
    <div>
      <div className={styles.inputTitles}>
        {/* <form> */}
        <h1>Write a story</h1>
        <label>
          <AddPhotoAlternateIcon style={{ color: img ? "blue" : "black" }} />
          <input
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
            type="file"
            name="img"
            style={{ visibility: "hidden", width: "10px" }}
          />
        </label>

        {/* //</div></div> </AddPhotoAlternateIcon> */}

        <input
          defaultValue={input.title}
          className={styles.inputTitle1}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />

        <input
          defaultValue={input.des}
          className={styles.inputTitle1}
          style={{ marginTop: "10px", marginBottom: "10px" }}
          type="text"
          placeholder="description"
          name="des"
          onChange={handleChange}
        />
        <br />

        <textarea
          defaultValue={input.text}
          className={styles.inputTitle2}
          placeholder="Tell your story..."
          name="text"
          id=""
          cols="140"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <br />
        <Redirect push to={load ? "/story" : window.location}></Redirect>
        <button
          style={{
            background: "green",
            color: "white",
            borderRadius: "25px",
            marginBottom: "100px",
            marginTop: "20px",
          }}
           disabled={loadshow}
          onClick={handleSubmit}
        >
          {loadshow ? "loading..." : "Publish"}
         
        </button>
        {/* <input type="submit" value="sdddddddd" />
        </form> */}
      </div>
    </div>
  );
}

export default WriteStory;
