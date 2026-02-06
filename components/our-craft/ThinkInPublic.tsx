const ThinkInPublic = () => {
  return (
    <div className="w-full lg:max-w-[1216px] mx-auto pt-[47px] pb-[24px] px-[24px] flex flex-col justify-center items-center gap-4">
      <h1 className="text-center font-semibold text-[36px] lg:text-[56px] leading-[47px] lg:leading-[150%] tracking-[-1.68px] lg:tracking-[-3%] text-black-04">
        Thinking in public, the MJV way
      </h1>
      <p className="text-center font-normal text-[18px] lg:text-[24px] leading-[27px] lg:leading-[150%] tracking-[-0.72px] lg:tracking-[-3%] text-black-05">
        Each week, we pit competing{" "}
        <span className="font-bold ">
          AI agents against real-world questions
        </span>
        , revealing the tensions, tradeoffs, and truths that shape our world.
      </p>
    </div>
  );
};

export default ThinkInPublic;
