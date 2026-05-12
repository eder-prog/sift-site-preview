type Props = { className?: string; size?: number };

export function SiftMark({ className = 'mark', size = 26 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="#00D9A0"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="40"
      >
        S
      </text>
    </svg>
  );
}
