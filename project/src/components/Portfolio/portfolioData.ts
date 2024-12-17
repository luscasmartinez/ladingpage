import adsPizza from '../../data/video/ads_pizza.mp4';
import adsIPizza from '../../data/img/pizza.jpg'
import adsTiro from '../../data/video/tiro.mp4'
import adsITiro from '../../data/img/arma.jpg'


export const portfolioItems = [
    {
      id: '1',
      title: 'Pizzaria Santo Antonio',
      description: 'Vídeo promocional que alcançou mais de 1M de visualizações',
      type: 'video' as const,
      url: adsPizza,
      thumbnail: adsIPizza,
    },
    {
      id: '2',
      title: 'Redesign Marca Stellar',
      description: 'Renovação completa da identidade visual',
      type: 'image' as const,
      url: adsTiro,
      thumbnail: adsITiro,
    },
    {
      id: '3',
      title: 'Lançamento Produto X',
      description: 'Campanha que gerou 300% de ROI em vendas',
      type: 'video' as const,
      url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    },
    {
      id: '4',
      title: 'Campanha Digital Growth',
      description: 'Estratégia completa de marketing digital',
      type: 'image' as const,
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },
    {
      id: '5',
      title: 'Motion Graphics Inovador',
      description: 'Animações para redes sociais',
      type: 'video' as const,
      url: 'https://www.youtube.com/watch?v=pPRVNJidK2M',
      thumbnail: 'https://www.youtube.com/watch?v=pPRVNJidK2M',
    },
    {
      id: '6',
      title: 'Branding Completo',
      description: 'Desenvolvimento de marca do zero',
      type: 'image' as const,
      url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f',
      thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f',
    },
  ];