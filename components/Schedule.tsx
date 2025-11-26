import React from 'react';
import { EventItem } from '../types';
import { MapPin, Clock, Music, Trophy } from 'lucide-react';

const events: EventItem[] = [
  { id: 1, time: '09:00 AM', title: 'Opening Ceremony', category: 'Event', location: 'Main Hall' },
  { id: 2, time: '10:30 AM', title: 'Street Ball Qualifiers', category: 'Match', location: 'Court A' },
  { id: 3, time: '12:00 PM', title: 'DJ Snake Jazz Set', category: 'Music', location: 'Music Hall 301' },
  { id: 4, time: '02:00 PM', title: 'Dunk Contest', category: 'Match', location: 'Center Court' },
  { id: 5, time: '04:00 PM', title: 'Final Showdown', category: 'Match', location: 'Center Court' },
];

export const Schedule: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-20">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-display uppercase italic text-white mb-8 border-b-2 border-white/20 pb-4 inline-block">
          Daily Lineup
        </h2>
        
        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group bg-white/80 hover:bg-white rounded-xl p-4 transition-all duration-300 transform hover:-translate-x-1 border-l-8 border-poster-pink flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex items-center gap-3 md:w-1/4">
                <Clock size={18} className="text-poster-orange" />
                <span className="font-bold text-gray-800 font-mono">{event.time}</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 uppercase italic tracking-tight group-hover:text-poster-pink transition-colors">
                  {event.title}
                </h3>
              </div>
              
              <div className="flex items-center justify-between md:w-1/3 gap-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  {event.category === 'Match' && <Trophy size={16} className="text-poster-orange" />}
                  {event.category === 'Music' && <Music size={16} className="text-poster-pink" />}
                  {event.category === 'Event' && <div className="w-4 h-4 rounded-full bg-poster-yellow" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};