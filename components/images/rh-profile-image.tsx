"use client";
import Image from "next/image";

interface IProps {
  src?: string;
  size?: number;
}

const getClassNames = (size: number) => {
  if (size <= 70) {
    return {
      parent: "p-1",
      child: "p-0.5",
    };
  }
  return {
    parent: "p-2",
    child: "p-1.5",
  };
};

const RHProfileImage: React.FC<IProps> = ({
  src = "/images/profile.png",
  size = 150,
}) => {
  return (
    <div
      className={`flex justify-center  rounded-full from-stone-500/80 dark:from-stone-300 to-stone-800/80 dark:to-stone-500 bg-gradient-to-b w-max ${
        getClassNames(size).parent
      }`}
    >
      <div
        className={`flex justify-center p-0.5 rounded-full bg-zinc-50/70 dark:bg-zinc-900/70
      ${getClassNames(size).child}`}
      >
        <Image
          className="rounded-full no-drag"
          src={src}
          alt="A profile photo of Railly Hugo"
          blurDataURL="/images/profile.png"
          placeholder="blur"
          width={size}
          height={size}
        />
      </div>
    </div>
  );
};

export default RHProfileImage;
