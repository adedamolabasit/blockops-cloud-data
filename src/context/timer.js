import { useState, useContext, createContext, useEffect } from "react";
const TimerContext = createContext();


const TimerProvider  = ({children}) => {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    return(
        <TimerContext.Provider
        value = {date}>
        {children}
      </TimerContext.Provider>
    )


}

export default TimerProvider
export const useTimer = () => useContext(TimerContext);
