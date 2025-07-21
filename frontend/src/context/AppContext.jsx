import { createContext } from "react";
import { freelancers } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

  const value = {
    freelancers
  }

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;