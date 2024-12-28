import React from 'react';

export default function HeroBackground() {
  return (
    <>
      {/* Primary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f90342] via-[#f90342]/90 to-[#ff1744]" />
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#f90342]/20 to-[#f90342]/40" />
      
      {/* Background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] 
        bg-cover bg-center mix-blend-overlay"
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f90342]/0 via-[#f90342]/30 to-[#f90342]/0 
        animate-gradient-x mix-blend-overlay" />
    </>
  );
}