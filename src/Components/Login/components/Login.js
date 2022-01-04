import React from "react";
import { useState } from "react";
import axios from "axios";

import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "957099987286-ov07r8hi3asnv079qterc1k28l8ote9e.apps.googleusercontent.com";
///for local host
/// '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Login() {
  const [data, setData] = useState(true);
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);

    const sendGetRequest = async () => {
      setData(false);
      try {
        const res1 = await axios.post(
          "https://medium-clone-backend-prajal.herokuapp.com/user/register",
          {
            name: res.profileObj.name,
            email: res.profileObj.email,
            img: res.profileObj.imageUrl,
          }
        );
        console.log(res1.data);
        window.localStorage.setItem("id", res1.data._id);
        setData(true);
        window.location.href = await "/";
      } catch (err) {
        console.error(err);
      }
    };
    sendGetRequest();
    window.localStorage.setItem("loginname", res.profileObj.name);
    window.localStorage.setItem("loginemail", res.profileObj.email);
    window.localStorage.setItem("profileImg", res.profileObj.imageUrl);

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  return (
    <>
      {data ? (
        <div>
          <GoogleLogin
            clientId={clientId}
            icon="false"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}

export default Login;
