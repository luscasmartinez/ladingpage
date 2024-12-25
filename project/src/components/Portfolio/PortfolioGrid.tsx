import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioItem as PortfolioItemType } from '../../types/portfolio';

interface PortfolioGridProps {
  items: PortfolioItemType[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhum item no portfólio ainda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
}