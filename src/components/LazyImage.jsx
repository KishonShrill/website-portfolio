import { useEffect, useRef, useState } from 'react';

export default function LazyImage({ src, image, alt = '', className = '', ...props }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = img.dataset.src;
          img.classList.remove('loading');
          img.classList.add('loaded');
          obs.unobserve(img);
        }
      });
    });

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imgRef}
      className={`lazy loading ${className}`}
      src={src}
      data-src={image}
      alt={alt}
      {...props}
    />
  );
}