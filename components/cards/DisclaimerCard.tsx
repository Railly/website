import IconLogo from "@/icons";
import FramerCard from "../FramerCard";
import { Other, SocialMedia } from "@/types/enums";
import { Button } from "../ui/button";

interface IDisclaimerCardProps {
  className?: string;
}

const DisclaimerCard = ({
  className,
}: React.PropsWithChildren<IDisclaimerCardProps>) => {
  const handleClickGoto = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <FramerCard className={className}>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-center text-md">&lt;Disclaimer&gt;</h1>
        <p className="mt-2 mb-4 text-xs text-center max-w-prose">
          If you&apos;re from <b>Latam</b> 🌎 and you&apos;re looking to get
          into the tech industry, I&apos;d love to hear from you.
          <br />
          <br />
          I can provide you with some guidance and help you get started.🤝
          <br />
          <br />
          Don&apos;t hesitate to reach me out through my social media or
          schedule a call with me.👇
        </p>
        <Button className="mb-1">
          <a
            href="https://cal.com/railly-hugo/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a call
          </a>
        </Button>
      </div>
    </FramerCard>
  );
};

export default DisclaimerCard;
