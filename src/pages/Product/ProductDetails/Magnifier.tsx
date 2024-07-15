import React, { useRef, useEffect } from 'react';
import './Magnifier.css';

interface MagnifierProps {
  src: string;
  alt: string;
  zoom: number;
}

const Magnifier: React.FC<MagnifierProps> = ({ src, alt, zoom }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const glass = glassRef.current;

    if (!img || !glass) return;

    const bw = 3;
    const w = glass.offsetWidth / 2;
    const h = glass.offsetHeight / 2;

    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

    const moveMagnifier = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;

      if (x > img.width - w / zoom) x = img.width - w / zoom;
      if (x < w / zoom) x = w / zoom;
      if (y > img.height - h / zoom) y = img.height - h / zoom;
      if (y < h / zoom) y = h / zoom;

      glass.style.left = `${x - w}px`;
      glass.style.top = `${y - h}px`;
      glass.style.backgroundPosition = `-${(x * zoom) - w + bw}px -${(y * zoom) - h + bw}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent) => {
      const a = img.getBoundingClientRect();
      const x = (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX) - a.left;
      const y = (e instanceof MouseEvent ? e.pageY : e.touches[0].pageY) - a.top;
      return { x: x - window.pageXOffset, y: y - window.pageYOffset };
    };

    img.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('touchmove', moveMagnifier);
    glass.addEventListener('mousemove', moveMagnifier);
    glass.addEventListener('touchmove', moveMagnifier);

    return () => {
      img.removeEventListener('mousemove', moveMagnifier);
      img.removeEventListener('touchmove', moveMagnifier);
      glass.removeEventListener('mousemove', moveMagnifier);
      glass.removeEventListener('touchmove', moveMagnifier);
    };
  }, [zoom]);

  return (
    <div className="img-magnifier-container">
      <img ref={imgRef} src={src} alt={alt} width="600" height="400" />
      <div ref={glassRef} className="img-magnifier-glass" aria-hidden="true"></div>
    </div>
  );
};

export default Magnifier;
