import { format } from "date-fns";
import { Metadata } from "next";
import ResumeButton from "@/components/buttons/resume-button";
import AboutCard from "@/components/cards/about-card";
import WorkExperienceCard from "@/components/cards/work-experience-card";

export async function generateMetadata(): Promise<Metadata> {
  const date = format(new Date(), "MMMM dd, y");
  return {
    title: "About",
    description:
      "Frontend Developer and student of Software Engineering at Faculty of Systems Engineering and Informatics of San Marcos University in Lima, Peru. Planning to study a MS in Computer Science in the future.",
    openGraph: {
      siteName: "Railly Hugo - About",
      images: [
        {
          url: `https://raillyhugo.com/api/og?title=Railly Hugo - About&date=${date}`,
        },
      ],
    },
  };
}

export default async function About() {
  return (
    <>
      <section className="p-4 rounded-lg backdrop-blur-sm">
        <AboutCard />
        <main>
          <div className="flex items-center justify-between w-full mt-6 mb-4">
            <h1 className="text-xl font-bold">Work Experience</h1>
            <ResumeButton />
          </div>
          <WorkExperienceCard />
        </main>
      </section>
    </>
  );
}
