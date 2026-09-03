import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

function SearchBar() {
  return (

      <InputGroup>
        <InputGroupAddon>
          <Search className="h-4 w-4 text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput id="input-group-search" placeholder="Search or start a new chat" />
      </InputGroup>
    
  )
}

export default SearchBar