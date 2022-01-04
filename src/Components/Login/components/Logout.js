import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
'957099987286-ov07r8hi3asnv079qterc1k28l8ote9e.apps.googleusercontent.com'
 // '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Logout({value}) {

  const onSuccess = () => {
    localStorage.removeItem("id")
    value(localStorage.getItem("id"))
    console.log('Logout made successfully');
    console.log("value",value)

  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
