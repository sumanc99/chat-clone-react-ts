import SideBar from "@/components/SideBar"
import ChatContainer from "./ChatContainer"

function Mainlayout(){
    return(
        <div className="flex flex-1 min-h-0 border-2  rounded p-2 gap-1">
            <SideBar/>
            {/* chat container */}
            <ChatContainer/>
        </div>
    )
}

export default Mainlayout