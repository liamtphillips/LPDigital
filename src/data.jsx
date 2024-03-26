import profile from './assets/profile.webp'
import people from './assets/people.webp'
import { FcDoughnutChart, FcElectroDevices, FcWorkflow, FcOrganization, FcPositiveDynamic, FcSerialTasks } from "react-icons/fc";
import tech from './assets/tech.webp'
import asset from './assets/asset.webp'
import reviewFace1 from './assets/ReviewFace1.jpg';
import reviewFace2 from './assets/ReviewFace2.jpg';
import reviewFace3 from './assets/ReviewFace3.jpg';
import reviewFace4 from './assets/ReviewFace4.jpg';
import reviewFace5 from './assets/ReviewFace5.jpg';
import reviewFace6 from './assets/ReviewFace6.jpg';
import reviewFace7 from './assets/ReviewFace7.jpg';
import reviewFace8 from './assets/ReviewFace8.jpg';
import reviewFace9 from './assets/ReviewFace9.jpg';
import reviewFace10 from './assets/ReviewFace10.jpg';
import reviewFace11 from './assets/ReviewFace11.jpg';
import reviewFace12 from './assets/ReviewFace12.jpg';

export const planData = [

    {
        title: 'LP Digital for Individuals',
        imageSrc: profile,
        description: "You're not just accessing the most actionable, industry-leading research. You're also joining the exclusive LP Digital community of top innovators, builders, and investors where you'll feel right at home.",
    },
    {
        title: 'LP Digital for Teams',
        imageSrc: people,
        description: "Elevate your team's crypto intelligence. Our tailored offerings empower global teams and institutions to navigate the crypto space with confidence.",
    }

]

export const digitalData = [
    {
        icon: <FcDoughnutChart />,
        title: 'One report, total clarity',
        text: "Our analysts dedicate extensive time to each report, meticulously dissecting complexities to distill actionable insights. Our aim is for the Delphi report to be your sole essential resource, providing comprehensive understanding of the narrative."
    },
    {
        icon: <FcElectroDevices />,
        title: 'Combined perspectives',
        text: "In the realm of crypto, our team stands unique by integrating viewpoints from researchers, builders, and investors. Our approach eschews theoretical musings, drawing directly from our experiences as engaged participants in the field to offer insightful analysis."
    },
    {
        icon: <FcWorkflow />,
        title: 'Our Analysts',
        text: "We have the deepest expertise across all verticals.  Our analysts spend all day and night thinking about their specific sector because the industry's highly flexible & composable mechanisms make this breadth of knowledge a non-negotiable."
    },
    {
        icon: <FcOrganization />,
        title: 'Building Infrastructure',
        text: "We've established our reputation through our expertise in recognizing nascent trends and the pioneering teams shaping them. Our focus on building infrastructure allows us to distill complex narratives and provide you with insights."
    },
    {
        icon: <FcPositiveDynamic />,
        title: 'Meet your goals',
        text: "Our reports lead the industry in actionable insights, distinguished by their unparalleled depth, data-driven approach, and assertive viewpoints. Our top-level market insights offer crucial context, while our meticulous bottom-up analysis reveals emerging trends at their inception."
    },
    {
        icon: <FcSerialTasks />,
        title: 'From macro to micro',
        text: "We don't just focus on crypto data; we contextualize it. By bridging macro insights with crypto market deep dives, our analysts provide a full-spectrum view of the digital asset landscape."
    },

];

export const servicesArray = [
    {
        title: "Value",
        text: "We become an extension of your team. We dedicate hours to learn and think critically about your protocol and how we’ll provide value in places you’ve identified most relevant."
    },
    {
        title: "Approach",
        text: "We build on the challenges we’ve encountered through our extensive work with other top-tier clients to strategize unique problem solving approaches for your team."
    },
    {
        title: "Insight",
        text: "Our analysis and insight is an organic extension of our own experience as active participants and investors in the space, resulting in unparalleled solutions."
    }
];

