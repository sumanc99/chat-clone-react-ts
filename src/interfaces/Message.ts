
export interface Message {
  id: number;
  chatId: number;
  senderId: string;   // "me" or the other person's id — determines bubble side
  text: string;
  timestamp: string;   // ISO string, e.g. "2026-08-31T14:22:00"
  isDelivered?: boolean;
}