import FramerCard from "./framer-card";
import { Button } from "../ui/button";
import { Headphones } from "lucide-react";

interface IDisclaimerCardProps {
  className?: string;
}

const DisclaimerCard = ({
  className,
}: React.PropsWithChildren<IDisclaimerCardProps>) => (
  <FramerCard className={className}>
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-center text-md">Opportunity</h1>
      <p className="mt-2 mb-4 text-sm text-center max-w-prose">
        Are you a <b>Latam</b> 🌎 aspiring tech professional or an undergraduate
        student from <b>UNMSM</b> or other universities? Let&apos;s make your
        tech journey easier and more enjoyable! 🚀
        <br /> Connect with me on social media or schedule a call for
        personalized guidance.👇
      </p>
      <Button className="mb-1 group">
        <a
          href="https://cal.com/railly-hugo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <span>Schedule a call</span>
          <Headphones
            className="transition-transform duration-300 group-hover:animate-bounce"
            size={18}
          />
        </a>
      </Button>
      <p className="mt-2 text-xs text-center">
        Feel free to share this with your friends who might be interested! 😊
      </p>
    </div>
  </FramerCard>
);
export default DisclaimerCard;
