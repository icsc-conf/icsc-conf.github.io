export type ProgrammeEntry = {
  time: string;
  title: string;
  presenters?: string;
  room?: string;
  speakerOnline?: boolean;
  onlineAudience?: boolean;
  note?: string;
  kind?: "talk" | "break" | "general";
};

export type ProgrammeSession = {
  id: string;
  title: string;
  room?: string;
  chair?: string;
  onlineAudience?: boolean;
  notice?: string;
  entries: ProgrammeEntry[];
};

export type ProgrammePeriod = {
  id: string;
  title: string;
  sessions: ProgrammeSession[];
};

export type ProgrammeDay = {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  description: string;
  periods: ProgrammePeriod[];
};

export const conferenceProgramme: ProgrammeDay[] = [
  {
    id: "thursday-3-september",
    date: "2026-09-03",
    dateLabel: "Thursday, 3 September 2026",
    title: "Conference day one",
    description: "Keynotes, special sessions, parallel research tracks, posters and the conference dinner.",
    periods: [
      {
        id: "thursday-morning",
        title: "Morning",
        sessions: [
          {
            id: "thursday-arrivals",
            title: "Arrivals and setup",
            entries: [
              {
                time: "09:00–10:00",
                title: "Registration",
                room: "Main Lecture Theatre Foyer",
                kind: "general"
              },
              {
                time: "09:00–10:00",
                title: "Poster setup",
                room: "Junior Common Room",
                kind: "general"
              }
            ]
          },
          {
            id: "thursday-keynotes",
            title: "Welcome and opening keynotes",
            room: "Main Lecture Theatre",
            chair: "Charles Rahal",
            onlineAudience: true,
            entries: [
              { time: "09:55–10:00", title: "Welcome to day one of ICSC 2026", presenters: "Charles Rahal" },
              { time: "10:00–10:20", title: "Title to be confirmed", presenters: "James Evans" },
              { time: "10:20–10:40", title: "Title to be confirmed", presenters: "Jar-Der Luo" },
              {
                time: "10:40–11:00",
                title: "Understanding the Behavior of LLM-Driven Social Agents",
                presenters: "Xiaoming Fu"
              },
              { time: "11:00–11:20", title: "Title to be confirmed", presenters: "Yang Chen" },
              {
                time: "11:20–11:40",
                title: "Social Event Prediction with Context-Adaptive Temporal Knowledge Graph Reasoning",
                presenters: "Wenzhong Li"
              },
              {
                time: "12:05–12:25",
                title: "From Analysis to Simulation: Exploring Public Opinion, AIGC-Mediated Engagement, and Emergent Social Dynamics",
                presenters: "Bo Zhao",
                note: "Sponsored keynote talk from East China University of Science and Technology"
              }
            ]
          },
          {
            id: "thursday-morning-break",
            title: "Morning break",
            entries: [
              {
                time: "11:40–12:05",
                title: "Break",
                room: "Main Lecture Theatre Foyer",
                kind: "break"
              }
            ]
          },
          {
            id: "digital-demography-special-session",
            title: "Digital and Computational Demography: Special Session",
            room: "Main Lecture Theatre",
            chair: "Ridhi Kashyap",
            onlineAudience: true,
            entries: [
              {
                time: "11:45–12:00",
                title: "Platonic Representations for Poverty Mapping: Unified Vision-Language Codes or Agent-Induced Novelty?",
                presenters: "Satiyabooshan Murugaboopathy"
              },
              {
                time: "12:00–12:15",
                title: "The Shrinking Globe: Structural Evolution and Globalization of the International Migration Network (1990–2024)",
                presenters: "Carlos Sarraute"
              },
              {
                time: "12:15–12:30",
                title: "Forced Migration and Information-Seeking Behavior on Wikipedia: Insights from the Ukrainian Refugee Crisis",
                presenters: "Carolina Coimbra"
              },
              {
                time: "12:30–12:45",
                title: "Auditing Population Mapping Infrastructures in Four Global South Cities",
                note: "Presenter to be confirmed"
              },
              {
                time: "12:45–13:00",
                title: "Who Benefits and Who Gets Replaced? Demographic Patterns of Generative AI Exposure in the United States",
                presenters: "Riccardo Omenti"
              },
              {
                time: "13:00–13:15",
                title: "Modelling Kinship Networks using Analytical and Microsimulation Approaches",
                presenters: "Liliana P. Calderón-Bernal"
              }
            ]
          },
          {
            id: "thursday-lunch",
            title: "Lunch and posters",
            entries: [
              {
                time: "13:15–14:30",
                title: "Lunch and poster displays",
                room: "Junior Common Room",
                kind: "general"
              }
            ]
          }
        ]
      },
      {
        id: "thursday-afternoon",
        title: "Afternoon — parallel sessions",
        sessions: [
          {
            id: "session-1",
            title: "Session 1 — Crime, Space, Mobility, and Urban Perception",
            room: "Main Lecture Theatre",
            chair: "Charles Rahal",
            onlineAudience: true,
            entries: [
              {
                time: "14:30–14:45",
                title: "The relationship between social order and crime in Nottingham, England",
                presenters: "Fanqi Zeng"
              },
              {
                time: "14:45–15:00",
                title: "Socio-Spatial Gradients as Contested Boundaries: Nonlinear, Asymmetric, and Spatially Differentiated Effects on Property Crime",
                presenters: "Yiwei Xia"
              },
              {
                time: "15:00–15:15",
                title: "Towards Inclusive Mobility Modeling: Characterizing and Evaluating Elderly Trajectory Patterns in Urban Systems",
                presenters: "Mengying Zhou",
                speakerOnline: true
              },
              {
                time: "15:15–15:30",
                title: "No View from Nowhere: Residential Calibration and the Aggregation of Urban Perception",
                presenters: "Micol Morellini"
              }
            ]
          },
          {
            id: "session-2",
            title: "Session 2 — Sequence Analysis and Life-Course Dynamics",
            room: "Butler Room",
            chair: "Daniel Romero",
            onlineAudience: false,
            entries: [
              {
                time: "14:30–14:45",
                title: "Embedding-based Measures of Life-Course Volatility and Disorganization in Multidimensional Trajectories: the Case of the 1970 British Cohort Study",
                presenters: "Zerui Tian"
              },
              {
                time: "14:45–15:00",
                title: "Representation Learning and Clustering for Multi-Domain Sequence Analysis: An Application to Dutch Register Data",
                presenters: "Maximilian Reichert"
              },
              {
                time: "15:00–15:15",
                title: "Measuring Divergence and Convergence in Sequence Analysis: A Spell-Based Extension of Longest Common Prefixes",
                presenters: "Yuqi Liang and Jan Meyerhoff-Liang"
              },
              {
                time: "15:15–15:30",
                title: "MD-CLARA: Scalable Medoid-Based Clustering for Multidomain Sequence Analysis",
                presenters: "Yuqi Liang and Jan Meyerhoff-Liang"
              }
            ]
          },
          {
            id: "session-3",
            title: "Session 3 — Political Discourse, Framing, and Computational Text Analysis",
            room: "Chester Room",
            chair: "Jiani Yan",
            onlineAudience: false,
            entries: [
              {
                time: "14:30–14:45",
                title: "I disagree, because: attributional divides in online redistributive discourse",
                presenters: "Yan Wang"
              },
              {
                time: "14:45–15:00",
                title: "Mapping Strategic Narratives in Chinese State Media: A Sentence-BERT Analysis of Russia–Ukraine and Israel–Palestine War Coverage",
                presenters: "Yuhan Deng"
              },
              {
                time: "15:00–15:15",
                title: "Stance and Framing: Ideological Bias in Generative AI on China-Related Topics",
                presenters: "Jianglin Xiang"
              },
              {
                time: "15:15–15:30",
                title: "Inferring Scientific Continuation Behavior from Administrative Funding Data",
                presenters: "Xueyan Han"
              }
            ]
          },
          {
            id: "thursday-afternoon-break",
            title: "Afternoon break",
            entries: [
              { time: "15:30–16:00", title: "Break", room: "Junior Common Room", kind: "break" }
            ]
          },
          {
            id: "session-4",
            title: "Session 4 — Computational Science of Science",
            room: "Main Lecture Theatre",
            chair: "Charles Rahal",
            onlineAudience: true,
            entries: [
              {
                time: "16:00–16:15",
                title: "The Division of Labor Paradox: How Funding Shapes Team Organization and Scientific Innovation",
                presenters: "Meiling Li"
              },
              {
                time: "16:15–16:30",
                title: "Whose Voice Counts? Bridging the Digital Consultation Gap with Multilingual NLP and Synthetic Citizen Population",
                presenters: "Ishaan Saxena",
                speakerOnline: true
              },
              {
                time: "16:30–16:45",
                title: "Absence of Evidence Is Not Evidence of Absence: Text-Decidability in Automated Open-Science Assessment",
                presenters: "Juuso Repo"
              },
              {
                time: "16:45–17:00",
                title: "Minibinder Lab: The Reliability Gap of Agents for Designing High Quality Protein Binders",
                presenters: "Anda-Raluca Epure"
              },
              {
                time: "17:00–17:15",
                title: "Are LLMs Cultural Amplifiers? Replicating Human Mate Preferences with Silicon Samples Across Six Countries",
                presenters: "Yuqian Huang",
                speakerOnline: true
              }
            ]
          },
          {
            id: "session-5",
            title: "Session 5 — LLMs as Social Simulators and Measurement Instruments",
            room: "Butler Room",
            chair: "Daniel Romero",
            onlineAudience: false,
            entries: [
              {
                time: "16:00–16:15",
                title: "Aligned Items, Broken Inferences: When to Trust Large Language Models in Social Survey Simulation",
                presenters: "Zhuoren Jiang and Chenxi Lin"
              },
              {
                time: "16:15–16:30",
                title: "Are LLMs Reliable Judges? Evidence from Subjective, High-Stakes Assessment",
                presenters: "Caiyun Wang and Yuanyi Zhen"
              },
              {
                time: "16:30–16:45",
                title: "When the Same Insult Targets a Woman or a Man: Minimal-Pair Evidence of Human–LLM (Dis)Agreement in Chinese",
                presenters: "Xuan Bao"
              },
              {
                time: "16:45–17:00",
                title: "A Study on Adverse Childhood Experiences and Subjective Well-being of Chinese Adolescents Based on AI-Simulated Samples: The Mediating Role of Belongingness and the Moderating Role of Social Support",
                presenters: "Jiahao Zhang, Wenbin Du and Zheng Zhou"
              }
            ]
          },
          {
            id: "session-6",
            title: "Session 6 — AI and Inequality in Work and Science",
            room: "Chester Room",
            chair: "Jiani Yan",
            entries: [
              { time: "16:00–16:15", title: "Where Are the Limits of Prediction?", presenters: "Xiang Wan" },
              {
                time: "16:15–16:30",
                title: "Spatial Structure and Evolution of AI Labor Demand in China: Evidence from Job Advertisements",
                presenters: "Yuanxin Li"
              },
              {
                time: "16:30–16:45",
                title: "AI Widens the Gap: How Career Stage Shapes the Benefits of AI Adoption in Science",
                presenters: "Jiandong Zhang"
              },
              {
                time: "16:45–17:00",
                title: "Women Experience a Compound Disadvantage When Adopting Artificial Intelligence in Scientific Research",
                presenters: "Xitong Li"
              },
              {
                time: "17:00–17:15",
                title: "The uneven embedding of AI in scientific workflows: Technological generations and the restructuring of scientific work",
                presenters: "Rong Ni",
                onlineAudience: true
              }
            ]
          },
          {
            id: "thursday-transition-break",
            title: "Break before the evening programme",
            entries: [
              { time: "17:15–17:45", title: "Break — no refreshments provided", kind: "break" }
            ]
          }
        ]
      },
      {
        id: "thursday-evening",
        title: "Evening",
        sessions: [
          {
            id: "thursday-evening-keynotes",
            title: "Evening keynotes",
            room: "Main Lecture Theatre",
            chair: "Charles Rahal",
            onlineAudience: true,
            entries: [
              {
                time: "17:45–18:00",
                title: "Who Expects Technology to Replace Human Work? Positional Dependence and Beliefs about AI in China’s Labor Market",
                presenters: "Xuejie Ding",
                speakerOnline: true
              },
              {
                time: "18:00–18:30",
                title: "Goodthink: The New Science of Collective Intelligence",
                presenters: "Damon Centola",
                speakerOnline: true
              }
            ]
          },
          {
            id: "thursday-posters-dinner",
            title: "Posters and conference dinner",
            entries: [
              { time: "18:30–19:00", title: "Posters", room: "Room to be confirmed", kind: "general" },
              { time: "19:00–21:00", title: "Conference dinner", room: "Room to be confirmed", kind: "general" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "friday-4-september",
    date: "2026-09-04",
    dateLabel: "Friday, 4 September 2026",
    title: "Conference day two",
    description: "Keynotes, awards, parallel research tracks, posters and the conference close.",
    periods: [
      {
        id: "friday-morning",
        title: "Morning",
        sessions: [
          {
            id: "friday-arrivals",
            title: "Arrivals",
            entries: [
              {
                time: "09:00–10:00",
                title: "Late registration",
                room: "Main Lecture Theatre Foyer",
                kind: "general"
              },
              {
                time: "09:55–10:00",
                title: "Welcome to day two of ICSC 2026",
                room: "Main Lecture Theatre",
                presenters: "Charles Rahal",
                onlineAudience: true
              }
            ]
          },
          {
            id: "friday-keynotes",
            title: "Morning keynotes",
            room: "Main Lecture Theatre",
            chair: "Charles Rahal",
            onlineAudience: true,
            entries: [
              {
                time: "10:00–10:20",
                title: "Algorithmic Realism: Data Science Practices to Promote Social Justice",
                presenters: "Ben Green"
              },
              {
                time: "10:20–10:40",
                title: "Sequence analysis of partnership formation: A case of Japan",
                presenters: "Jun Kobayashi"
              },
              { time: "10:40–11:00", title: "Title to be confirmed", presenters: "Adel Daoud" },
              {
                time: "11:00–11:20",
                title: "Measuring and Utilizing Temporal Network Dissimilarity",
                presenters: "Xiuxiu Zhan"
              },
              { time: "11:45–12:00", title: "Title to be confirmed", presenters: "Miao Chun Yan" }
            ]
          },
          {
            id: "friday-morning-break",
            title: "Morning break",
            entries: [
              {
                time: "11:20–11:45",
                title: "Break",
                room: "Main Lecture Theatre Foyer",
                kind: "break"
              }
            ]
          },
          {
            id: "video-games-education",
            title: "Special Session — Video Games and Education",
            room: "Main Lecture Theatre",
            chair: "Huilian Sophie Qiu",
            onlineAudience: true,
            entries: [
              {
                time: "12:00–12:10",
                title: "Institutionalizing Game Preservation and Game Literacy Education: The Practices of Homo Ludens Archive",
                presenters: "Pin Lin"
              },
              { time: "12:10–12:20", title: "What we learn from playing video games", presenters: "Amanda Curtis" },
              {
                time: "12:20–12:30",
                title: "Why Educational Games Fail—and How AI Could Change That",
                presenters: "Jonathan Chen",
                speakerOnline: true
              },
              { time: "12:30–12:45", title: "Panel discussion", presenters: "Huilian Sophie Qiu" }
            ]
          },
          {
            id: "friday-online-talks",
            title: "Online talks",
            room: "Main Lecture Theatre",
            chair: "Yuqi Liang",
            onlineAudience: true,
            entries: [
              {
                time: "12:45–13:00",
                title: "Title to be confirmed",
                presenters: "Yoram Kalman",
                speakerOnline: true
              },
              {
                time: "13:00–13:15",
                title: "Measuring CI/CD Pipeline Health: From Build Metrics to Developer Productivity",
                presenters: "Sandeep Khandelwal",
                speakerOnline: true
              }
            ]
          },
          {
            id: "friday-awards",
            title: "Awards",
            room: "Main Lecture Theatre",
            onlineAudience: true,
            entries: [
              {
                time: "13:15–13:25",
                title: "ACM Transactions on Social Computing Awards",
                presenters: "Various presenters",
                note: "Chaired by Charles Rahal, Xiaoming Fu, Jar-Der Luo and James Evans"
              },
              { time: "13:25–13:35", title: "Journal of Social Computing Awards" },
              { time: "13:35–13:45", title: "ICSC Awards" }
            ]
          },
          {
            id: "friday-lunch",
            title: "Lunch and posters",
            entries: [
              {
                time: "13:45–14:30",
                title: "Lunch and poster displays",
                room: "Junior Common Room",
                kind: "general"
              }
            ]
          }
        ]
      },
      {
        id: "friday-afternoon",
        title: "Afternoon — parallel sessions",
        sessions: [
          {
            id: "session-7",
            title: "Session 7 — AI Governance, Norms, and Uncertainty",
            room: "Main Lecture Theatre",
            chair: "Ridhi Kashyap",
            onlineAudience: true,
            entries: [
              {
                time: "14:30–14:45",
                title: "Who Gets to Define Alignment? Stakeholder Contestation in Public Comments on the NIST Generative AI Risk Profile",
                presenters: "Ruoxi Li"
              },
              {
                time: "14:45–15:00",
                title: "Recursive Norm Refinement for Modern Slavery Risk Reasoning in Social LLM Systems",
                presenters: "Zijin Wu, Haley Yi and David Scott Lewis"
              },
              {
                time: "15:00–15:15",
                title: "Artificial Intelligence and Natural Uncertainty: A Taxonomy and a Primer",
                presenters: "Daniel Valdenegro"
              },
              {
                time: "15:15–15:30",
                title: "Algorithmic Stratification via Ranking: AI Hiring Systems and the Reproduction of Social Inequality",
                presenters: "Gabriel Pessanha"
              }
            ]
          },
          {
            id: "session-8",
            title: "Session 8 — Law, Platforms, and Information Governance",
            room: "Butler Room",
            chair: "Adel Daoud",
            onlineAudience: false,
            entries: [
              {
                time: "14:30–14:45",
                title: "Deepfakes at the Media–Law Boundary: A Multilingual Thematic Analysis of Platformed News Discourse",
                presenters: "Yidan Huang"
              },
              {
                time: "14:45–15:00",
                title: "Mapping Reviewable Discretion in Access-to-Information Laws: A Social Computing Framework for Multilingual Legal Text Measurement",
                presenters: "Shuaiyu Yang"
              },
              {
                time: "15:00–15:15",
                title: "Beyond the Home–Work Separation: A RAG-Based Analysis of U.S. Municipal Ordinances and Remote Work",
                presenters: "Chen Zhanghao"
              },
              {
                time: "15:15–15:30",
                title: "Decentralized Source Moderation at Scale: A Computational Analysis of Source Reliability Evaluation, Crowd Competence, and the Governance of Wikipedia’s Deprecated Sources List",
                presenters: "Stefanie Boss"
              }
            ]
          },
          {
            id: "session-9",
            title: "Session 9 — Networks, Communities, and Collective Dynamics",
            room: "Chester Room",
            chair: "Charles Rahal",
            onlineAudience: false,
            entries: [
              {
                time: "14:30–14:45",
                title: "Structural Evolution of the Python Dependency Network: Evidence from a Decade of Ecosystem Growth",
                presenters: "Carlos Sarraute"
              },
              {
                time: "14:45–15:00",
                title: "Collaboration and Conflict in the Redditverse: Longitudinal Network Dynamics in Protest Communities",
                presenters: "Janine Schröder"
              },
              {
                time: "15:00–15:15",
                title: "Generative Network Simulation: A Framework for Shock Propagation and Evolutionary Processes",
                presenters: "Chenfei Xie"
              },
              {
                time: "15:15–15:30",
                title: "BeerGameBench: An API-Mediated Protocol for Studying Agent Coordination Under Delayed Feedback",
                presenters: "Uku Sildoja and Innar Liiv"
              }
            ]
          },
          {
            id: "friday-afternoon-break",
            title: "Afternoon break",
            entries: [
              { time: "15:30–16:00", title: "Break", room: "Junior Common Room", kind: "break" }
            ]
          },
          {
            id: "session-10",
            title: "Session 10 — Digital and Computational Demography",
            room: "Main Lecture Theatre",
            chair: "Ridhi Kashyap",
            onlineAudience: true,
            entries: [
              {
                time: "16:00–16:15",
                title: "Global Migration of Professionals Disaggregated by Gender, Education, and Industry",
                presenters: "Carolina Coimbra"
              },
              {
                time: "16:15–16:30",
                title: "An LLM-Assisted Survey for Gendered Pathways and Attrition in Academic Careers",
                presenters: "Xinyi Zhao"
              },
              {
                time: "16:30–16:45",
                title: "Monitoring cross-border refugee flows from Sudan using digital trace data",
                presenters: "Jackson Mason-Mackay"
              },
              {
                time: "16:45–17:00",
                title: "Gender Gaps and Notability in the Wikipedia–AI Search Knowledge Pipeline",
                presenters: "Patrick Gildersleve"
              },
              {
                time: "17:00–17:15",
                title: "Age-disaggregated Subnational Patterns of Internet and Mobile Phone Adoption",
                presenters: "Michael Chong"
              }
            ]
          },
          {
            id: "session-11",
            title: "Session 11 — Digital Populations, Behaviour, and Social Classification",
            room: "Butler Room",
            chair: "Adel Daoud",
            onlineAudience: false,
            entries: [
              {
                time: "16:00–16:15",
                title: "Fine-grained Classification of A Million Life Trajectories from Wikipedia",
                presenters: "Haipeng Zhang"
              },
              {
                time: "16:15–16:30",
                title: "Perceived Documentation Status from Visual and Audio AI-Generated Cues: A Multimodal Conjoint Study",
                presenters: "Carolina Coimbra Vieira"
              },
              {
                time: "16:30–16:45",
                title: "National Media and Scholarly Contexts of Social Stratification in AI Literacy and Acceptance Across Europe",
                presenters: "Wei Zhuang"
              },
              {
                time: "16:45–17:00",
                title: "Beyond Retrieval: Incorporating Personality and Emotion into RAG-Based Conversational Agents",
                presenters: "Qiang Duan, Yang Chen and Xiaoming Fu"
              }
            ]
          },
          {
            id: "session-12",
            title: "Session 12 — Frontiers of Computational Social Science",
            room: "Chester Room",
            chair: "Charles Rahal",
            onlineAudience: false,
            entries: [
              {
                time: "16:00–16:15",
                title: "From Digital Traces to AI-Driven Inquiry: The Evolution of Computational Social Science (2009–2025)",
                presenters: "Jianxun Chu and Yuqi Zhu"
              },
              {
                time: "16:15–16:30",
                title: "The Deviation Carries the Computation: Causal Surgery on Geometric Representations in Language Models",
                presenters: "Aarushi Sharma"
              },
              { time: "16:30–16:45", title: "Title to be confirmed", presenters: "Mingyue Liu" },
              {
                time: "16:45–17:00",
                title: "Asymmetric Affective Polarization in Elite and Public Discourse: Event-Time Evidence from the Black Lives Matter Uprising",
                presenters: "Sylvia Dou"
              }
            ]
          }
        ]
      },
      {
        id: "friday-evening",
        title: "Evening",
        sessions: [
          {
            id: "friday-closing-keynotes",
            title: "Closing keynotes and conference close",
            room: "Main Lecture Theatre",
            chair: "Charles Rahal",
            onlineAudience: true,
            entries: [
              {
                time: "17:30–18:00",
                title: "The impact of generative AI on social media: an experimental study",
                presenters: "Daniel Romero"
              },
              { time: "18:00–18:30", title: "Title to be confirmed", presenters: "Germans Savcisens" },
              { time: "18:30", title: "Conference close", presenters: "Charles Rahal", kind: "general" }
            ]
          }
        ]
      }
    ]
  }
];
