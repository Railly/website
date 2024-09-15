import { FileCode } from "lucide-react";
import { Button } from "../ui/button";

const ResumeButton: React.FC = () => {
  return (
    <Button className="group" variant="outline">
      <a
        href="/pdf/Railly-Hugo-CV-2024-Q4-ENG.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        <FileCode className="group-hover:animate-bounce" />
        <span className="hidden md:block">Download Resume</span>
        <span className="block md:hidden">Resume</span>
      </a>
    </Button>
  );
};

export default ResumeButton;
