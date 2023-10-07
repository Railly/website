import NoisyCard from "@/components/cards/noisy-card";
import NextImage from "next/image";

export function Image({ ...props }: { src: string; alt: string }) {
  return (
    <NoisyCard className="flex flex-col my-8 gap-2 p-2">
      <NextImage
        className="rounded-lg border border-border"
        blurDataURL={props.src}
        placeholder="blur"
        {...props}
      />
      {props.alt && (
        <div className="text-sm text-center text-gray-500 dark:text-gray-400">
          {props.alt}
        </div>
      )}
    </NoisyCard>
  );
}
