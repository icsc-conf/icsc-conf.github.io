export const tracks = [
  "Digital and Computational Demography",
  "Social applications of Large Language Models",
  "Large-scale social media analytics and intelligence",
  "Digital inclusion in the Global South",
  "The Science of (Open) Science",
  "Applied social computing applications in diverse areas such as health and finance"
];

export const deadlines = [
  { label: "Paper Submission", date: "23:59 BST on June 1st, 2026" },
  { label: "Notification", date: "June 22nd, 2026" },
  { label: "In-Person Registration", date: "Closed 7th August 2026" },
  { label: "Online Registration", date: "Closes 1st September 2026" },
  { label: "Camera Ready", date: "August 17th, 2026" },
  { label: "Pre-Conference Workshop", date: "September 2nd, 2026" },
  { label: "Conference", date: "September 3rd-4th, 2026" }
];

export type WorkshopScheduleItem =
  | {
      type: "session";
      time: string;
      title: string;
      duration: string;
      leader: string;
      href: string;
    }
  | {
      type: "break";
      time: string;
      title: string;
    };

export const preConferenceWorkshopSchedule: WorkshopScheduleItem[] = [
  {
    type: "break",
    time: "8:30–9am",
    title: "Workshop registration in the foyer outside the lecture hall"
  },
  {
    type: "session",
    time: "9am–1pm",
    title: "Transformer Architectures",
    duration: "4 hours",
    leader: "Germans Savcisens",
    href: "https://savcisens.com/"
  },
  {
    type: "break",
    time: "1–2pm",
    title: "Lunch break"
  },
  {
    type: "session",
    time: "2–3pm",
    title: "Non-visual data science and accessibility of scientific research outputs",
    duration: "1 hour",
    leader: "Jan Meyerhoff-Liang",
    href: "https://www.linkedin.com/in/jan-meyerhoff-liang-97999a170/?skipRedirect=true&originalSubdomain=ie"
  },
  {
    type: "session",
    time: "3–4pm",
    title: "Sequence Analysis",
    duration: "1 hour",
    leader: "Yuqi Liang",
    href: "https://www.yuqi-liang.tech/"
  },
  {
    type: "break",
    time: "4–4:15pm",
    title: "Break"
  },
  {
    type: "session",
    time: "4:15–5:15pm",
    title: "Scientometrics",
    duration: "1 hour",
    leader: "Charlie Rahal",
    href: "http://crahal.com/"
  },
  {
    type: "session",
    time: "5:15–6:15pm",
    title: "Multiverse Analysis",
    duration: "1 hour",
    leader: "Daniel Valdenegro",
    href: "http://robustipy.github.io/"
  }
];

