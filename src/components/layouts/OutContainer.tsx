import Header from "@/components/Header"
import Mainlayout from "./Mainlayout";


function  OutContainer(){
    return(
        <div className="flex flex-col w-full h-full p-3 ">
            <Header style="text-2xl font-bold"/>
            <Mainlayout/>
        </div>
    );
}


export default OutContainer