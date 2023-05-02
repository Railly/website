import DisclaimerCard from "../cards/disclaimer-card";
import ProfileCard from "../cards/profile-card";

const MainSection = () => {
  return (
    <section className="flex flex-col w-full gap-4 md:flex-row">
      <div className="w-full">
        <ProfileCard />
      </div>
      {/* <div className="w-full md:w-1/3">
        <DisclaimerCard />
      </div> */}
    </section>
  );
};

export default MainSection;
