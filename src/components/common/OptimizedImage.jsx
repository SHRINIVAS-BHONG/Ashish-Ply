import React, { useState, useEffect } from 'react';
import { globalImageCache } from '../../utils/imageOptimization';

export default function OptimizedImage({
    src,
    webpSrc,
    thumbSrc,
    alt = '',
    className = '',
    style = {},
    loading = 'lazy',
    width,
    height,
    onClick,
    ...rest
}) {
    const primarySrc = webpSrc || src;
    const isCached = globalImageCache.has(primarySrc);
    const [isLoaded, setIsLoaded] = useState(isCached);

    useEffect(() => {
        if (isCached) return;

        const img = new Image();
        img.decoding = 'async';
        img.src = primarySrc;
        img.onload = () => {
            globalImageCache.set(primarySrc, img);
            setIsLoaded(true);
        };
    }, [primarySrc, isCached]);

    return (
        <picture className={`optimized-picture ${className}`} style={{ display: 'block', width: '100%', height: '100%', ...style }}>
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <img
                src={isLoaded ? (webpSrc || src) : (thumbSrc || webpSrc || src)}
                alt={alt}
                loading={loading}
                decoding="async"
                width={width}
                height={height}
                onClick={onClick}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.3s ease, opacity 0.3s ease',
                    filter: isLoaded ? 'none' : 'blur(4px)',
                    opacity: isLoaded ? 1 : 0.9,
                    ...style
                }}
                {...rest}
            />
        </picture>
    );
}
