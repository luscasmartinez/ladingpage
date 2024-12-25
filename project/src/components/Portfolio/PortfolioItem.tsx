import React, { useState } from 'react';
import { Play, ExternalLink, X } from 'lucide-react';
import { PortfolioItem as PortfolioItemType } from '../../types/portfolio';

export default function PortfolioItem({ 
  title, 
  description, 
  type, 
  url, 
  thumbnail, 
  dimensions 
}: PortfolioItemType) {
  const [showVideo, setShowVideo] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  const renderMedia = () => {
    if (type === 'video' && showVideo) {
      return (
        <div className="relative" style={{ paddingBottom: `${(dimensions?.height || 608) / (dimensions?.width || 1080) * 100}%` }}>
          <iframe
            src={`${getEmbedUrl(url)}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        </div>
      );
    }

    return (
      <div className="relative group">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
        {type === 'video' && (
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Play className="w-16 h-16 text-white" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {renderMedia()}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {type === 'image' && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark gap-2"
          >
            Ver projeto completo
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {type === 'video' && showVideo && (
          <button
            onClick={() => setShowVideo(false)}
            className="inline-flex items-center text-primary hover:text-primary-dark gap-2"
          >
            Fechar vídeo
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
