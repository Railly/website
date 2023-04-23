import StackSection from "components/StackSection";
import {
  learningInProgress,
  learningSomeday,
  myCurrentSkills,
} from "utils/data";
import Head from "next/head";
import { SectionTypes } from "@/types/enums";

const Stack = () => {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://raillyhugo.com/api/og?title=Railly Hugo - Stack"
        />
        <title>Railly Hugo</title>
        <meta property="og:title" content="Stack" />
        <meta
          property="og:description"
          content="My stack of skills, what I am learning and what I plan to learn in the future."
        />
        <meta property="og:url" content="https://raillyhugo.com/stack" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stack" />
      </Head>
      <StackSection skills={myCurrentSkills} title={SectionTypes.Stack} />
      <StackSection skills={learningInProgress} title={SectionTypes.Learning} />
      <StackSection skills={learningSomeday} title={SectionTypes.Planning} />
    </>
  );
};

export default Stack;
