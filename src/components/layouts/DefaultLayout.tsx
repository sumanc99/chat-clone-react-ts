import { Outlet } from "react-router-dom"
import Header from "../Header"
import SideBar from "../SideBar"


function DefaultLayout() {
  return (
     <div className="flex flex-col w-full h-full p-3 ">
            <Header style="text-2xl font-bold"/>
            <div className="flex flex-1 min-h-0 border-2  rounded p-2 gap-1">
            <SideBar/>
            {/*Below is placeholder for pages  */}
            <Outlet/>
        </div>
    </div>
  )
}

export default DefaultLayout
