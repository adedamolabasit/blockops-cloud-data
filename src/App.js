import { routes } from "./routes";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import NetworkProvider from "./context/network";
import TimerProvider from "./context/timer";
function App() {
  return (
    <div className="container pt-[50px] h-screen  ">  
  <Router>
    <NetworkProvider>
      <TimerProvider>
    <Routes>
        {
          routes.map((route,index) => {
            return(
            <Route path={route.path} element={route.element} key={index}></Route>
          )})
        }
      </Routes>
      </TimerProvider>
    </NetworkProvider>
    
  </Router>
    </div>
  );
}

export default App;
