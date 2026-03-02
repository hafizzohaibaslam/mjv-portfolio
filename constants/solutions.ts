export type SolutionsType = {
  id: string;
  role: string;
  title: string;
  description: string;
  imageUrl: string;
  width: number;
  height: number;
  moreDetails: {
    tags: string[];
    content: string[];
    modalImageUrl: string;
    modalImageWidth: [number, number];
    modalImageHeight: [number, number];
  };
};

export const SOLUTIONS_DATA: SolutionsType[] = [
  {
    id: "1",
    role: "EDUCATION / NON-PROFIT",
    title: "Chat2Learn",
    description:
      "A free & easy text message program, Whats App program, and mobile app to promote children's curiosity.",
    imageUrl: "/images/our-solutions/solution-1.svg",
    width: 502,
    height: 353,
    moreDetails: {
      tags: ["Figma", "Python", "GenAi", "Streamlit", "WhatsApp", "NextJS"],
      content: [
        "A free and easy text message program, WhatsApp program, and mobile app that uses conversational AI to support learning and promote children’s curiosity. ",
        "Chat2Learn helps kids explore questions, practice skills, and build understanding through natural, age-appropriate dialogue, making learning accessible anytime and anywhere for families, teachers, and students.",
      ],
      modalImageUrl: "/images/our-solutions/modal-1.svg",
      modalImageWidth: [292, 421] as [number, number],
      modalImageHeight: [351, 506] as [number, number],
    },
  },
  {
    id: "2",
    role: "MARKETING & ADVERTISING",
    title: "Mollee",
    description:
      "A hands-free AI social media manager for business owners. It understands context, reduces busywork, and makes everyday tasks faster and easier, without getting in the way.",
    imageUrl: "/images/our-solutions/solution-2.svg",
    width: 541,
    height: 346,
    moreDetails: {
      tags: ["Figma", "Python", "GenAi", "Streamlit", "WhatsApp", "NextJS"],
      content: [
        "An accessible, AI-powered messaging platform and mobile app that uses conversational AI to support career exploration and educational pathways.",
        "Reach Pathways helps students and job seekers discover opportunities, understand next steps, and build clear plans through guided questions and practical information.",
        "The platform connects interests to real-world options like training, education, and jobs, while making guidance accessible anytime and anywhere for learners and communities.",
      ],
      modalImageUrl: "/images/our-solutions/modal-2.svg",
      modalImageWidth: [294, 600] as [number, number],
      modalImageHeight: [190, 387] as [number, number],
    },
  },
  {
    id: "3",
    role: "LIFESTYLE",
    title: "SOPHIA",
    description:
      "A modern dating app that uses relationship science and conversational AI to understand people and intelligently match them with compatible life partners.",
    imageUrl: "/images/our-solutions/solution-3.svg",
    width: 539,
    height: 247,
    moreDetails: {
      tags: ["Figma", "Python", "GenAi", "Streamlit", "WhatsApp", "NextJS"],
      content: [
        "An autonomous AI Social Media Manager designed to make content management as hands-free as possible for business owners.",
        "It’s designed to understand context, ask the right follow-ups, and support real work, whether that’s research, planning, content, or decision support, without feeling rigid or robotic.",
        "The goal of Mollee is simple: reduce friction, increase clarity, and help people move from idea to execution faster, with judgment that feels human but scales like software.",
      ],
      modalImageUrl: "/images/our-solutions/modal-3.svg",
      modalImageWidth: [305, 428],
      modalImageHeight: [418, 586],
    },
  },
  {
    id: "4",
    role: "FINANCE & REAL ESTATE",
    title: "Low Rate Co.",
    description:
      "A mortgage lending platform that uses an AI mortgage agent to collect applications by voice, form, or text, speeding up approvals and allowing teams to scale their capacity.",
    imageUrl: "/images/our-solutions/solution-4.svg",
    width: 502,
    height: 341,
    moreDetails: {
      tags: ["Figma", "Python", "GenAi", "Streamlit", "WhatsApp", "NextJS"],
      content: [
        "LowRate Co is a mortgage lender dedicated to securing low-cost home loans by handling the rate shopping process for its clients.",
        "MJV built CINDIE, the world's first AI mortgage agent, which allows applicants to submit their information via voice, online forms, or SMS.",
        "By accelerating follow-ups and approvals, this powerful tool has allowed LowRate Co to scale their team's operational capacity by over 6x.",
      ],
      modalImageUrl: "/images/our-solutions/modal-4.svg",
      modalImageWidth: [339, 600],
      modalImageHeight: [219, 387],
    },
  },
  {
    id: "5",
    role: "MARKETING & ADVERTISING",
    title: "StoryHEAT",
    description:
      "A research-backed storytelling and analytics platform that helps brands create campaigns people actually care about.",
    imageUrl: "/images/our-solutions/solution-5.svg",
    width: 502,
    height: 330,
    moreDetails: {
      tags: ["Figma", "Python", "GenAi", "Streamlit", "WhatsApp", "NextJS"],
      content: [
        "A modern dating app aiming to reimagine romance by integrating timeless wisdom with the science of our time. ",
        "MJV is building Sophia, the platform's central AI matchmaker. Using research-backed relationship science, the AI understands individuals through dynamic interview sessions and natural conversation, leveraging the latest advancements to intelligently pair users with their life partners.",
      ],
      modalImageUrl: "/images/our-solutions/modal-5.svg",
      modalImageWidth: [305, 428],
      modalImageHeight: [418, 586],
    },
  },
  {
    id: "6",
    role: "MARKETING & ADVERTISING",
    title: "Pathos Communications",
    description:
      "A strategic communications and marketing firm that helps mission-driven organizations shape clear messages, build trust, and drive real-world impact.",
    imageUrl: "/images/our-solutions/solution-6.svg",
    width: 502,
    height: 242,
    moreDetails: {
      tags: ["Figma", "Python", "GenAi", "Streamlit", "WhatsApp", "NextJS"],
      content: [
        "Ground Media is a research-backed storytelling consultancy helping brands create campaigns that actually move people.",
        "Powered by StoryHEAT, a custom analytics platform built by MJV, Ground goes beyond traditional message testing-analyzing campaigns through the lens of strategic storytelling.",
        "By combining data, AI, and Ground’s proven storytelling frameworks, StoryHEAT helps turn insights into content that resonates, persuades, and drives impact.",
      ],
      modalImageUrl: "/images/our-solutions/modal-6.svg",
      modalImageWidth: [305, 537],
      modalImageHeight: [204, 360],
    },
  },
  {
    id: "7",
    role: "FINANCE & REAL ESTATE",
    title: "Madison Rose",
    description:
      "A Chicago-based commercial real estate firm specializing in finance and investment properties.",
    imageUrl: "/images/our-solutions/solution-7.svg",
    width: 252,
    height: 127,
    moreDetails: {
      tags: ["Figma", "Python", "GenAi", "Streamlit", "WhatsApp", "NextJS"],
      content: [
        "Presella is a media monitoring and reporting platform built for Pathos Communications that helps teams track coverage, understand narrative trends, and measure the real impact of their messaging.",
        "It brings together monitoring, analysis, and clear reporting in one place, making it easier to respond quickly, refine strategy, and stay ahead of the conversation.",
      ],
      modalImageUrl: "/images/our-solutions/modal-7.svg",
      modalImageWidth: [305, 537],
      modalImageHeight: [186, 360],
    },
  },
];
