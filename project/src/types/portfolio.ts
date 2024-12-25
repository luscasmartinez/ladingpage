export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'image';
  url: string;
  thumbnail: string;
  dimensions?: {
    width: number;
    height: number;
  };
  createdAt: any;
}