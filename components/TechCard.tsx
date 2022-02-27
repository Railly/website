type Props = {
  tech: string;
  icon: (props: any) => JSX.Element;
};

const TechCard = ({ tech, icon: Icon }: Props) => {
  return (
    <div className="p-1 bg-gradient-to-r from-amber-300 to-orange-300 rounded-xl">
      <div className="flex flex-col items-center py-1 transition bg-white rounded-lg hover:bg-zinc-100">
        <span>{tech}</span>
        <Icon className="w-8 h-8 m-1" />
      </div>
    </div>
  );
};

export default TechCard;
