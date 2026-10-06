import {
  FaCar,
  FaBrain,
  FaUserShield,
  FaHandsHelping,
  FaBroom,
  FaLeaf,
  FaBriefcase,
  FaHome,
  FaRoute,
  FaUsers,
  FaGamepad,
  FaUtensils,
  FaUniversalAccess,
  FaFileInvoiceDollar
} from 'react-icons/fa';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'NDIS Support', path: '/ndis-support' },
  { name: 'Contact Us', path: '/contact' },
];



export const servicesData = [
  {
    id: 'transport-assistance',
    title: 'Transport Assistance',
    description: 'Safe and reliable transport options to help you travel confidently to essential destinations.',
    icon: FaCar,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782190046/ChatGPT_Image_Jun_23_2026_10_17_07_AM_f9kzj6.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782190046/ChatGPT_Image_Jun_23_2026_10_17_07_AM_f9kzj6.png',
    fullDescription: `Our Transport Assistance service supports NDIS participants in traveling safely and confidently to essential destinations. Whether it's getting to medical appointments, work, school, or community activities, we ensure reliable and accessible transport options that promote independence. We aim to remove mobility barriers so participants can stay connected, involved, and active in their communities with confidence and ease.`,
    benefits: [
      'Reliable arrival at medical appointments and commitments',
      'Door-to-door physical support and safe transfers',
      'Increased independence through travel capacity building',
      'Reduced stress of navigating public transit networks alone'
    ],
    supportFeatures: [
      'Safe, punctual, and comfortable transport solutions',
      'Assistance with booking and managing travel schedules',
      'Support workers for accompanied travel if needed',
      'Help understanding and using NDIS transport funding'
    ],
    eligibility: 'Available to NDIS participants with Transport funding or Core budget allocations.',
    faqs: [
      {
        question: 'Are your vehicles wheelchair accessible?',
        answer: 'Yes, we have access to modified, wheelchair-accessible vehicles. Please specify your requirements during booking.'
      }
    ],
    gallery: []
  },
  // {
  //   id: 'behaviour-support',
  //   title: 'Behaviour Support',
  //   description: 'Specialized approaches to help individuals manage challenging behaviors in a respectful, positive way.',
  //   icon: FaBrain,
  //   image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   bannerImage: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  //   fullDescription: `Our Behaviour Support service is designed to help individuals with complex needs manage challenging behaviours in a respectful and positive way. We work closely with participants, families, and support teams to understand the underlying causes and develop personalised strategies that enhance wellbeing and daily functioning. Our ultimate goal is to reduce restrictive practices, improve overall quality of life, and support safe, meaningful participation in home and community settings.`,
  //   benefits: [
  //     'Reduced instances of challenging or high-risk behaviors',
  //     'Enhanced coping mechanisms for families and caregivers',
  //     'Safer home and community engagement environments',
  //     'Improved emotional regulation and clarity'
  //   ],
  //   supportFeatures: [
  //     'Comprehensive behavioural assessments',
  //     'Development of Positive Behaviour Support Plans (PBSP)',
  //     'Training for carers and frontline support workers',
  //     'Ongoing monitoring and dynamic plan adjustments',
  //     'Active collaboration with therapists and healthcare professionals'
  //   ],
  //   eligibility: 'Available to NDIS participants with approved Positive Behaviour Support capacity-building budgets.',
  //   faqs: [
  //     {
  //       question: 'What is a Positive Behaviour Support Plan (PBSP)?',
  //       answer: 'It is a tailored document created by specialists outlining proactive steps to support the person and minimize triggers safely.'
  //     }
  //   ],
  //   gallery: []
  // },
  {
    id: 'in-home-care',
    title: 'In-Home Care',
    description: 'Personalised support provided in the comfort and familiarity of your own home.',
    icon: FaUserShield,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782186730/ChatGPT_Image_Jun_23_2026_09_21_52_AM_smjtiy.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782186730/ChatGPT_Image_Jun_23_2026_09_21_52_AM_smjtiy.png',
    fullDescription: `Our In-Home Care service provides personalised support to NDIS participants in the comfort and familiarity of their own homes. We focus on promoting independence, dignity, and safety while assisting with daily activities that support a healthy and fulfilling lifestyle. Our trained support workers deliver care that respects each individual's needs, routines, and preferencesâ€”ensuring comfort, consistency, and peace of mind for participants and their families.`,
    benefits: [
      'Maintained comfort within your own residential space',
      'Peace of mind for active family members and caregivers',
      'Highly customized schedules structured around you',
      'Dignified daily routine assistance from trusted staff'
    ],
    supportFeatures: [
      'Personal care (showering, dressing, grooming)',
      'Meal preparation and feeding support',
      'Medication reminders or assistance',
      'Mobility and transfers support',
      'Companionship and emotional support',
      'Household tasks and light cleaning'
    ],
    eligibility: 'Open to NDIS participants requiring individual core support lines or private-pay individuals.',
    faqs: [
      {
        question: 'Can I choose my care schedule?',
        answer: 'Yes, routines are tailored around your lifestyle, covering mornings, evenings, or specific requested windows.'
      }
    ],
    gallery: []
  },
  {
    id: 'therapeutic-supports',
    title: 'Therapeutic Supports',
    description: 'Evidence-based therapies to foster independence, confidence, and quality of life.',
    icon: FaHandsHelping,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782190216/ChatGPT_Image_Jun_23_2026_10_20_00_AM_oemde6.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782190216/ChatGPT_Image_Jun_23_2026_10_20_00_AM_oemde6.png',
    fullDescription: `Our Therapeutic Supports are designed to help NDIS participants build skills, improve daily functioning, and enhance overall wellbeing. Delivered by qualified professionals, these supports are personalised to meet individual goals across physical, emotional, social, and behavioural areas. We work closely with participants, families, and support teams to deliver evidence-based therapies that foster independence, confidence, and quality of life in everyday settingsâ€”at home, in the community, or via telehealth.`,
    benefits: [
      'Improved mobility, posture, and physical capacity',
      'Enhanced speech, language, and interactive expression',
      'Better mental health balance and daily coping mechanisms',
      'Direct, goal-oriented tracking overseen by certified experts'
    ],
    supportFeatures: [
      'Occupational therapy'
    ],
    eligibility: 'Requires NDIS allocation under Capacity Building - Improved Daily Living.',
    faqs: [
      {
        question: 'Can therapeutic sessions happen at home?',
        answer: 'Yes, depending on practitioner availability, therapies can happen at home, in-clinic, or remotely via telehealth.'
      }
    ],
    gallery: []
  },
  {
    id: 'cleaning',
    title: 'Cleaning',
    description: 'Domestic cleaning services to maintain a clean, safe, and comfortable home.',
    icon: FaBroom,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    fullDescription: `Our Cleaning Home service supports NDIS participants in maintaining a clean, safe, and comfortable living environment. We understand the importance of a tidy home for both physical health and emotional wellbeing. All services are delivered with care, respect, and attention to individual needs and preferences. Whether it's regular support or occasional deep cleaning, we're here to help participants feel confident and at ease in their homes.`,
    benefits: [
      'Hygienic living surfaces reducing common health hazards',
      'An organized, clutter-free space that promotes relaxation',
      'Less physical strain from demanding household upkeep tasks'
    ],
    supportFeatures: [
      'General household cleaning (vacuuming, dusting, mopping)',
      'Bathroom and kitchen cleaning',
      'Changing bed linen and laundry support',
      'Rubbish removal and surface sanitising'
    ],
    eligibility: 'Available through Assistance with Daily Life - Household Tasks funding allocations.',
    faqs: [
      {
        question: 'Do I need to supply the equipment?',
        answer: 'Our workers utilize your household supplies to respect product sensitivities, unless prior specific requests are organized.'
      }
    ],
    gallery: []
  },
  {
    id: 'gardening',
    title: 'Gardening',
    description: 'Reliable upkeep to ensure a safe, tidy, and welcoming outdoor space.',
    icon: FaLeaf,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782187367/ChatGPT_Image_Jun_23_2026_09_32_25_AM_jpapdp.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782187367/ChatGPT_Image_Jun_23_2026_09_32_25_AM_jpapdp.png',
    fullDescription: `Our Gardening service helps NDIS participants enjoy a safe, tidy, and welcoming outdoor space. Whether it's maintaining a backyard or simply enjoying time in the garden, we provide friendly, reliable support suited to each individual's needs and abilities. We aim to create outdoor environments that promote wellbeing, independence, and enjoymentâ€”while also offering participants the chance to be involved in gardening activities if they wish.`,
    benefits: [
      'Maintained structural clearings preventing slips and falls',
      'Beautifully manicured gardens boosting therapeutic mental health',
      'Safe, pest-free environments for family outdoor activities'
    ],
    supportFeatures: [
      'Lawn mowing and edging',
      'Weeding and pruning',
      'Planting flowers, herbs, or vegetables',
      'Garden clean-up and green waste removal'
    ],
    eligibility: 'Assessed and provided under standard NDIS core household maintenance line items.',
    faqs: [
      {
        question: 'Can the worker teach me how to grow plants?',
        answer: 'Yes! Our support structure embraces interactive capacity building if you wish to participate actively.'
      }
    ],
    gallery: []
  },
  // {
  //   id: 'finding-and-keeping-a-job',
  //   title: 'Finding and Keeping a Job',
  //   description: 'Practical assistance to build the confidence, skills, and experience needed for employment.',
  //   icon: FaBriefcase,
  //   image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  //   fullDescription: `Our Finding and Keeping a Job service supports NDIS participants in preparing for, gaining, and maintaining meaningful employment. We provide personalised, practical assistance to help individuals build the confidence, skills, and experience needed to enter or rejoin the workforce. We believe that everyone has the right to meaningful work. Our goal is to help participants become work-ready, connect with the right opportunities, and thrive in supportive, inclusive workplaces.`,
  //   benefits: [
  //     'Financial independence through structured workforce placement',
  //     'Enhanced personal identity, routine, and professional skillset',
  //     'Direct navigation alongside inclusive local employers'
  //   ],
  //   supportFeatures: [
  //     'Identifying job goals and career interests',
  //     'Resume writing and interview preparation',
  //     'On-the-job support and workplace adjustments',
  //     'Skill-building and pre-employment training',
  //     'Support with work placements or volunteer opportunities'
  //   ],
  //   eligibility: 'Fits NDIS Capacity Building line items for Employment/Finding and Keeping a Job.',
  //   faqs: [
  //     {
  //       question: 'Do you help once I actually secure the job?',
  //       answer: 'Yes, on-the-job support helps you transition, learn workflows, and settle into the workplace with adjustments.'
  //     }
  //   ],
  //   gallery: []
  // },
  {
    id: 'shared-accommodation',
    title: 'Shared Accommodation',
    description: 'A safe, supportive, and inclusive home environment to live with others and grow in independence.',
    icon: FaHome,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188140/ChatGPT_Image_Jun_23_2026_09_45_19_AM_szqhyr.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188140/ChatGPT_Image_Jun_23_2026_09_45_19_AM_szqhyr.png',
    fullDescription: `Our Group and Shared Living Arrangements are designed to offer NDIS participants a safe, supportive, and inclusive home environment where they can live with others, build friendships, and grow in independence. We provide personalised support to help individuals achieve goals. Whether it's a short-term stay or a long-term shared living option, we focus on creating a respectful and family-like atmosphere where participants feel secure, valued, and empowered to thrive at their own pace.`,
    benefits: [
      'Safe shared homes with security features',
      'Social community connections, reducing isolation',
      '24/7 care frameworks suited to individual needs'
    ],
    supportFeatures: [
      'Live comfortably in a shared home with others who have similar support needs',
      'Build positive relationships and develop social and communication skills',
      'Participate in shared responsibilities like meal preparation and household tasks',
      'Access 24/7 or scheduled support tailored to their needs',
      'Enjoy privacy, community, and independence within a structured living space'
    ],
    eligibility: 'Approved NDIS SIL/SDA funding lines required following structural placement assessment.',
    faqs: [
      {
        question: 'Do I get my own bedroom space?',
        answer: 'Absolutely. Every individual has a private room tailored to their custom personal layout.'
      }
    ],
    gallery: []
  },
  {
    id: 'support-coordination',
    title: 'Support Coordination',
    description: 'Expert guidance to understand your NDIS plan and connect with the right providers.',
    icon: FaRoute,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    fullDescription: `Our Support Coordination service helps NDIS participants make the most of their NDIS plans by connecting them with the right supports and services. We work alongside participants to build their capacity, confidence, and understanding of how to manage their supports and achieve their goals. Our experienced Support Coordinators are here to guide you every step of the way, ensuring you stay in control and receive the best support tailored to your needs and aspirations.`,
    benefits: [
      'Unbiased explanation of complicated funding structures',
      'Seamless connection with top-rated local care agencies',
      'Optimized budget tracking to prevent plan underspends'
    ],
    supportFeatures: [
      'Understanding your NDIS plan and funding allocation',
      'Finding and connecting with service providers',
      'Coordinating supports across multiple areas (health, housing, employment, etc.)',
      'Monitoring progress and adjusting services as needed',
      'Building skills for greater independence in managing your plan'
    ],
    eligibility: 'Requires NDIS Plan Allocation specifically for Support Coordination.',
    faqs: [
      {
        question: 'What is the primary role of a coordinator?',
        answer: 'They connect your lifestyle goals with functional service agreements across active service providers.'
      }
    ],
    gallery: []
  },
  {
    id: 'community-access',
    title: 'Community Access',
    description: 'Support to engage with your local community, build social skills, and visit places of interest.',
    icon: FaUsers,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782189892/ChatGPT_Image_Jun_23_2026_10_14_35_AM_wdjpn7.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782189892/ChatGPT_Image_Jun_23_2026_10_14_35_AM_wdjpn7.png',
    fullDescription: `Our Community Access service is designed to support NDIS participants in engaging with their local community, building social connections, and participating in meaningful activities outside the home. Whether it's a daily outing or a special event, we support participants to be active, included, and connected within their communityâ€”while always respecting their goals, preferences, and comfort levels.`,
    benefits: [
      'Active inclusion in neighborhood groups and events',
      'Reduced social isolation and enhanced interactive confidence',
      'Skill building for independent spatial transit'
    ],
    supportFeatures: [
      'Attend social events, classes, or recreational activities',
      'Visit shops, cafes, libraries, or places of interest',
      'Join community groups or volunteering opportunities',
      'Access public transport safely and confidently',
      'Develop independence and social skills'
    ],
    eligibility: 'Core Supports - Social & Community Participation access criteria.',
    faqs: [
      {
        question: 'Are ticket costs for community outings covered?',
        answer: 'NDIS covers the companion support worker costs; individual venue ticket entry remains your responsibility.'
      }
    ],
    gallery: []
  },
  {
    id: 'in-door-activities',
    title: 'In-Door Activities',
    description: 'Stay active, engaged, and socially connected within comfortable indoor environments.',
    icon: FaGamepad,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188487/ChatGPT_Image_Jun_23_2026_09_51_08_AM_qksf57.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188487/ChatGPT_Image_Jun_23_2026_09_51_08_AM_qksf57.png',
    fullDescription: `Our Indoor Activities service helps NDIS participants stay active, engaged, and socially connected in comfortable indoor environments. We recognise the value of recreation for enhancing emotional wellbeing, building confidence, and encouraging daily participation. All activities are tailored to each individual's interests, abilities, and goals. Whether it's light recreation or team-based play, we aim to create positive experiences that promote enjoyment, skill-building, and connection.`,
    benefits: [
      'Weather-independent scheduling continuity',
      'Safe, managed physical movement zones',
      'Encouragement of creative and mental agility'
    ],
    supportFeatures: [
      'Table tennis, board games, and arts & crafts',
      'Indoor movement or fitness sessions',
      'Group games and shared leisure activities',
      'Social engagement in a fun, inclusive space'
    ],
    eligibility: 'Core support budget or capacity-building program support allocations.',
    faqs: [
      {
        question: 'Can I bring my own creative project?',
        answer: 'Yes! Our support workers love assisting you on your custom crafting, gaming, or assembly goals.'
      }
    ],
    gallery: []
  },
  {
    id: 'out-door-activities',
    title: 'Out-Door Activities',
    description: 'Enjoy fresh air, nature, and physical wellbeing through safe outdoor experiences.',
    icon: FaLeaf,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188817/ChatGPT_Image_Jun_23_2026_09_55_51_AM_zsenow.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188817/ChatGPT_Image_Jun_23_2026_09_55_51_AM_zsenow.png',
    fullDescription: `Our Outdoor Activities service is designed to support NDIS participants in enjoying fresh air, nature, and physical wellbeing through safe, engaging experiences outside the home. Whether it's a calm day in the park or a fun community outing, we support participants to stay active, connected, and confident in the outdoorsâ€”always respecting their goals, comfort, and pace.`,
    benefits: [
      'Direct vitamin D absorption and outdoor tracking benefits',
      'Cardio health tracking via structured park walks',
      'Relaxation and mindfulness away from home configurations'
    ],
    supportFeatures: [
      'Go for nature walks or gentle exercise in local parks',
      'Participate in outdoor group games, picnics, or gardening',
      'Explore beaches, gardens, or scenic spots',
      'Visit outdoor markets, festivals, or community fairs',
      'Enjoy quiet time outdoors for relaxation or mindfulness'
    ],
    eligibility: 'Standard core community support inclusions.',
    faqs: [
      {
        question: 'What happens during sudden rainy days?',
        answer: 'We seamlessly adjust the schedule to swap to alternative indoor activities or indoor fitness settings.'
      }
    ],
    gallery: []
  },
  {
    id: 'daily-meal-preparation-support',
    title: 'Daily Meal Preparation Support',
    description: 'Nutritious meal services ensuring you receive well-balanced, healthy dishes tailored to your preferences.',
    icon: FaUtensils,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188953/4720613364-feeding-home-care_yorfqi.jpg',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782188953/4720613364-feeding-home-care_yorfqi.jpg',
    fullDescription: `Our Nutritious Meal service ensures that participants receive well-balanced, healthy meals tailored to their dietary needs, health conditions, and cultural preferences. We understand the importance of proper nutrition in promoting overall wellbeing and maintaining energy for daily activities. Whether participants need full assistance or just a helping hand, our team makes sure they enjoy tasty, nutritious meals every dayâ€”promoting independence, dignity, and a healthier lifestyle.`,
    benefits: [
      'Consistent access to healthy, freshly made dishes',
      'Strict adherence to specific medical or allergic needs',
      'Cooking learning curves managed via fun kitchen layouts'
    ],
    supportFeatures: [
      'Meal planning based on personal preferences and medical requirements',
      'Assistance with grocery shopping and budgeting',
      'Support with meal preparation or delivery of ready-made meals',
      'Education on healthy eating habits and food safety',
      'Encouragement to participate in cooking as a life skill'
    ],
    eligibility: 'Incorporate inside basic Assistance with Daily Life budgets.',
    faqs: [
      {
        question: 'Can you cook specific cultural food?',
        answer: 'Yes, our workers match your individual menu planning, spice structures, and preferences completely.'
      }
    ],
    gallery: []
  },
  {
    id: 'development-of-daily-living-and-life-skills',
    title: 'Development of Daily Living and Life Skills',
    description: 'Empowering participants with the confidence and ability to manage everyday tasks independently.',
    icon: FaHandsHelping,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782189364/ChatGPT_Image_Jun_23_2026_10_05_44_AM_hqqosu.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782189364/ChatGPT_Image_Jun_23_2026_10_05_44_AM_hqqosu.png',
    fullDescription: `Our Development of Daily Living and Life Skills service is designed to empower participants with the confidence and ability to manage everyday tasks independently. We provide personalised support to build essential life skills that enhance autonomy at home and in the community. Our skilled support workers work one-on-one or in group settings to help participants develop practical abilities that promote self-reliance and lifelong learning. This service is tailored to meet the unique needs and aspirations of each individual.`,
    benefits: [
      'Long-term self-sufficiency across basic personal tasks',
      'Substantial boost to baseline self-worth and confidence',
      'Reduced structural reliance on long-term caregiver lines'
    ],
    supportFeatures: [
      'Personal hygiene, cooking, and cleaning routines',
      'Budgeting, money management, and using public transport',
      'Communication and social interaction skills',
      'Problem-solving and decision-making strategies',
      'Goal setting and developing daily routines'
    ],
    eligibility: 'Requires allocation under Capacity Building - Development of Life Skills.',
    faqs: [
      {
        question: 'Can money management skills be taught directly?',
        answer: 'Yes, we assist with practical steps like basic budgeting, understanding change, and digital banking applications safely.'
      }
    ],
    gallery: []
  },
  {
    id: 'supported-independent-living-mta-sta-sda-sil',
    title: 'Supported Independent Living -SDA, SIL',
    description: 'Tailored accommodation arrangements designed to help participants live as independently as possible.',
    icon: FaUniversalAccess,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782189588/ChatGPT_Image_Jun_23_2026_10_09_28_AM_cgehpp.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1782189588/ChatGPT_Image_Jun_23_2026_10_09_28_AM_cgehpp.png',
    fullDescription: `Our Supported Independent Living (SIL) services are designed to help participants live as independently as possible in a safe, comfortable, and supportive environment. We offer a variety of tailored living solutions depending on the level and duration of support needed. Our caring team ensures each living arrangement is safe, empowering, and suited to the participant's preferences and NDIS goals. Whether it's short-term or long-term, we support individuals to thrive in a setting that feels like home.`,
    benefits: [
      'Highly custom, accessible modern living spaces',
      'Full transitions handled smoothly from medical centers',
      'Around-the-clock emergency staff availability profiles'
    ],
    supportFeatures: [
      'SIL (Supported Independent Living): Ongoing help with daily activities such as personal care, cooking, and cleaning in a shared or individual home.',
      'STA (Short-Term Accommodation): Temporary stays for respite, skill-building, or transition needs.'
    ],
    eligibility: 'Requires direct structural approval for SIL/SDA/MTA/STA parameters via NDIS plans.',
    faqs: [
      {
        question: 'What is the maximum limit for MTA housing?',
        answer: 'Medium-Term Accommodation usually covers standard periods up to 90 days while permanent spaces solidify.'
      }
    ],
    gallery: []
  },
  {
    id: 'my-plan-manager',
    title: 'Plan Manager',
    description: 'Expert NDIS Plan Management to help you get the most out of your funding with zero stress.',
    icon: FaFileInvoiceDollar,
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1791274183/Compassionate_Caregiver_Connection_ruoacj.png',
    bannerImage: 'https://res.cloudinary.com/defqgygsf/image/upload/v1791274183/Compassionate_Caregiver_Connection_ruoacj.png',
    fullDescription: `Navigating the NDIS and managing your funding can be complicated and time-consuming. We step in to take the burden off your shoulders. With our dedicated plan management services, you receive industry-leading fraud protection, rapid invoice payments, and an intuitive online dashboard to track your funds. We simplify the financial side of your NDIS plan so you can focus entirely on achieving your goals and living your best life.`,
    benefits: [
      'Stay on top of your NDIS budget with ease',
      'Hassle-free coordination with your service providers',
      'We handle all communication with the NDIA regarding your claims',
      'Rapid and reliable payment of your invoices',
      'Clear, up-to-date reporting on your financial status'
    ],
    supportFeatures: [
      'Advanced security to protect your funds',
      'Quick turnaround times for invoice processing',
      'Personalised advice from NDIS specialists',
      'Easy-to-navigate digital tracking portal',
      'Real-time visibility into your budget balance'
    ],
    eligibility: 'Open to all NDIS participants who have "Improved Life Choices" (Plan Management) funded in their plan.',
    faqs: [
      {
        question: 'How can I add plan management to my NDIS plan?',
        answer: 'If you do not currently have funding allocated for a plan manager, simply inform your NDIA planner or Local Area Coordinator that you would like a plan manager to assist you.'
      },
      {
        question: 'Will I have to pay anything out of pocket?',
        answer: 'No, there are no out-of-pocket costs for you. Our fees are covered entirely by the NDIS if plan management is included in your plan.'
      }
    ],
    gallery: []
  }
];

export const faqData = [
  {
    question: 'What is the NDIS?',
    answer: 'The National Disability Insurance Scheme (NDIS) is a healthcare program initiated by the Australian government for Australians with a disability. It provides funding directly to individuals so they can choose the support they need.',
  },
  {
    question: 'How do I know if I am eligible for your services?',
    answer: 'If you are an NDIS participant with an approved plan, you are likely eligible for our services. Contact us for a free consultation to discuss your specific needs and how we can support you.',
  },
  {
    question: 'Can I choose my own support workers?',
    answer: 'Yes, we believe in matching you with support workers who share your interests and meet your specific needs. We involve you in the selection process to ensure a good fit.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We provide disability support services across the greater metropolitan area. Please contact us to find out if we have support workers available in your specific suburb.',
  },
  {
    question: 'How quickly can I start receiving support?',
    answer: 'Once we have reviewed your NDIS plan and discussed your needs, we can typically commence services within 1-2 weeks, depending on the specific support required and worker availability.',
  },
];
