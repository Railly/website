"use client";
import Image from "next/image";

interface IProps {
  src?: string;
  size?: number;
}

const getClassNames = (size: number) => {
  if (size <= 70) {
    return {
      parent: "p-0.5",
    };
  }
  return {
    parent: "p-1",
  };
};

const RHProfileImage: React.FC<IProps> = ({
  src = "/images/profile-2023.jpg",
  size = 150,
}) => {
  return (
    <div
      className={`flex justify-center  rounded-full from-zinc-200 to-zinc-400 dark:from-zinc-500/80 dark:to-zinc-800/80 bg-gradient-to-b w-max ${
        getClassNames(size).parent
      }`}
    >
      <Image
        className="rounded-full no-drag profile w-[5.75rem] h-[5.75rem] md:w-28 md:h-28"
        src={src}
        alt="A profile photo of Railly Hugo"
        blurDataURL="/images/profile-2023.jpg"
        placeholder="blur"
        width={size}
        height={size}
      />
    </div>
  );
};

export default RHProfileImage;
