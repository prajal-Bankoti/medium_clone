import React from "react";
import styles from "./ImportStory.module.css";
import { useState } from "react";
function ImportStory() {
  const [data, setData] = useState();
  return (
    <div>
      <h1 className={styles.heading}>See your story on Medium</h1>
      <div className={styles.publish}>
        Import a story from anywhere on the internet to publish on your Medium
        account.
      </div>
      <p className={styles.link}>
        Enter a link to your blog post/article/story/manifesto to import and
        share it on Medium.
      </p>
      <input
        onChange={(e) => {

          setData(e.target.value);
        }}
        type="text"
        placeholder="http://www.yoursite.org/your-post"
      />
      <p className={styles.link2}>
        You will have a chance to edit it before making it public.
      </p>
      <button
        onClick={() => {
            console.log(data)
          window.location.href = data ;
        }}
        className={styles.importButton}
      >
        Import
      </button>
      <p className={styles.link2}>Please only import content that you own.</p>
    </div>
  );
}

export default ImportStory;
