import Image from "next/image";

const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Marley Rosario",
    title: "CEO + Full Stack Engineering",
    image: "/images/our-team/marley-rosario.svg",
    linkedIn: "",
  },
  {
    id: "2",
    name: "Forrest Haydon",
    title: "CPO + AI Product Engineering",
    image: "/images/our-team/forrest-haydon.svg",
    linkedIn: "",
  },
  {
    id: "3",
    name: "Jacob Salazar",
    title: "Lead DevOps + Back-end Engineering",
    image: "/images/our-team/jacob-salazar.svg",
    linkedIn: "",
  },
  {
    id: "4",
    name: "Iryna Motyashok",
    title: "CTO + Senior Backend Engineer",
    image: "/images/our-team/iryna-motyashok.svg",
    linkedIn: "",
  },
  {
    id: "5",
    name: "Nkanyiso Nzimande",
    title: "Senior Backend Engineer",
    image: "/images/our-team/nkanyiso-nzimande.svg",
    linkedIn: "",
  },
  {
    id: "6",
    name: "Nebojsa Bogdanovic",
    title: "COO + Senior Backend Engineer",
    image: "/images/our-team/nebojsa-bogdanovic.svg",
    linkedIn: "",
  },
  {
    id: "7",
    name: "Belem Salgado",
    title: "UI/UX Lead Designer",
    image: "/images/our-team/belem-salgado.svg",
    linkedIn: "",
  },
  {
    id: "8",
    name: "Connor Morgan",
    title: "CRO + Business Development",
    image: "/images/our-team/connor-morgan.svg",
    linkedIn: "",
  },
  {
    id: "9",
    name: "Maria Arias",
    title: "Administrative Lead + UI/UX Designer",
    image: "/images/our-team/maria-arias.svg",
    linkedIn: "",
  },
  {
    id: "10",
    name: "Zohaib Aslam",
    title: "Frontend + DevOps Engineer",
    image: "/images/our-team/zohaib-aslam.svg",
    linkedIn: "",
  },
  {
    id: "11",
    name: "Myles Rosario",
    title: "Software Engineer",
    image: "/images/our-team/myles-rosario-1.svg",
    linkedIn: "",
  },
  {
    id: "12",
    name: "Daniel Cody",
    title: "Communications Lead + Content Creation",
    image: "/images/our-team/daniel-cody.svg",
    linkedIn: "",
  },
  {
    id: "13",
    name: "Tejumade Olomola",
    title: "UI/UX Senior Designer",
    image: "/images/our-team/tejumade-olomola.svg",
    linkedIn: "",
  },
  {
    id: "14",
    name: "Kelvin Celso",
    title: "Full Stack Engineering",
    image: "/images/our-team/kelvin-celso.svg",
    linkedIn: "",
  },
  {
    id: "15",
    name: "Tolu 'Akosile",
    title: "UI/UX Senior Designer",
    image: "/images/our-team/tolu-akosile.svg",
    linkedIn: "",
  },
  {
    id: "16",
    name: "Nercio Nhatave",
    title: "Frontend + DevOps Engineer",
    image: "/images/our-team/nercio-nhatave.svg",
    linkedIn: "",
  },
];

const MeetTheTeam = () => {
  return (
    <div className="bg-white py-[48px] px-[16px] lg:py-0 lg:pt-[60px] lg:pb-[48px]">
      <div className="flex flex-col gap-12 lg:gap-15 w-full lg:max-w-[1233px] mx-auto">
        <h1 className="font-semibold text-[32px] lg:text-[56px] leading-[38px] lg:leading-[150%] tracking-[-1.68px] lg:tracking-[-3%] text-black-04 text-center">
          Meet the team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-[73px] lg:gap-y-[19px]">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="flex flex-col">
              <Image
                src={member.image}
                alt={member.name}
                width={250}
                height={250}
                className="w-[250px] h-[250px] object-cover rounded-[16px] grayscale"
              />
              <div className="flex items-start gap-2 pt-3">
                <div className="flex-1 flex flex-col gap-1 min-w-0">
                  <h3 className="font-semibold text-[18px] lg:text-[24px] leading-[27px] lg:leading-[150%] tracking-[-0.72px] lg:tracking-[-3%] text-black">
                    {member.name}
                  </h3>
                  <span className="font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[150%] tracking-[-0.72px] lg:tracking-[-3%] text-black">
                    {member.title}
                  </span>
                </div>
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={29}
                  height={29}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
