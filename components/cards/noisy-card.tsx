import { cn } from "@/lib/utils";

interface INoisyCardProps {
  className?: string;
  style?: React.CSSProperties;
}

const NoisyCard = ({
  className,
  children,
  style,
}: React.PropsWithChildren<INoisyCardProps>) => {
  return (
    <div
      className={cn(
        "relative border border-border from-gray-50/40 to-gray-50/10 bg-gradient-to-b dark:from-black/50 dark:to-black/40 p-4 shadow-md shadow-foreground/5 rounded-xl overflow-hidden",
        className
      )}
      style={style}
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-70 mix-blend-soft-light">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
          <defs>
            <linearGradient
              id="myGradient"
              x1="128"
              y1="5.21659"
              x2="128"
              y2="476.551"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C5C5C5" />
              <stop offset="1" stopColor="#383839" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {children}
    </div>
  );
};

export default NoisyCard;
