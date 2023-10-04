import { cn } from "@/lib/utils";

interface INoisyCardProps {
  className?: string;
}

const NoisyCard = ({
  className,
  children
}: React.PropsWithChildren<INoisyCardProps>) => {
  return (
    <div className={cn("relative border border-border from-gray-50/80 to-gray-50/50 bg-gradient-to-b dark:from-background/90 dark:to-background p-4 shadow-md shadow-foreground/5 rounded-xl overflow-hidden", className)}>
      <svg className="absolute inset-0 rounded-xl pointer-events-none opacity-70 mix-blend-soft-light" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch">
          </feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)">
        </rect></svg>
      {children}
    </div>
  );
};

export default NoisyCard;
