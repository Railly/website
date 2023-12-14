import ResumeButton from "@/components/buttons/resume-button";
import AboutCard from "@/components/cards/about-card";
import WorkExperienceCard from "@/components/cards/work-experience-card";

export const metadata = {
  title: "About",
  description: "Master's student in Artificial Intelligence, experienced UI Developer, and Software Engineer specialized in React, Next.js and TypeScript.",
  openGraph: {
    siteName: "Railly Hugo | About",
    description: "Master's student in Artificial Intelligence, experienced UI Developer, and Software Engineer specialized in React, Next.js and TypeScript.",
    images: [
      {
        url: `https://raillyhugo.com/api/og?title=${encodeURIComponent(
          "Railly Hugo | About"
        )}&color=${encodeURIComponent("B8B8B8")}`,
      },
    ],
  },
}

export default async function About() {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4 sm:text-2xl">Professional Profile</h1>
      <AboutCard />
      <main>
        <div className="flex items-center justify-between w-full my-6">
          <h1 className="text-xl font-semibold sm:text-2xl">Work Experience</h1>
          <ResumeButton />
        </div>
        <WorkExperienceCard />
      </main>
    </section>
  );
}
