import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { HomeSignin } from "../Components/HomeLoggedIn/HomeSignin";
import { OurStoryPage } from "./OurStory";
import { MembershipPage } from "./Membership";
import WriteStoryPage from "./Write";
import ImportStory from "../Components/Write/Stories/ImportStory/ImportStory";
import Publish from "../Components/Write/Stories/Publish/Publish";
import { SignNav } from "../Components/HomeLoggedIn/SignNav";
import Story from "../Components/Write/Stories/Stories";
import { Home } from "../Components/Home/page/Home";
import { Write } from "../Components/HomeWrite/Write";
import { NavBar } from "../Components/Membership/NavBar";
import Blog from "../Components/blog/blog";

//import {NavBar} from "../Components/Home/navbar"

function Routes() {
  const [log, setLog] = useState(localStorage.getItem("id"));

  console.log("log", log);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          {log ? <HomeSignin value={setLog} /> : <Home />}
        </Route>
        <Route path="/writehome" exact>
          <NavBar value="rgb(241,77,46)" />
          {log ? <Write /> : <Home />}
        </Route>
        <Route path="/ourstory" exact>
          {log ? (
            <>
              <NavBar />
              <OurStoryPage />
            </>
          ) : (
            <Home />
          )}
        </Route>
        <Route path="/membership" exact>
          {log ? (
            <>
              {" "}
              <SignNav />
              <MembershipPage />
            </>
          ) : (
            <Home />
          )}
        </Route>
        <Route path="/write" exact>
          {log ? (
            <>
              {" "}
              <SignNav />
              <WriteStoryPage />
            </>
          ) : (
            <Home />
          )}
        </Route>
        <Route path="/importstory">
          {log ? (
            <>
              {" "}
              <SignNav />
              <ImportStory />
            </>
          ) : (
            <Home />
          )}
        </Route>
        <Route path="/story">
          {log ? (
            <>
              {" "}
              <SignNav />
              <Story />
            </>
          ) : (
            <Home />
          )}
        </Route>
        <Route path="/blog">
          <SignNav />
          <Blog />
        </Route>
        <Route path="/publish">
          {log ? (
            <>
              {" "}
              <SignNav />
              <Publish />
            </>
          ) : (
            <Home />
          )}
        </Route>
        <Route>
          <div>Error Page Not found</div>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
