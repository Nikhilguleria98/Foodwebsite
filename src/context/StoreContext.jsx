import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const contextvalue = {
        
    }

    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider