import NextImage from "next/image";

export function Image({ ...props }: { src: string; alt: string }) {
  return (
    <>
      <div className="my-4 rounded-lg shadow-xl">
        <NextImage
          className="rounded-lg shadow-xl"
          blurDataURL={props.src}
          placeholder="blur"
          {...props}
        />
      </div>
      {props.alt && (
        <div className="text-sm text-center text-gray-500 dark:text-gray-400">
          {props.alt}
        </div>
      )}
    </>
  );
}
