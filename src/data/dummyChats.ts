interface Chat {
  id: number
  name: string
  message: string
  time: string
  unreadCount?: number
  isDelivered?: boolean
  isActive?: boolean
}

export const dummyChats: Chat[] = [
  {
    id: 1,
    name: "Suman",
    message: "Puncher@436353232",
    time: "8/4/2026",
    isActive: false,
    isDelivered: true,
  },
  {
    id: 2,
    name: "Mi-fi SIM Number",
    message: "The Simple Algorithm .",
    time: "6/16/2026",
    isDelivered: true,
  },
  {
    id: 3,
    name: "PLATOON 09 (BATCH A, STREAM 1)",
    message: "~KinGs Intiriors Decor: Lol",
    time: "11:29 AM",
    unreadCount: 15,
  },
  {
    id: 4,
    name: "DL4ALL Kaduna South",
    message: "~comfortiliya081: Make your ",
    time: "11:28 AM",
    unreadCount: 117,
  },
  {
    id: 5,
    name: "Math",
    message: "Suman C99: Photo",
    time: "Friday",
    unreadCount: 5,
    isDelivered: true,
  },
  {
    id: 6,
    name: "Ahmed Bello",
    message: "Are we still meeting tomorrow?",
    time: "10:42 AM",
    isDelivered: true,
  },
  {
    id: 7,
    name: "Family Group",
    message: "Mom: Don't forget to call grandma",
    time: "Yesterday",
    unreadCount: 3,
  },
  {
    id: 8,
    name: "Chinedu Okafor",
    message: "Sent the files, check your email",
    time: "9:15 AM",
    isDelivered: true,
  },
  {
    id: 9,
    name: "Project Alpha Team",
    message: "Ngozi: Deploy went through fine",
    time: "Yesterday",
    unreadCount: 8,
  },
  {
    id: 10,
    name: "Fatima Ibrahim",
    message: "Happy birthday!",
    time: "2 days ago",
  },
  {
    id: 11,
    name: "Landlord",
    message: "Rent reminder for next month",
    time: "Monday",
    unreadCount: 1,
  },
  {
    id: 12,
    name: "Gym Buddies",
    message: "Tunde: Leg day at 6am, who's in?",
    time: "Sunday",
  },
  {
    id: 13,
    name: "Blessing Adeyemi",
    message: "Thanks for the help earlier",
    time: "Saturday",
    isDelivered: true,
  },
  {
    id: 14,
    name: "Kaduna Tech Meetup",
    message: "Emeka: Next event is Sept 20th",
    time: "Friday",
    unreadCount: 24,
  },
  {
    id: 15,
    name: "Ibrahim Musa",
    message: "Can you send the invoice again?",
    time: "Thursday",
  },
]