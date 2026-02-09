import SolutionSection from "./SolutionSection";
import { SOLUTIONS_DATA } from "@/constants/solutions";

const SolutionList = () => {
  return (
    <div className="w-full lg:max-w-[1156px] mx-auto p-5 lg:p-10 flex flex-col gap-[60px] lg:gap-[160px]">
      {SOLUTIONS_DATA.map((solution) => (
        <SolutionSection
          key={solution.id}
          solution={solution}
          inverted={Number(solution.id) % 2 === 0}
        />
      ))}
    </div>
  );
};

export default SolutionList;
