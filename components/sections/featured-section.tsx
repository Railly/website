import ResumeButton from "../buttons/resume-button";
import OneHunterCard from "../cards/one-hunter-card";

const FeaturedSection = () => {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium sm:text-2xl">Featured Project</h2>
        <ResumeButton />
      </div>
      <OneHunterCard />
    </section>
  );
};

export default FeaturedSection;
