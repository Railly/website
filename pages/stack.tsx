import StackSection from "components/StackSection";
import {
  learningInProgress,
  learningSomeday,
  myCurrentSkills,
} from "utils/data";
import { SectionTypes } from "utils/types";
import Head from "next/head";
import { format } from "date-fns";

const Stack = () => {
  const date = format(new Date(), "MMMM dd, y");
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://raillyhugo.com/api/og?title=Railly Hugo - Stack&date=${date}`}
        />
      </Head>
      <StackSection skills={myCurrentSkills} title={SectionTypes.Stack} />
      <StackSection skills={learningInProgress} title={SectionTypes.Learning} />
      <StackSection skills={learningSomeday} title={SectionTypes.Planning} />
    </>
  );
};

export default Stack;
