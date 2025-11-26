export interface EventItem {
  id: number;
  time: string;
  title: string;
  category: 'Match' | 'Music' | 'Event';
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Tab {
  SCHEDULE = 'SCHEDULE',
  LOCATION = 'LOCATION',
  AI_COACH = 'AI_COACH'
}