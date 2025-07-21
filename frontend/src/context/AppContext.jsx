import { createContext } from "react";
import { freelancers } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

  const currencySymbol = '$'
  const value = {
    freelancers,
    currencySymbol
  }

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;