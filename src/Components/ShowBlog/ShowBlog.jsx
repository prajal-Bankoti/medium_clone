import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams, useHistory } from "react-router-dom";
import "./ShowBlog.css";
import save from "../Image/save.svg";
import clap from "../Image/clap.svg";
import chat from "../Image/chat.png";
import link from "../Image/link.png";
import linkedin2 from "../Image/linkedin2.png";
import twt2 from "../Image/twt2.png";
import facebook from "../Image/facebook.png";
import { SignNav } from "./SignNav";
import { BASE_URL } from "../../env";

const ShowBlog = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const history = useHistory();

 

  // const handleGoBack = () => {
  //   history.replace("/");
  // };

  return 
};

export { ShowBlog };
