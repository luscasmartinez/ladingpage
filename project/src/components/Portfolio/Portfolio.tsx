import React, { useState, useEffect } from 'react';
import PortfolioHeader from './PortfolioHeader';
import PortfolioGrid from './PortfolioGrid';
import { getPortfolioItems } from '../../services/portfolioService';
import { PortfolioItem } from '../../types/portfolio';
import { Loader2 } from 'lucide-react';

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPortfolioItems();
  }, []);

  const loadPortfolioItems = async () => {
    try {
      const data = await getPortfolioItems();
      setItems(data);
    } catch (error) {
      console.error('Error loading portfolio items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioHeader />
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioHeader />
        <PortfolioGrid items={items} />
      </div>
    </section>
  );
}