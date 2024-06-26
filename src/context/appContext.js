import { createContext, useEffect, useState } from "react";
import { useFetch } from "../useFetch";
export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(0);
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/users/")
  const data = useFetch("https://jsonplaceholder.typicode.com/users/")

  useEffect(() => {
    setUsers(data);
  }, [user]);

  const val = {
    flag,
    setFlag,
    user,
    setUser,
    users,
    setUsers,
  };
  return (
    <AppContext.Provider value={val}>{props.children}</AppContext.Provider>
  );
};
