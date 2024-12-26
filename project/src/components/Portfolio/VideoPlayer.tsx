import React from 'react';
import { getVideoEmbedUrl } from '../../utils/video';

interface VideoPlayerProps {
  url: string;
  title: string;
  dimensions?: { width: number; height: number };
}

export default function VideoPlayer({ url, title, dimensions }: VideoPlayerProps) {
  const embedUrl = getVideoEmbedUrl(url);
  const aspectRatio = dimensions ? (dimensions.height / dimensions.width) * 100 : 56.25; // Default to 16:9

  return (
    <div className="relative w-full" style={{ paddingBottom: `${aspectRatio}%` }}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
}