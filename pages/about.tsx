import Dropdown from "components/Dropdown";
import RHProfile from "components/RHProfile";
import WorkExperience from "components/WorkExperience";
import { format } from "date-fns";
import Head from "next/head";
import { WORK_EXPERIENCE } from "utils/data";

export const links = [
  {
    to: "https://www.linkedin.com/in/railly-hugo",
    external: true,
    text: "LinkedIn",
  },
  { to: "https://www.github.com/Railly", external: true, text: "Github" },
  { to: "https://www.twitter.com/RaillyHugo", external: true, text: "Twitter" },
];

const About = () => {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://raillyhugo.com/api/og?title=Railly Hugo - About"
        />
        <title>Railly Hugo</title>
        <meta property="og:title" content="About" />
        <meta
          property="og:description"
          content="Frontend Developer and student of Software Engineering at Faculty of Systems Engineering and Informatics of San Marcos University in Lima, Peru. Planning to study a MS in Computer Science in the future."
        />
        <meta property="og:url" content="https://raillyhugo.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="About" />
      </Head>
      <section className="p-4 rounded-lg backdrop-blur-sm">
        <header className="flex w-full gap-6">
          <div>
            <div className="flex items-center w-full gap-4 mb-2">
              <div className="flex flex-col items-center gap-3">
                <RHProfile size={40} />
              </div>
              <h1 className="text-lg font-bold">Railly Hugo</h1>
            </div>
            <p className="text-sm text-hunter-black-900 dark:text-hunter-black-100/90">
              <b>Frontend Developer </b>
              and student of <b>Software Engineering </b>
              at Faculty of Systems Engineering and Informatics of San Marcos
              University in Lima, Peru. Planning to study a MS in Computer
              Science in the future.
            </p>
          </div>
        </header>
        <main>
          <div className="flex items-center justify-between w-full mt-4 mb-6">
            <h1 className="text-xl font-bold">Work Experience</h1>
            <a
              href="/pdf/RH-CV-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center h-full px-4 py-2 text-sm font-medium transition-colors bg-white border border-gray-200 rounded-lg text-zinc-900 hover:bg-gray-100 hover:text-hunter-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-hunter-blue-700 dark:bg-gray-800 dark:text-zinc-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              <span className="hidden md:inline-block">Download CV</span>
              <span className="inline-block md:hidden">CV</span>
            </a>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {WORK_EXPERIENCE.map((workExperience, index) => (
              <li key={workExperience.id} className="mb-10 ml-6">
                <WorkExperience
                  position={workExperience.position}
                  company={workExperience.company}
                  startDate={workExperience.startDate}
                  endDate={workExperience.endDate}
                  responsibilities={workExperience.responsibilities}
                  isLatest={index === 0}
                />
              </li>
            ))}
          </ol>
        </main>
      </section>
    </>
  );
};

export default About;
