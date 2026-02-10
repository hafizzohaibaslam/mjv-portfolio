import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col gap-8 lg:gap-7 px-[34px] pt-[47px] lg:pt-[40px] pb-[47px] lg:pb-[65px] bg-white"
    >
      {/* Title */}
      <h1 className="font-semibold text-[40px] lg:text-[56px] leading-[60px] lg:leading-[150%] tracking-[-1.68px] lg:tracking-[-3%] text-black-04 text-center">
        Services
      </h1>
      {/* Main Section */}
      <div className="w-full lg:max-w-[980px] mx-auto flex flex-col gap-12 lg:gap-6">
        {/* Title and Description */}
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-1">
          <h1 className="text-center font-semibold text-[24px] lg:text-[36px] leading-[36px] lg:leading-[150%] tracking-[-1.08px] lg:tracking-[-3%] text-black-04">
            Here&apos;s how we can help you
          </h1>
          <p className="text-center font-normal text-[18px] lg:text-[24px] leading-[27px] lg:leading-[150%] tracking-[-0.72px] lg:tracking-[-3%] text-black-05">
            We offer a range of services to help you achieve your goals.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="h-[540px] rounded-[16px] shadow-services bg-white flex flex-col gap-[5px] overflow-hidden"
            >
              <div className="flex flex-col mt-[19px] mx-[17px]">
                <h3 className="font-semibold text-[20px] leading-[150%] tracking-[-3%] text-black-04">
                  {service.title}
                </h3>
                <p className="font-normal text-[16px] leading-[111%] tracking-[-3%] text-black-05">
                  {service.description}
                </p>
              </div>
              <div className="flex-1 px-2">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

const SERVICES = [
  {
    id: "1",
    title: "Custom Apps",
    description:
      "Full service generative driven app development, from concept to launch.",
    imageUrl: "/images/landing/services/service-01.svg",
  },
  {
    id: "2",
    title: "AI Agents",
    description:
      "Custom Al agents that automate tasks and enhance decision-making across your organization.",
    imageUrl: "/images/landing/services/service-02.svg",
  },
  {
    id: "3",
    title: "Hi-Fidelity Designs",
    description:
      "Beautiful, user-centered designs that bring your concept to life.",
    imageUrl: "/images/landing/services/service-03.svg",
  },
];
