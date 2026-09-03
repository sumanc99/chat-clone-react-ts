import { Laptop } from "lucide-react"
import { Button } from "./ui/button"


function RightPanelHero() {
  return (
    <div className="mb-3 flex flex-col items-center 
        text-center max-w-md p-8 rounded-2xl bg-card border shadow-sm mt-4">
            {/* Graphic Area */}
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 text-emerald-500">
            <Laptop className="h-16 w-16" />
            </div>

            {/* Text Area */}
            <h2 className="text-xl font-bold mb-2 text-foreground">
            Voice and video calling is now available
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
            Now you can make and join calls on WhatsApp Web.
            </p>

            {/* CTA Button */}
            <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6">
            Go to Calls
            </Button>
        </div>
  )
}

export default RightPanelHero
