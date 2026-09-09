import type { Message } from "@/interfaces/Message";


export const dummyMessages: Message[] = [
  { 
    id: 1, 
    chatId: 1, 
    senderId: "them", 
    text: "Hey, how's it going?",
    timestamp: "2026-08-31T09:00:00"
 },
 { 
    id: 2,
    chatId: 1,
    senderId: "me",
    text: "Good! Working on the chat app", 
    timestamp: "2026-08-31T09:02:00", 
    isDelivered: true 
 },
 { 
    id: 3, 
    chatId: 1,
    senderId: "them",
    text: "Nice, how's it looking?", 
    timestamp: "2026-08-31T09:03:00" 
 },
  
];