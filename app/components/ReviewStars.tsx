export function ReviewStars({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <span
      className="review-stars"
      role="img"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((index) => {
        const fill = Math.max(0, Math.min(1, rating - index));
        const gradientId = `star-${size}-${index}-${Math.round(rating * 10)}`;
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} key={index} aria-hidden="true">
            <defs>
              <linearGradient id={gradientId}>
                <stop offset={`${fill * 100}%`} stopColor="#fbbc04" />
                <stop offset={`${fill * 100}%`} stopColor="#2a4a78" />
              </linearGradient>
            </defs>
            <path
              d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z"
              fill={`url(#${gradientId})`}
            />
          </svg>
        );
      })}
    </span>
  );
}
