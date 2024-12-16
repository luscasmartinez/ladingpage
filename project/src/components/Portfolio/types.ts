export interface PortfolioItemType {
    id: string;
    title: string;
    description: string;
    type: 'video' | 'image';
    url: string;
    thumbnail: string;
  }