export const posterPresentations = [
  {
    title: "Taking Out the Human Factor: Comparing Algorithmic Profiling Against Human Baseline",
    presenter: "Max Kunaschk",
    href: "https://openreview.net/forum?id=hoSsOOFhnI"
  },
  {
    title: "The relationship between social order and crime in Nottingham, England",
    presenter: "Fanqi Zeng",
    href: "https://openreview.net/forum?id=a7K7nqfq31"
  },
  {
    title: "Rethinking Parental Involvement in Disadvantaged Families: The Importance of Invitations",
    presenter: "Xiaohang Feng",
    href: "https://openreview.net/forum?id=69WDUfTGxr"
  },
  {
    title: "Social Event Prediction via Temporal Knowledge Graph Learning",
    presenter: "Sanglu Lu, Wentao Shi and Wenzhong Li",
    href: "https://openreview.net/forum?id=3Dw7vPMhRy"
  },
  {
    title:
      "The Gendered Linguistic Geometry of Everyday Spaces in American English Discourse, 1900–2009: Domain-Conditional Feminization and the Asymmetric Emergence of Private Vocabulary",
    presenter: "Wei Zhuang",
    href: "https://openreview.net/forum?id=9o4QvesEIe"
  },
  {
    title: "Simulated Contact, Real Empathy: Reducing Prejudice through Role-Play with AI Personas",
    presenter: "Chris Wenzhong Cai",
    href: "https://openreview.net/forum?id=dWrJ4bqiIM"
  },
  {
    title: "Conversational Interventions Against Misinformation: Effects on Belief Change and Sharing Behavior",
    presenter: "Basak Bozkurt",
    href: "https://openreview.net/forum?id=HVtAZVyHuN"
  },
  {
    title: "Scholars like any other? An inquiry into productivity and citations in the field of contemporary China studies",
    presenter: "Xiaoguang Fan",
    href: "https://openreview.net/forum?id=w1bUeBlZp3"
  },
  {
    title: "Promotional Modifiers and Reviewer Attention: A Paired Noun-Level Analysis",
    presenter: "Huilian Qiu",
    href: "https://openreview.net/forum?id=PdFzNvMCLI"
  },
  {
    title: "Skill Endowments and Status Formation in LLM Agent Networks",
    presenter: "Yuanyi Zhen",
    href: "https://openreview.net/forum?id=EqRcQEjqdK"
  },
  {
    title:
      "Ideological Divergence in UK Political News Across Election Periods and Political Crises (2015–2024): A Computational Topic Modelling Study",
    presenter: "Iola Agbalaya-Mason",
    href: "https://openreview.net/forum?id=i2a7X7ikva"
  },
  {
    title:
      "Making Low-Visibility Policies Discoverable: A Document-Embedding Approach to Inclusive Cross-Boundary Policy Comparison",
    presenter: "Chenxi Lin",
    href: "https://openreview.net/forum?id=Ndk4RFNtsL"
  },
  {
    title: "Accessible Jupyter Notebook Output (AJNBO): A VS Code Extension for Screen-Reader-Based Review",
    presenter: "Yuqi Liang and Jan Meyerhoff-Liang",
    href: "https://openreview.net/forum?id=ah8JbGih1c"
  },
  {
    title: "How AIGC Influences Audience Engagement in Chinese Museum Videos on Douyin?",
    presenter: "Bo Zhao",
    href: "https://openreview.net/forum?id=Ym5mjvCQtV"
  },
  {
    title: "How Hostile Tone Shapes Science Communication",
    presenter: "Miriam Schirmer",
    href: "https://openreview.net/forum?id=JHksbDe6pt"
  },
  {
    title: "Who Meets Whom: Income Stratification in Urban Co-Presence",
    presenter: "Chen Zhong",
    href: "https://openreview.net/forum?id=nBkYUy5Yiy"
  },
  {
    title: "Beyond Localisation: Cultural Defaults and User Agency in Conversational AI",
    presenter: "Yao Xiao",
    href: "https://openreview.net/forum?id=3gEQa3lUcx"
  },
  {
    title: "Using language models to measure the demand-based wage gap",
    presenter: "Elodie Chervin",
    href: "https://openreview.net/forum?id=yCvfcQ1WC5"
  }
];

export const latestNews = [
  {
    title: "Online registration open until 1st September",
    bodyBefore:
      "In-person registration for ICSC 2026 closed on 7th August 2026. Online registration remains open until 1st September 2026.",
    bodyAfter: ""
  },
  {
    title: "Transformer workshop lead confirmed",
    bodyBefore: "We are super excited to announce that ",
    link: {
      label: "Germans Savcisens",
      href: "https://savcisens.com/"
    },
    bodyAfter:
      " has agreed to lead the main part of our pre-conference workshop on applications of transformer architecture for social science and life course research."
  },
  {
    title: "Bursaries have now been allocated",
    bodyBefore:
      "All ICSC 2026 bursaries have now been allocated. We are no longer accepting bursary applications.",
    bodyAfter: ""
  },
  {
    title: "Call for Papers deadline extended",
    bodyBefore:
      "The Call for Papers deadline has been extended. The new deadline is set to be 1st June 2026, at 23:59 BST.",
    bodyAfter: ""
  }
];

export const researchTopics = [
  "Advancements in methods for the broadly defined field of social computing",
  "Online social network analysis, mining, and modeling",
  "Large-scale social media analytics and intelligence",
  "Trust, privacy, security, and fairness in social systems",
  "Human-computer interaction across various domains",
  "Applied social computing applications in diverse areas such as health and finance",
  "Governance, policy, ethical, and legal challenges of emergent social technologies"
];

