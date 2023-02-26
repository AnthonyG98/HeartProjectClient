import React from "react";
import { useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [fullName, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <UserContext.Provider
      value={{
        fullName,
        setFullname,
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
