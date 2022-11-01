import { routes } from "./routes";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="container pt-[50px] h-screen  ">  
  <Router>
      <Routes>
        {
          routes.map((route,index) => {
            return(
            <Route path={route.path} element={route.element} key={index}></Route>
          )})
        }
      </Routes>
  </Router>
    </div>
  );
}

export default App;
