"use client";
import FramerCard from "./framer-card";
import RHProfileImage from "../images/rh-profile-image";

const AboutCard = ({ className }: { className?: string }) => {
  return (
    <FramerCard className={className}>
      <header className="flex w-full gap-6">
        <div>
          <div className="flex items-center w-full gap-4 mb-2">
            <div className="flex flex-col items-center gap-3">
              <RHProfileImage size={40} />
            </div>
            <h1 className="text-lg font-bold">Railly Hugo</h1>
          </div>
          <p className="text-sm text-hunter-black-900 dark:text-hunter-black-100/90">
            <b>Frontend Developer </b>
            and student of <b>Software Engineering </b>
            at Faculty of Systems Engineering and Informatics of San Marcos
            University in Lima, Peru. Planning to study a MS in Computer Science
            in the future.
          </p>
        </div>
      </header>
    </FramerCard>
  );
};

export default AboutCard;
