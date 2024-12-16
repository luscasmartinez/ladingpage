import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-secondary-light opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-10 bg-cover bg-center" />
    </div>
  );
}