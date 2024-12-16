import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all">
      <Icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-2xl font-semibold mb-4 text-secondary-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}