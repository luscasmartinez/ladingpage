import React from 'react';

export default function HeroBackground() {
  return (
    <>
      {/* Primary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary-light" />
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/20 to-primary/40" />
      
      {/* Background image with reduced opacity */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] 
        opacity-10 bg-cover bg-center mix-blend-overlay"
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 
        animate-gradient-x mix-blend-overlay" />
    </>
  );
}