import { MessageSquareText, Phone, CircleDotDashed, 
    MessageCircleMore, Users,BadgeCheck,Images,CircleUser} from "lucide-react"

function SideBar(){
    return(
        <div className="flex flex-col gap-5 p-2 justify-between">
            {/* top */}
            <div className="flex flex-col items-center gap-5">
                
            <MessageSquareText/>
            <Phone/>
            <CircleDotDashed/>
            <MessageCircleMore/>
            <Users/>
            <hr className="w-full border-t border-gray-600" />
            <BadgeCheck/>
            </div>

            {/* bottom */}
            <div className="flex flex-col gap-5">
            <Images/>
            <CircleUser/>
            </div>
        </div>
    )
}

export default SideBar