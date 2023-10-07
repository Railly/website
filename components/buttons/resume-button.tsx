import { FileCode } from "lucide-react";
import { Button } from "../ui/button";

const ResumeButton: React.FC = () => {
  return (
    <Button variant="outline">
      <a
        href="/pdf/Railly-Hugo-CV-2023-Q4-ENG.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        <FileCode />
        <span className="hidden md:block">Download Resume</span>
        <span className="block md:hidden">Resume</span>
      </a>
    </Button>
  );
};

export default ResumeButton;
