import { createContext } from "react"

export const MyContext = createContext()

export const MyProvider = (props) => {
    return (
        <MyContext.Provider value={{ name: 'João' }}>
            {props.children}
        </MyContext.Provider>
    )
}