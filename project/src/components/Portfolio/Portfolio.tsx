import React from 'react';
import PortfolioHeader from './PortfolioHeader';
import PortfolioGrid from './PortfolioGrid';
import { portfolioItems } from './portfolioData';

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioHeader />
        <PortfolioGrid items={portfolioItems} />
      </div>
    </section>
  );
}