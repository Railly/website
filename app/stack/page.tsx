import StackSection from "@/components/sections/stack-section";
import { ESectionTypes } from "@/types/enums";
import {
  learningInProgress,
  learningSomeday,
  myCurrentSkills,
} from "@/utils/data";

export default async function Stack() {
  return (
    <>
      <StackSection skills={myCurrentSkills} title={ESectionTypes.Stack} />
      <StackSection
        skills={learningInProgress}
        title={ESectionTypes.Learning}
      />
      <StackSection skills={learningSomeday} title={ESectionTypes.Planning} />
    </>
  );
}
