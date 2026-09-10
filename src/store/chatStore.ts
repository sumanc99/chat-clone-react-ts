import { dummyMessages } from "@/data/dummyMessages"
import type { Message } from "@/interfaces/Message"
import {create} from "zustand"


interface ChatStore{
   selectedChatId: number|null
   setSelectedChatId:(id:number) => void

   selectedChatName: string|null
   setSelectedChatName: (name:string) =>void

   messages: Message[]
   sendMessage: (msg: Message) => void
}

export const useChatStore = create<ChatStore>((set,get)=>({
    selectedChatId: null,
    setSelectedChatId: (id)=> set({selectedChatId:id}),

    selectedChatName:null,
    setSelectedChatName: (name)=>set({selectedChatName:name}),

    messages: dummyMessages,
   sendMessage: (msg) => set({messages:[...get().messages,msg]}),
}))