export const accordionArray = [
    {
        title: 'Technology Assessment Reports',
        text: 'Our due diligence reports play a pivotal role in guiding founders and teams through critical design choices, spanning implementation, privacy measures, infrastructure and Go-To-Market strategy, among others',
        accordionText: "We'll use the areas you outlined, project documentation, and a call between our teams to identify where we can provide immediate value and propose a 4-6 week engament plan. We deliver a comprehensive report diving into your concerns and provide our insights, including mitigants, proposed solutions, and additional strategic insights we think your team should consider. Our team views the audit as the first step in our consulting relationship. It allows both teams to get comfortable with one another before committing to a longer-term partnership where we work with your team in a closer capacity with a monthly retainer.",
        image: tech
    },
    {
        title: 'Asset Intelligence',
        text: 'Our Asset Intelligence service provides exchanges with intel on what assets they should be looking at when it comes to listings. Our enhanced due diligence reporting provides your team with the project information.',
        accordionText: "This aspect involves analyzing the underlying protocol and technology of the asset. It assesses factors such as the scalability, efficiency, security features, consensus mechanism, and any unique technological innovations employed by the project. Understanding the design and distribution of the token is critical for exchanges. This includes scrutinizing tokenomics, such as token supply, distribution mechanisms (e.g., ICO, airdrops, mining), utility within the ecosystem, governance mechanisms, and potential impact on market dynamics. Examining the competitive landscape helps exchanges understand where the asset stands relative to similar projects or established competitors. This involves evaluating factors like market positioning, differentiation, user adoption, partnerships, and potential challenges in gaining market share.",
        image: asset
    }
]

export const socialMediaData = [
    {
      imageSrc: reviewFace1,
      name: 'Amira Luca',
      role: 'Crypto Investor',
      description: 'LP Digital is a fantastic new resource for everyone to use, I highly recommend it.',
    },
    {
      imageSrc: reviewFace2,
      name: 'Steph Wood',
      role: 'Software Engineer',
      description: "Superb. I love LP Digital's new features.",
    },
    {
      imageSrc: reviewFace3,
      name: 'John Griffiths',
      role: 'Entrepreneur',
      description: 'From user-friendly interfaces to lightning-fast trades, this crypto company delivers a top-notch experience.',
    },
    {
      imageSrc: reviewFace4,
      name: 'Emily Evans',
      role: 'Industry Advisor',
      description: 'LP Digital stands as a beacon of innovation in the crypto landscape.',
    },
  ];
  
  export const socialMediaData2 = [
    {
      imageSrc: reviewFace5,
      name: 'Antony Murphy',
      role: 'Investor & Columnist',
      description: 'LP Digital strikes the perfect balance between security and simplicity. Their state-of-the-art encryption ensures your assets are safe, while an intuitive interface makes navigating the crypto world a breeze.',
    },
    {
      imageSrc: reviewFace6,
      name: 'Timothy Clark',
      role: 'Student',
      description: "The platform's intuitive design ensures a smooth crypto experience. Invest with confidence, knowing LP Digital combines ease of use with precision.",
    },
    {
      imageSrc: reviewFace7,
      name: 'Jon Paul',
      role: 'Digital Media Executive',
      description: 'Dive into crypto innovation with LP Digital. This company leads the pack, providing advanced tools and decentralized finance solutions. Elevate your investment game and ride the wave of innovation with LP Digital.',
    },
    {
      imageSrc: reviewFace8,
      name: 'Nina Charles',
      role: 'Digital Trading Executive',
      description: 'LP Digital has helped me learn so much about the industry, everybody should check them out.',
    },
  ];
  
  export const socialMediaData3 = [
    {
      imageSrc: reviewFace9,
      name: 'Steven Ridge',
      role: 'Investor & Entrepreneur',
      description: 'Stay ahead of the curve and explore the limitless possibilities of decentralized finance with LP Digital.',
    },
    {
      imageSrc: reviewFace10,
      name: 'River Wilson',
      role: 'Portfolio Manager',
      description: "LP Digital's unmatched combination of sophistication and accessibility. From cutting-edge features to a sleek interface, LP Digital empowers users to explore the full potential of digital assets.",
    },
    {
      imageSrc: reviewFace11,
      name: 'Katie Elliot',
      role: 'Founder, XP Corporate',
      description: 'Streamlined and user-friendly, LP Digital brings simplicity to crypto investing.',
    },
    {
      imageSrc: reviewFace12,
      name: 'Dave Walsh',
      role: 'General Partner',
      description: 'LP Digital embraces the future of finance, offering a seamless journey for both new and experienced investors.',
    },
  ];