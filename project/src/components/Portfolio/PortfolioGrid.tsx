import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioItemType } from './types';

interface PortfolioGridProps {
  items: PortfolioItemType[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
}