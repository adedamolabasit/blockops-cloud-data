import Index from "./pages/Index"
import Network from "./pages/Network"


export const routes = [
    {
        path:"/",
        element:<Index/>
    },
    {
        path:`/network`,
        element:<Network/>
    },
]