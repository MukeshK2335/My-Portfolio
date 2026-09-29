import { useState } from 'react';

type AvatarProps = {
  size?: number;
  loading?: 'eager' | 'lazy';
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
};

export default function Avatar({ size = 44, loading = 'eager', className = '', fetchPriority }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`avatar avatar-fallback ${className}`.trim()}
      style={{ width: size, height: size, ['--avatar-size' as string]: `${size}px` }}
    >
      {failed ? (
        <span className="avatar-fallback-mark" role="img" aria-label="Mukesh K">M<span>K</span></span>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${encodeURIComponent('Mukesh K Photo.jpg')}`}
          alt="Mukesh K"
          width={size}
          height={size}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          className="avatar-image"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
