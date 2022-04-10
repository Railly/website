import StackSection from "components/StackSection";
import {
  learningInProgress,
  learningSomeday,
  myCurrentSkills,
} from "utils/data";
import { SectionTypes } from "utils/types";

const Stack = () => {
  return (
    <>
      <StackSection skills={myCurrentSkills} title={SectionTypes.Stack} />
      <StackSection skills={learningInProgress} title={SectionTypes.Learning} />
      <StackSection skills={learningSomeday} title={SectionTypes.Planning} />
    </>
  );
};

export default Stack;
