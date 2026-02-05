import Image from "next/image";
import CustomButton from "../shared/CustomButton";

const AiAgent = () => {
  return (
    <div className="min-h-screen px-[31px] pt-[18px] pb-[29px] bg-white-05 flex lg:flex lg:items-center lg:justify-center">
      <div className="w-full max-w-[1247px] mx-auto flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[584px]">
          <h1 className="font-semibold text-[36px] lg:text-[56px] leading-[54px] lg:leading-[48px] tracking-0 lg:tracking-[-3px] text-black-01">
            What is an AI Agent?
          </h1>
          <div className="flex flex-col gap-4">
            <p className="font-normal text-[18px] lg:text-[22px] leading-[29px] lg:leading-[28px] tracking-0 lg:tracking-[-0.44px] text-gray-01">
              Agentic AI is an autonomous form of artificial intelligence that
              makes decisions itself, rather than relying on human instructions.
              Think of it like a little robot friend diligently typing away
              behind your screen in cyberspace, working on your behalf.
            </p>
            <p className="font-normal text-[18px] lg:text-[22px] leading-[29px] lg:leading-[28px] tracking-0 lg:tracking-[-0.44px] text-gray-01">
              Unlike traditional AI that completes tasks based on human input,
              agentic AI systems are designed to understand complicated goals,
              plan their own course of action, and adapt to changing
              environments.
            </p>
          </div>
          <CustomButton className="py-2.5 px-4 font-medium text-[14px] leading-[20px] tracking-[-0.15px] rounded-[32px] w-fit">
            See our work
            <Image src="/icons/arrow.svg" alt="Arrow" width={16} height={16} />
          </CustomButton>
        </div>
        {/* Right Section */}
        <AiAgentImageSection />
      </div>
    </div>
  );
};

export default AiAgent;

const IMAGES = [
  { src: "/icons/landing/ai-agent/figma.svg", alt: "Figma" },
  { src: "/icons/landing/ai-agent/chat-gpt.svg", alt: "ChatGPT" },
  { src: "/icons/landing/ai-agent/github.svg", alt: "GitHub" },
  { src: "/icons/landing/ai-agent/flower.svg", alt: "Flower" },
  { src: "/icons/landing/ai-agent/grid.svg", alt: "Grid" },
  { src: "/icons/landing/ai-agent/stripe.svg", alt: "Stripe" },
  { src: "/icons/landing/ai-agent/apify.svg", alt: "Apify" },
  { src: "/icons/landing/ai-agent/sales-force.svg", alt: "Salesforce" },
  { src: "/icons/landing/ai-agent/django.svg", alt: "Django" },
  { src: "/icons/landing/ai-agent/google-cloud.png", alt: "Google Cloud" },
  { src: "/icons/landing/ai-agent/next-js.svg", alt: "Next.js" },
  { src: "/icons/landing/ai-agent/react-native.svg", alt: "React Native" },
];

const LOGO_SIZE = 40;
const ORBIT_RADIUS_PERCENT = 36;
const AiAgentImageSection = () => {
  return (
    <div className="relative w-full lg:max-w-[420px] h-[405px] lg:h-[500px] bg-white rounded-[24px] p-6 shadow-secondary @container [container-type:size]">
      {/* Center MJV Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[167px] h-[40px] flex items-center justify-center">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Square orbit plane so the path is always a perfect circle at any aspect ratio */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100cqw,100cqh)] h-[min(100cqw,100cqh)] animate-orbit pointer-events-none">
        {IMAGES.map((img, i) => {
          const count = IMAGES.length;
          const angle = (2 * Math.PI * i) / count - Math.PI / 2;
          const x = 50 + ORBIT_RADIUS_PERCENT * Math.cos(angle);
          const y = 50 + ORBIT_RADIUS_PERCENT * Math.sin(angle);
          return (
            <div
              key={`${img.src}-${i}`}
              className="absolute flex items-center justify-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: LOGO_SIZE,
                height: LOGO_SIZE,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <div className="flex items-center justify-center w-full h-full animate-orbit-reverse">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
