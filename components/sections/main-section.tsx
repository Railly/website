// import DisclaimerCard from "../cards/disclaimer-card";
"use client";
import { motion } from "framer-motion";
import ProfileCard from "../cards/profile-card";
import Image from "next/image";

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
