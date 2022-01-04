import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Stories.module.css";
import Publish from "./Publish/Publish";

function Stories() {
  const [viewState, setViewState] = useState("drafts");
  function handleviewState(state) {
    setViewState(state);
    console.log(state);
  }

  return (
    <div>
      <div className={styles.yourStories}>
        <h1>Your stories</h1>
        <div>
          <Link to="/importstory">
            <button className={styles.story1}>Import a story</button>
          </Link>
          <Link to="/writestory">
            <button className={styles.story2}>Write a story</button>
          </Link>
        </div>
      </div>
      <div className={styles.drafts}>
        <button
          className={styles.draftbuttons}
          style={{
            borderBottom: viewState === "drafts" ? "2px solid black" : "none",
          }}
          onClick={() => handleviewState("Publish")}
        >
          Drafts
        </button>
        <button
          className={styles.draftbuttons}
          style={{
            borderBottom: viewState === "publish" ? "2px solid black" : "none",
          }}
          onClick={() => handleviewState("Publish")}
        >
          Published
        </button>
        <button
          className={styles.draftbuttons}
          style={{
            borderBottom:
              viewState === "responses" ? "2px solid black" : "none",
          }}
          onClick={() => handleviewState("responses")}
        >
          Responses
        </button>
      </div>
      <div>
        {viewState === "drafts" ? (
          <div>
            <p>No Drafts available</p>
          </div>
        ) : viewState === "Publish" ? (
          <div>
            <Publish />
          </div>
        ) : (
          <div>Responses</div>
        )}
      </div>
    </div>
  );
}

export default Stories;
