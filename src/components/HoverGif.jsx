import React, { useEffect, useState } from 'react';
import gifUrl from '../assets/video/gif.gif';

export default function HoverGif() {
  const [hover, setHover] = useState(false);
  const [stillUrl, setStillUrl] = useState(null);

  useEffect(() => {
    let createdUrl = null;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;
        createdUrl = URL.createObjectURL(blob);
        setStillUrl(createdUrl);
      }, 'image/png');
    };
    img.src = gifUrl;
    return () => {
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, []);

  return (
    <div
      className="hover-gif"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor-hover
      aria-label="Hover to play"
    >
      {stillUrl && <img src={stillUrl} alt="" className="hover-gif-still" />}
      {hover && <img src={gifUrl} alt="" className="hover-gif-img" />}
    </div>
  );
}
