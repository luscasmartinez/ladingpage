import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-2xl bg-[#f90342] hover:bg-[#d7023a] transition-all">
      <Icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
}