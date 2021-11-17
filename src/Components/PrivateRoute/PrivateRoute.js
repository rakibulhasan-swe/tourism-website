import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../../App";
import Loader from "../Loader/Loader";

function PrivateRoute({ children, ...rest }) {
  const [contextData, setContextData] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, email, photoURL } = user;
        setContextData({ accessToken, displayName, email, photoURL });
        setLoading(false);
      } else {
        setContextData({});
        setLoading(false);
      }
    });
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loading ? (
          <Loader />
        ) : contextData.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
