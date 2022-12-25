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

const RHProfile: React.FC<IProps> = ({
  src = "/images/profile.png",
  size = 150,
}) => {
  return (
    <div
      className={`flex justify-center rounded-full from-hunter-black-300 to-hunter-black-500 bg-gradient-to-b w-max ${
        getClassNames(size).parent
      }`}
    >
      <div
        className={`flex justify-center p-0.5 rounded-full bg-hunter-black-900/50
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

export default RHProfile;