export const snapshotItems = [
  { label: "Host City", value: "Oxford, UK" },
  { label: "Venue", value: "Nuffield College, University of Oxford" },
  { label: "Conference Dates", value: "September 2nd-4th 2026" },
  { label: "Format", value: "In-person attendance" },
  {
    label: "Proceedings",
    value:
      "A selection of outstanding papers will be fast-tracked to the ACM Transactions on Social Computing or the Journal of Social Computing. The conference proceedings and the above journals are all indexed by Ei Compendex."
  }
];

export const quickActions = [
  {
    href: "#announcements",
    title: "Announcements",
    text: "Read the latest conference updates and announcements."
  },
  {
    href: "#registration",
    title: "Registration",
    text: "In-person registration has closed; online registration remains open until 1st September."
  },
  {
    href: "call.html",
    title: "Call for Papers",
    text: "Review the paper submission scope, guidelines, and dates."
  },
  {
    href: "oc.html",
    title: "Committee",
    text: "See the organizing and program committee for ICSC 2026."
  },
  {
    href: "sponsors.html",
    title: "Information for Sponsors",
    text: "View sponsorship information for ICSC 2026."
  },
  {
    href: "schedule.html",
    title: "Schedule",
    text: "View information about the ICSC 2026 conference schedule."
  }
];

export const focusAreas = [
  "Digital and Computational Demography",
  "Social networks and social behavior in online and offline contexts",
  "Big data analytics informed by social science theory",
  "Digital inclusion and the Global South",
  "Interdisciplinary collaboration across computational and social domains",
];

export const history = [
  {
    year: "2016",
    title: "Conference on Online Social Behaviour",
    date: "June 10-11, 2016",
    venue: "UChicago Center in Beijing, China",
    href: "past_conferences/2016/index.html"
  },
  {
    year: "2017",
    title: "Conference on Online Social Behaviour",
    date: "May 30-June 4, 2017",
    venue: "Beijing International Convention Center, Beijing, China",
    href: "past_conferences/2017/index.html"
  },
  {
    year: "2018",
    title: "Conference on Online Social Behaviour",
    date: "November 3, 2018",
    venue: "Jin Chun Yuan Hotel, Beijing, China",
    href: "past_conferences/2018/index.html"
  },
  {
    year: "2019",
    title: "International Conference on Social Computing",
    date: "August 26-27, 2019",
    venue: "Tsinghua University, Beijing, China",
    href: "past_conferences/2019/index.html"
  },
  {
    year: "2020",
    title: "International Conference on Social Computing",
    date: "December 14-15, 2020",
    venue: "Hybrid (Beijing and online)",
    href: "past_conferences/2020/index.html"
  },
  {
    year: "2021",
    title: "International Conference on Social Computing",
    date: "December 10-11, 2021",
    venue: "Hybrid (Beijing and online)",
    href: "past_conferences/2021/index.html"
  },
  {
    year: "2022",
    title: "International Conference on Social Computing",
    date: "Canceled due to pandemic",
    venue: "No physical event",
    href: "../index.html"
  },
  {
    year: "2023",
    title: "International Conference on Social Computing",
    date: "September 2-3, 2023",
    venue: "Tsinghua University area, Beijing, China",
    href: "past_conferences/2023/index.html"
  },
  {
    year: "2024",
    title: "International Conference on Social Computing",
    date: "2024 edition",
    venue: "Hong Kong University of Science and Technology (Guangzhou), China",
    href: "past_conferences/2024/index.html"
  },
  {
    year: "2025",
    title: "International Conference on Social Computing",
    date: "December 12-13, 2025",
    venue: "Fudan University, Shanghai, China",
    href: "past_conferences/2025/index.html"
  }
];

