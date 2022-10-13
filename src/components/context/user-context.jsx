import { createContext,useEffect,useState } from "react";

export const userContext = createContext();

export default function UserProvider({children}) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(userData));
  }, [userData]);
  return(
    <userContext.Provider value={{userData,setUserData}}>
      {/* {console.log(userContext)} */}
      {children}
    </userContext.Provider>
  )
}