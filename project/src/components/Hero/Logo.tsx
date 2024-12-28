import React from 'react';
import { Palette } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in">
      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
        <Palette className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-white/90">FlipCriativa</h2>
    </div>
  );
}