export const organizingCommittee = [
  {
    title: "Steering Committee",
    members: [
      "Jar-Der Luo, Tsinghua University",
      "James Evans, University of Chicago",
      "Xiaoming Fu, University of Göttingen",
      "Charles Rahal, University of Oxford",
      "Ridhi Kashyap, University of Oxford"
    ]
  },
  {
    title: "Senior TPC Members",
    members: [
      "Charles Rahal, University of Oxford",
      "Daniel Romero, University of Michigan",
      "Adel Daoud, Institute of Analytical Sociology at Linköping University",
      "Mengying Zhou, Shanghai University of Finance and Economics"
    ]
  },
  {
    title: "TPC Members",
    members: [
      "Jiani Yan, University of Oxford",
      "Mingyue Liu, University of Oxford",
      "Daniel Valdenegro Ibarra, University of Oxford",
      "Aparna Ananthasubramaniam, University of Michigan",
      "Bo Zhao, Xi'an Jiaotong-Liverpool University",
      "Miriam Schirmer, Harvard Business School",
      "Wei Ai, University of Maryland, College Park",
      "Hao Peng, City University of Hong Kong",
      "Savvas Zannettou, TU Delft",
      "Henry Kudzanai Dambanemuya, The University of Chicago",
      "Harshith N Srivatsa, Wood Group",
      "Pu Zhang, Hong Kong University of Science and Technology (Guangzhou)",
      "Bo Liu, Southeast University",
      "Aleksandar Stanković, University of Novi Sad",
      "Roy Ka-Wei Lee, Singapore University of Technology and Design",
      "Wenzhong Li, Nanjing University",
      "Zixi Chen, NYU Shanghai",
      "Yong-Feng Ge, Victoria University",
      "Hua Wang, Victoria University",
      "Xiu-Xiu Zhan, Hangzhou Normal University",
      "Shihan Lin, University of Michigan",
      "Fei Hao, Shaanxi Normal University",
      "Xuejie Ding, The University of Hong Kong",
      "Yang Chen, Fudan University",
      "Huilian Sophie Qiu, Northwestern University",
      "Zike Zhang, Zhejiang University"
    ]
  },
  {
    title: "Poster Co-Chairs",
    members: ["Ava Keeling, University of Oxford", "Daniel Valdenegro, University of Oxford"]
  },
  {
    title: "Financial Chairs",
    members: [
      "Yuqi Liang, University of Oxford",
      "Xuejie Ding, The University of Hong Kong",
      "Ava Keeling, University of Oxford",
      "Jan Meyerhoff, Leibniz Universität Hannover"
    ]
  },
  {
    title: "Registration Chair",
    members: ["Aarushi Sharma, University of St. Andrews"]
  },
  {
    title: "Publicity Co-Chairs",
    members: [
      "Chenxi Li, University of Oxford",
      "Ekaterina Degtiareva, University of Oxford",
      "Anda-Raluca Epure, University of Oxford",
      "Zerui Tian, University of Oxford",
      "Panzirui Zhang, Sichuan University (SCU)"
    ]
  },
  {
    title: "Website Chairs",
    members: [
      "Mengying Zhou, Shanghai University of Finance and Economics",
      "Bo Zhao, Xi'an Jiaotong-Liverpool University",
      "Anda-Raluca Epure, University of Oxford"
    ]
  },
  {
    title: "Workshops Chair",
    members: ["Zerui Tian, University of Oxford"]
  },
  {
    title: "Accessibility Chair",
    members: ["Jan Meyerhoff, Leibniz Universität Hannover"]
  },
  {
    title: "Proceedings Chair",
    members: ["Mengying Zhou, Shanghai University of Finance and Economics"]
  },
  {
    title: "Liaison Co-Chairs",
    members: [
      "Daniel Valdenegro, University of Oxford",
      "Jiani Yan, University of Oxford",
      "Linda Li, London School of Economics and Political Science",
      "Ava Keeling, University of Oxford",
      "Anda-Raluca Epure, University of Oxford"
    ]
  },
  {
    title: "Swag Chair",
    members: ["Luyin Zhang, Princeton University"]
  },
];

export const programCommittee = [
  "Charles Rahal, University of Oxford",
  "Daniel Romero, University of Michigan",
  "Adel Daoud, Linköping University",
  "Mengying Zhou, Shanghai University of Finance and Economics"
];

export const paperSubmissionGuidelines = [
  "Authors are encouraged to submit papers addressing state-of-the-art research and development in all aspects of social computing.",
  "Innovative, early-stage ideas, proofs-of-concept, and preliminary results are welcome.",
  "We welcome submissions in two formats:"
];
