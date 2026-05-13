type Props = {
  className?: string;
  size?: number;
  /** Wrap the bars in a rounded black square (favicon-style). Default: false. */
  framed?: boolean;
};

export function SiftMark({ className = 'mark', size = 26, framed = false }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {framed && (
        <rect width="64" height="64" rx="14" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      )}
      <g fill="#00D9A0">
        <rect x="8"  y="6"  width="44" height="8" rx="4" />
        <rect x="8"  y="17" width="30" height="8" rx="4" />
        <rect x="16" y="28" width="36" height="8" rx="4" />
        <rect x="24" y="39" width="30" height="8" rx="4" />
        <rect x="12" y="50" width="44" height="8" rx="4" />
      </g>
    </svg>
  );
}
