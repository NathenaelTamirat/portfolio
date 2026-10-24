import { LanguageCode } from "./languages";

export type TranslationSchema = {
  nav: {
    skipToContent: string;
    toggleTheme: string;
    selectLanguage: string;
  };
  hero: {
    availableForWork: string;
    role: string;
    bioP1: string;
    bioP2: string;
  };
  experience: {
    sectionTitle: string;
    viewProof: string;
    visitLewi: string;
    items: {
      role: string;
      company: string;
      locationOrType: string;
      duration: string;
      description: string;
    }[];
  };
  events: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      title: string;
      subtitle: string;
      role: string;
      description: string;
    }[];
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    categories: {
      programmingLanguages: string;
      frontend: string;
      backendApis: string;
      deployment: string;
      dataInfrastructure: string;
      spokenLanguages: string;
    };
    spokenAmharic: {
      name: string;
      proficiency: string;
      subtitle: string;
    };
    spokenEnglish: {
      name: string;
      proficiency: string;
      subtitle: string;
    };
  };
  projects: {
    sectionTitle: string;
    visitProject: string;
    items: {
      title: string;
      tag: string;
      description: string;
    }[];
  };
  certificates: {
    sectionTitle: string;
    sectionSubtitle: string;
    prev: string;
    next: string;
    items: {
      title: string;
      subtitle: string;
    }[];
  };
  connect: {
    sectionTitle: string;
    heading: string;
    description: string;
    getInTouch: string;
    telegram: string;
    linkedin: string;
  };
  footer: {
    rights: string;
    craftedWith: string;
  };
};

export const translations: Record<LanguageCode, TranslationSchema> = {
  en: {
    nav: {
      skipToContent: "Skip to content",
      toggleTheme: "Toggle theme",
      selectLanguage: "Change language",
    },
    hero: {
      availableForWork: "Available for work",
      role: "Software Engineer & Full-Stack Developer",
      bioP1: "Hello, I’m Nathenael Tamirat. I’m passionate about creating software that turns ideas into practical solutions. My journey into development began in 2018 when I was introduced to HTML, CSS, and JavaScript at school. What started as curiosity about how websites work gradually grew into a deeper interest in software engineering.",
      bioP2: "Today, I’m focused on building my skills, developing real-world projects, and exploring ways technology can solve everyday problems. I’m currently working toward founding my own software company while working on products, collaborating with others, and continuously improving as a developer.",
    },
    experience: {
      sectionTitle: "Experience",
      viewProof: "View Work Proof",
      visitLewi: "Visit Lewi Dental System",
      items: [
        {
          role: "Freelance Software Developer",
          company: "Self-employed",
          locationOrType: "Hybrid",
          duration: "Aug 2026 — Present · 3 mos",
          description: "Developed a comprehensive dental clinic management system for Lewi Speciality Dental Clinic, digitizing clinical, administrative, and operational workflows in a centralized web-based platform tailored to streamline daily operations and patient-care processes.",
        },
        {
          role: "Software Engineer",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "Internship · Addis Ababa, Ethiopia · Hybrid",
          duration: "Jul 2026 — Present · 4 mos",
          description: "Contributing to software engineering solutions and developing production web applications, collaborating across agile teams to implement robust digital solutions.",
        },
        {
          role: "Technical Lead",
          company: "GDG on Campus - BITS College",
          locationOrType: "Addis Ababa, Ethiopia · On-site",
          duration: "Sep 2025 — Sep 2026 · 1 yr 1 mo",
          description: "Collaborated with peers, organized technical workshops and events, and led software development initiatives and student developer programs as part of Google Developer Groups on Campus.",
        },
        {
          role: "Frontend Developer",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "Addis Ababa, Ethiopia",
          duration: "Jan 2025 — May 2025 · 5 mos",
          description: "Built and maintained more than 5 portfolio websites for lawyers using React, Tailwind CSS, and TypeScript, delivering responsive, modern, and accessible client-facing platforms.",
        },
      ],
    },
    events: {
      sectionTitle: "Events Prepared & Led",
      sectionSubtitle: "Developer conferences, technical workshops, and community events I organized, hosted, and led as Technical Lead at GDG on Campus - BITS College and community initiatives.",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "Launch & Welcome Event",
          role: "Technical Lead & Organizer",
          description: "Organized and hosted the official launch and welcome event for GDG on Campus at BITS College under the mission to Connect, Learn, and Develop.",
        },
        {
          title: "Break The Pattern — Joint Tech Summit",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "Lead Co-Organizer",
          description: "Co-organized a multi-campus developer summit uniting university chapters and tech companies for keynotes, panels, and developer networking.",
        },
        {
          title: "Hands-On Developer Workshops & Lab Mentorship",
          subtitle: "BITS College Computer Lab",
          role: "Speaker & Technical Mentor",
          description: "Conducted practical coding workshops, system development walkthroughs, and peer mentoring sessions for aspiring student engineers.",
        },
        {
          title: "Cursor AI Hackathon Ethiopia",
          subtitle: "Innobiz-K × Telebirr × AAU",
          role: "Participant & Collaborator",
          description: "Collaborated with engineers at the premier Cursor AI Hackathon in Addis Ababa, building and testing AI-assisted full-stack workflows.",
        },
        {
          title: "Virtual Tech Talks & Industry Webinars",
          subtitle: "GDG on Campus Online Series",
          role: "Host & Moderator",
          description: "Hosted live virtual webinars with industry engineering leaders (featuring guest speaker Abel Hubena), providing career and technical mentorship.",
        },
      ],
    },
    skills: {
      sectionTitle: "Skills & Tech Stack",
      sectionSubtitle: "A breakdown of programming languages, frameworks, cloud services, and production deployment environments I work with.",
      categories: {
        programmingLanguages: "Programming Languages",
        frontend: "Frontend",
        backendApis: "Backend & APIs",
        deployment: "Deployment",
        dataInfrastructure: "Data & Infrastructure",
        spokenLanguages: "Spoken Languages",
      },
      spokenAmharic: {
        name: "Amharic",
        proficiency: "Native",
        subtitle: "Mother tongue · Full native fluency in spoken & written",
      },
      spokenEnglish: {
        name: "English",
        proficiency: "Professional Working Proficiency",
        subtitle: "Professional fluency in technical writing & international collaboration",
      },
    },
    projects: {
      sectionTitle: "Featured Projects",
      visitProject: "Visit Project",
      items: [
        {
          title: "YOM Technology",
          tag: "Web App",
          description: "Company website for a software engineering firm — showcases services, solutions, technologies, and a modern approach to building digital products for real-world problems.",
        },
        {
          title: "Lewi Dental Clinic Management",
          tag: "Healthcare System",
          description: "A comprehensive web-based management system for Lewi Speciality Dental Clinic, designed to digitize and streamline the day-to-day operations of a full-service dental clinic. The platform brings essential clinical, administrative, and operational workflows together in one centralized system, supporting efficient clinic management and a more organized patient-care experience.",
        },
        {
          title: "BITS College",
          tag: "Website",
          description: "Official website for the School of Systems and Technology, presenting software engineering and IT management programs, admissions, and academic information.",
        },
        {
          title: "Sheba Extensionz",
          tag: "E-commerce",
          description: "Digital storefront for premium luxury hair extensions, showcasing products and connecting clients to the brand.",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "Web App",
          description: "Luxury modern dentistry platform with an online appointment and contact experience for patients to reach the clinic easily.",
        },
        {
          title: "Issue Management System",
          tag: "Web App",
          description: "A system for tracking, managing, and resolving issues efficiently across engineering teams and internal operational workflows.",
        },
      ],
    },
    certificates: {
      sectionTitle: "Awards and Certifications",
      sectionSubtitle: "A selection of verified certifications and academic programs completed.",
      prev: "Previous certificates",
      next: "Next certificates",
      items: [
        { title: "Android Developer Fundamentals", subtitle: "Udacity" },
        { title: "Artificial Intelligence", subtitle: "Udacity" },
        { title: "Data Analysis Fundamentals", subtitle: "Udacity" },
        { title: "Programming Fundamentals", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "Stanford" },
        { title: "ALX - Professional Foundation", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "Let’s Connect",
      heading: "Have a project in mind or want to collaborate?",
      description: "I’m always open to discussing new opportunities, full-stack product development, or technical partnerships. Feel free to reach out directly.",
      getInTouch: "Get In Touch",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      craftedWith: "Crafted with",
    },
  },

  zh: {
    nav: {
      skipToContent: "跳转至主要内容",
      toggleTheme: "切换主题",
      selectLanguage: "选择语言",
    },
    hero: {
      availableForWork: "可承接项目 / 接受工作",
      role: "软件工程师 · 全栈开发工程师",
      bioP1: "你好，我是 Nathenael Tamirat。我热衷于构建能将创新想法转化为实际解决方案的优质软件。我的编程之旅始于 2018 年，当时我在学校接触了 HTML、CSS 和 JavaScript。从最初对网站运作原理的好奇，逐渐演变为对现代软件工程的深厚追求与热爱。",
      bioP2: "如今，我专注于精进技术、打造高质量落地项目，并积极探索前沿技术如何解决日常生活与商业运作中的核心难题。在不断打磨自主产品、开展跨团队技术协作的同时，我也正稳步推进创立属于自己的软件科技公司。",
    },
    experience: {
      sectionTitle: "工作与实践经历",
      viewProof: "查看成果证明",
      visitLewi: "访问 Lewi 齿科管理系统",
      items: [
        {
          role: "自由职业软件开发者",
          company: "独立承接",
          locationOrType: "混合办公",
          duration: "2026年8月 — 至今 · 3 个月",
          description: "为 Lewi 专科口腔诊所主导开发了全流程综合管理系统，将临床诊疗、行政审批与日常运营流程深度数字化，构建起一体化云端平台，显著优化日常运作效率与患者就医体验。",
        },
        {
          role: "软件工程师",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "实习 · 埃塞俄比亚 亚的斯亚贝巴 · 混合办公",
          duration: "2026年7月 — 至今 · 4 个月",
          description: "参与核心软件工程方案设计，研发高可用生产级 Web 应用，与敏捷团队紧密协作交付稳健可靠的数字化解决方案。",
        },
        {
          role: "技术主管 (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "埃塞俄比亚 亚的斯亚贝巴 · 线下",
          duration: "2025年9月 — 2026年9月 · 1 年 1 个月",
          description: "作为 Google 开发者校园学生社团的核心技术主管，带领团队开展软件研发实践，组织高水准技术讲座与实操工作坊，赋能青年开发者成长。",
        },
        {
          role: "前端工程师",
          company: "Tamirat Bizuneh 法律事务所",
          locationOrType: "埃塞俄比亚 亚的斯亚贝巴",
          duration: "2025年1月 — 2025年5月 · 5 个月",
          description: "使用 React、Tailwind CSS 与 TypeScript 为执业律师团队量身打造并维护了 5+ 个专业法律服务门户，呈现响应灵敏、界面现代且无障碍友好的客户平台。",
        },
      ],
    },
    events: {
      sectionTitle: "组织策划与技术演讲活动",
      sectionSubtitle: "作为 GDG on Campus - BITS College 技术主管及社区发起人，我组织、主持并主讲的开发者大会、实操工作坊与技术峰会。",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "官方启动与迎新盛典",
          role: "技术主管与活动总策划",
          description: "秉持“连接、学习、成长”的社团使命，成功统筹并主持了 BITS College GDG 开发者社团官方发布仪式与迎新大会。",
        },
        {
          title: "Break The Pattern — 联合技术峰会",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio 联合举办",
          role: "联合主策划",
          description: "携手多所顶尖高校社团与知名科技企业，联合统筹跨校开发者大会，开展主旨演讲、圆桌研讨与专业人脉拓展。",
        },
        {
          title: "开发者动手实验工坊与机房实训辅导",
          subtitle: "BITS College 计算机实验中心",
          role: "演讲主讲人与技术导师",
          description: "开展实战代码教学、系统架构解析演示与点对点答疑，悉心指导青年学生工程师掌握实际工程能力。",
        },
        {
          title: "Cursor AI 黑客松 · 埃塞俄比亚站",
          subtitle: "Innobiz-K × Telebirr × 亚的斯亚贝巴大学",
          role: "参赛选手与技术合作者",
          description: "与顶尖工程师同台竞技，共同构建并验证基于 Cursor AI 工具链的新一代全栈自动化开发工作流。",
        },
        {
          title: "线上技术研讨会与行业先锋访谈",
          subtitle: "GDG 校园线上系列研讨",
          role: "会议主持人与主理人",
          description: "主持高规格线上直播研讨会，特邀行业资深工程专家 Abel Hubena 畅谈技术演进与职业成长路径。",
        },
      ],
    },
    skills: {
      sectionTitle: "技术栈与核心专长",
      sectionSubtitle: "我在实际工程开发中熟练运用的编程语言、前后端框架、云基础设施与应用部署环境概览。",
      categories: {
        programmingLanguages: "编程语言",
        frontend: "前端技术",
        backendApis: "后端与 API",
        deployment: "应用交付与部署",
        dataInfrastructure: "数据与云基础设施",
        spokenLanguages: "精通语种",
      },
      spokenAmharic: {
        name: "阿姆哈拉语 (Amharic)",
        proficiency: "母语",
        subtitle: "母语 · 听说读写母语级纯熟表达",
      },
      spokenEnglish: {
        name: "英语 (English)",
        proficiency: "专业工作熟练",
        subtitle: "具备专业技术写作、跨国协作与流畅工作沟通能力",
      },
    },
    projects: {
      sectionTitle: "精选项目作品",
      visitProject: "访问项目",
      items: [
        {
          title: "YOM Technology",
          tag: "Web 应用",
          description: "软件工程咨询与解决方案企业官方网站 —— 全面展示数字化服务、核心技术架构以及应对商业痛点的敏捷落地实践。",
        },
        {
          title: "Lewi 专科齿科诊所管理系统",
          tag: "医疗健康系统",
          description: "为 Lewi 专科齿科诊所打造的综合 Web 管理平台，将临床挂号、电子病历、处方流转与财务结算全链路打通，实现无纸化高效协同管理。",
        },
        {
          title: "BITS College 学院门户",
          tag: "机构门户",
          description: "系统与技术学院官方学术网站，全面呈现软件工程与 IT 管理学位项目、招生指南与前沿教研成果。",
        },
        {
          title: "Sheba Extensionz",
          tag: "电子商务",
          description: "高端奢华假发与接发定制电商展厅，以极简优雅的视觉设计连接高端客户群与品牌价值。",
        },
        {
          title: "Nahom 齿科现代门诊",
          tag: "Web 应用",
          description: "现代化高端牙科诊疗平台，配备在线智能预约、服务方案速查与就医指引，大幅提升患者沟通便利度。",
        },
        {
          title: "研发缺陷与工单管理系统",
          tag: "Web 应用",
          description: "面向工程产研团队的缺陷追踪与工单系统，支撑团队高效排期、透明流转并加速关键技术问题的闭环解决。",
        },
      ],
    },
    certificates: {
      sectionTitle: "荣誉与专业认证",
      sectionSubtitle: "已顺利完成并获得官方验证的专业认证与学术研修课程。",
      prev: "上一张证书",
      next: "下一张证书",
      items: [
        { title: "Android 开发者核心基石", subtitle: "Udacity" },
        { title: "人工智能专业认证", subtitle: "Udacity" },
        { title: "数据分析核心技术", subtitle: "Udacity" },
        { title: "现代编程基础认证", subtitle: "Udacity" },
        { title: "Code in Place 编程研修", subtitle: "斯坦福大学 (Stanford)" },
        { title: "ALX 职业基石卓越认证", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "保持联系 · 开启合作",
      heading: "您有新项目构想或寻求技术合作吗？",
      description: "我随时欢迎就全新职业机遇、全栈产品研发或深度技术伙伴关系展开交流。欢迎随时直接与我取得联系。",
      getInTouch: "发信联络",
      telegram: "Telegram 沟通",
      linkedin: "领英 (LinkedIn)",
    },
    footer: {
      rights: "保留所有权利。",
      craftedWith: "精心构建于",
    },
  },

  hi: {
    nav: {
      skipToContent: "मुख्य सामग्री पर जाएं",
      toggleTheme: "थीम बदलें",
      selectLanguage: "भाषा चुनें",
    },
    hero: {
      availableForWork: "काम के लिए उपलब्ध",
      role: "सॉफ्टवेयर इंजीनियर और फुल-स्टैक डेवलपर",
      bioP1: "नमस्ते, मैं नथनेल तमीरात हूँ। मैं ऐसे सॉफ़्टवेयर बनाने के प्रति उत्साही हूँ जो विचारों को व्यावहारिक समाधानों में बदलते हैं। विकास में मेरी यात्रा 2018 में शुरू हुई जब मुझे स्कूल में HTML, CSS और JavaScript से परिचित कराया गया। वेबसाइटें कैसे काम करती हैं, इस जिज्ञासा से शुरू हुआ यह सफर धीरे-धीरे सॉफ़्टवेयर इंजीनियरिंग में गहरी रुचि में बदल गया।",
      bioP2: "आज, मैं अपने कौशल को निखारने, वास्तविक दुनिया की परियोजनाओं को विकसित करने और प्रौद्योगिकी रोजमर्रा की समस्याओं को कैसे हल कर सकती है, यह तलाशने पर केंद्रित हूँ। मैं वर्तमान में अपने स्वयं के सॉफ्टवेयर उद्यम की स्थापना की दिशा में काम कर रहा हूँ, साथ ही उत्कृष्ट उत्पादों पर काम कर रहा हूँ और एक डेवलपर के रूप में निरंतर सीख रहा हूँ।",
    },
    experience: {
      sectionTitle: "कार्य अनुभव",
      viewProof: "कार्य प्रमाण देखें",
      visitLewi: "Lewi डेंटल सिस्टम देखें",
      items: [
        {
          role: "फ्रीलांस सॉफ्टवेयर डेवलपर",
          company: "स्व-नियोजित",
          locationOrType: "हाइब्रिड",
          duration: "अगस्त 2026 — वर्तमान · 3 माह",
          description: "Lewi स्पेशल डेंटल क्लिनिक के लिए एक व्यापक डेंटल क्लिनिक प्रबंधन प्रणाली विकसित की, जिसमें दैनिक कार्यों और रोगी-देखभाल प्रक्रियाओं को सुव्यवस्थित करने के लिए एक केंद्रीकृत वेब-आधारित प्लेटफ़ॉर्म में नैदानिक, प्रशासनिक और परिचालन वर्कफ़्लो को डिजिटल बनाया गया।",
        },
        {
          role: "सॉफ्टवेयर इंजीनियर",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "इंटर्नशिप · अदीस अबाबा, इथियोपिया · हाइब्रिड",
          duration: "जुलाई 2026 — वर्तमान · 4 माह",
          description: "सॉफ्टवेयर इंजीनियरिंग समाधानों में योगदान देना और मजबूत डिजिटल समाधानों को लागू करने के लिए चुस्त टीमों के साथ सहयोग करते हुए उत्पादन वेब एप्लिकेशन विकसित करना।",
        },
        {
          role: "तकनीकी प्रमुख (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "अदीस अबाबा, इथियोपिया · ऑन-साइट",
          duration: "सितंबर 2025 — सितंबर 2026 · 1 वर्ष 1 माह",
          description: "गूगल डेवलपर ग्रुप्स ऑन कैंपस के हिस्से के रूप में साथियों के साथ सहयोग किया, तकनीकी कार्यशालाओं और कार्यक्रमों का आयोजन किया, और सॉफ्टवेयर विकास पहलों का नेतृत्व किया।",
        },
        {
          role: "फ्रंटएंड डेवलपर",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "अदीस अबाबा, इथियोपिया",
          duration: "जनवरी 2025 — मई 2025 · 5 माह",
          description: "प्रतिक्रियाशील, आधुनिक और सुलभ क्लाइंट-सामना करने वाले प्लेटफ़ॉर्म प्रदान करते हुए React, Tailwind CSS और TypeScript का उपयोग करके वकीलों के लिए 5 से अधिक पोर्टफोलियो वेबसाइटें बनाईं और उनका रखरखाव किया।",
        },
      ],
    },
    events: {
      sectionTitle: "आयोजित और नेतृत्व किए गए कार्यक्रम",
      sectionSubtitle: "डेवलपर सम्मेलन, तकनीकी कार्यशालाएं और सामुदायिक कार्यक्रम जिन्हें मैंने GDG on Campus - BITS College में तकनीकी प्रमुख के रूप में आयोजित, होस्ट और नेतृत्व किया।",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "लॉन्च और स्वागत कार्यक्रम",
          role: "तकनीकी प्रमुख और आयोजक",
          description: "कनेक्ट, लर्न और डेवलप के मिशन के तहत BITS कॉलेज में GDG ऑन कैंपस के लिए आधिकारिक लॉन्च और स्वागत कार्यक्रम का आयोजन और संचालन किया।",
        },
        {
          title: "Break The Pattern — संयुक्त टेक शिखर सम्मेलन",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "प्रमुख सह-आयोजक",
          description: "मुख्य भाषणों, पैनलों और डेवलपर नेटवर्किंग के लिए विश्वविद्यालय के अध्यायों और तकनीकी कंपनियों को एकजुट करने वाले एक बहु-परिसर डेवलपर शिखर सम्मेलन का सह-आयोजन किया।",
        },
        {
          title: "हैंड्स-ऑन डेवलपर कार्यशालाएं और लैब मेंटरशिप",
          subtitle: "BITS कॉलेज कंप्यूटर लैब",
          role: "वक्ता और तकनीकी संरक्षक",
          description: "इच्छुक छात्र इंजीनियरों के लिए व्यावहारिक कोडिंग कार्यशालाओं, सिस्टम विकास वॉकथ्रू और सहकर्मी सलाह सत्रों का आयोजन किया।",
        },
        {
          title: "Cursor AI हैकाथॉन इथियोपिया",
          subtitle: "Innobiz-K × Telebirr × AAU",
          role: "प्रतिभागी और सहयोगी",
          description: "अदीस अबाबा में प्रमुख कर्सर एआई हैकाथॉन में इंजीनियरों के साथ सहयोग किया, एआई-सहायता प्राप्त फुल-स्टैक वर्कफ़्लो का निर्माण और परीक्षण किया।",
        },
        {
          title: "वर्चुअल टेक वार्ता और उद्योग वेबिनार",
          subtitle: "GDG ऑन कैंपस ऑनलाइन श्रृंखला",
          role: "होस्ट और मॉडरेटर",
          description: "उद्योग इंजीनियरिंग नेताओं (अतिथि वक्ता हाबेल हुबेना की विशेषता) के साथ लाइव वर्चुअल वेबिनार की मेजबानी की, करियर और तकनीकी सलाह प्रदान की।",
        },
      ],
    },
    skills: {
      sectionTitle: "कौशल और तकनीकी स्टैक",
      sectionSubtitle: "प्रोग्रामिंग भाषाओं, रूपरेखाओं, क्लाउड सेवाओं और उत्पादन परिनियोजन वातावरण का विस्तृत विवरण जिनके साथ मैं काम करता हूँ।",
      categories: {
        programmingLanguages: "प्रोग्रामिंग भाषाएँ",
        frontend: "फ्रंटएंड",
        backendApis: "बैकएंड और एपीआई",
        deployment: "परिनियोजन",
        dataInfrastructure: "डेटा और बुनियादी ढाँचा",
        spokenLanguages: "बोली जाने वाली भाषाएँ",
      },
      spokenAmharic: {
        name: "अम्हारिक (Amharic)",
        proficiency: "मातृभाषा",
        subtitle: "मातृभाषा · बोलने और लिखने में पूर्ण स्वाभाविक प्रवाह",
      },
      spokenEnglish: {
        name: "अंग्रेजी (English)",
        proficiency: "व्यावसायिक कार्य कुशलता",
        subtitle: "तकनीकी लेखन और अंतर्राष्ट्रीय सहयोग में धाराप्रवाह दक्षता",
      },
    },
    projects: {
      sectionTitle: "प्रमुख परियोजनाएं",
      visitProject: "परियोजना देखें",
      items: [
        {
          title: "YOM Technology",
          tag: "वेब ऐप",
          description: "सॉफ्टवेयर इंजीनियरिंग फर्म की कॉर्पोरेट वेबसाइट — वास्तविक दुनिया की समस्याओं के लिए डिजिटल समाधान और आधुनिक दृष्टिकोण प्रदर्शित करती है।",
        },
        {
          title: "Lewi डेंटल क्लिनिक प्रबंधन",
          tag: "स्वास्थ्य सेवा प्रणाली",
          description: "दैनिक क्लिनिकल और प्रशासनिक प्रक्रियाओं को सुव्यवस्थित करने के लिए बनाया गया एक व्यापक वेब-आधारित प्रबंधन प्लेटफ़ॉर्म।",
        },
        {
          title: "BITS College",
          tag: "वेबसाइट",
          description: "सिस्टम और प्रौद्योगिकी स्कूल की आधिकारिक वेबसाइट, सॉफ्टवेयर इंजीनियरिंग और आईटी प्रबंधन कार्यक्रमों की जानकारी प्रदान करती है।",
        },
        {
          title: "Sheba Extensionz",
          tag: "ई-कॉमर्स",
          description: "प्रीमियम लक्जरी हेयर एक्सटेंशन के लिए आधुनिक डिजिटल स्टोर, उत्पादों को प्रदर्शित करता है।",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "वेब ऐप",
          description: "ऑनलाइन अपॉइंटमेंट और संपर्क अनुभव के साथ आधुनिक लक्जरी दंत चिकित्सा मंच।",
        },
        {
          title: "समस्या प्रबंधन प्रणाली",
          tag: "वेब ऐप",
          description: "इंजीनियरिंग टीमों और आंतरिक वर्कफ़्लो में समस्याओं को कुशलतापूर्वक ट्रैक और हल करने की प्रणाली।",
        },
      ],
    },
    certificates: {
      sectionTitle: "पुरस्कार और प्रमाण पत्र",
      sectionSubtitle: "सत्यापित प्रमाणपत्रों और पूर्ण किए गए शैक्षणिक कार्यक्रमों का चयन।",
      prev: "पिछला प्रमाणपत्र",
      next: "अगला प्रमाणपत्र",
      items: [
        { title: "एंड्रॉइड डेवलपर फंडामेंटल्स", subtitle: "Udacity" },
        { title: "आर्टिफिशियल इंटेलिजेंस", subtitle: "Udacity" },
        { title: "डेटा विश्लेषण फंडामेंटल्स", subtitle: "Udacity" },
        { title: "प्रोग्रामिंग फंडामेंटल्स", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "स्टैनफोर्ड यूनिवर्सिटी" },
        { title: "ALX - प्रोफेशनल फाउंडेशन", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "आइए जुड़ें",
      heading: "क्या आपके मन में कोई परियोजना है या आप सहयोग करना चाहते हैं?",
      description: "मैं हमेशा नए अवसरों, फुल-स्टैक उत्पाद विकास, या तकनीकी साझेदारी पर चर्चा करने के लिए तैयार हूँ। बेझिझक सीधे संपर्क करें।",
      getInTouch: "संपर्क करें",
      telegram: "टेलीग्राम",
      linkedin: "लिंक्डइन",
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित।",
      craftedWith: "के साथ निर्मित",
    },
  },

  es: {
    nav: {
      skipToContent: "Saltar al contenido",
      toggleTheme: "Cambiar tema",
      selectLanguage: "Seleccionar idioma",
    },
    hero: {
      availableForWork: "Disponible para trabajar",
      role: "Ingeniero de Software y Desarrollador Full-Stack",
      bioP1: "Hola, soy Nathenael Tamirat. Me apasiona crear software que transforme ideas en soluciones prácticas y eficientes. Mi trayectoria en el desarrollo comenzó en 2018 cuando descubrí HTML, CSS y JavaScript en la escuela. Lo que comenzó como curiosidad por el funcionamiento de la web creció hasta convertirse en una sólida vocación por la ingeniería de software.",
      bioP2: "Hoy en día, me dedico a potenciar mis habilidades técnicas, construir aplicaciones de nivel productivo y explorar cómo la tecnología puede resolver problemas cotidianos. Actualmente trabajo hacia la fundación de mi propia empresa de software mientras desarrollo productos, colaboro con equipos talentosos y evoluciono constantemente como ingeniero.",
    },
    experience: {
      sectionTitle: "Experiencia laboral",
      viewProof: "Ver comprobante",
      visitLewi: "Visitar Sistema Lewi Dental",
      items: [
        {
          role: "Desarrollador de Software Freelance",
          company: "Independiente",
          locationOrType: "Híbrido",
          duration: "Ago 2026 — Presente · 3 meses",
          description: "Desarrollé un sistema integral de gestión clínica para Lewi Specialty Dental Clinic, digitalizando flujos de trabajo clínicos, administrativos y operativos en una plataforma web centralizada para optimizar las operaciones diarias y la atención al paciente.",
        },
        {
          role: "Ingeniero de Software",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "Pasantía · Adís Abeba, Etiopía · Híbrido",
          duration: "Jul 2026 — Presente · 4 meses",
          description: "Contribución al desarrollo de soluciones de ingeniería de software y aplicaciones web para producción, colaborando en equipos ágiles para implementar productos digitales de alto rendimiento.",
        },
        {
          role: "Director Técnico (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "Adís Abeba, Etiopía · Presencial",
          duration: "Sep 2025 — Sep 2026 · 1 año 1 mes",
          description: "Colaboración con colegas, organización de talleres y conferencias técnicas, y liderazgo de iniciativas de desarrollo de software como parte de Google Developer Groups on Campus.",
        },
        {
          role: "Desarrollador Frontend",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "Adís Abeba, Etiopía",
          duration: "Ene 2025 — May 2025 · 5 meses",
          description: "Construcción y mantenimiento de más de 5 sitios web de portafolio para abogados usando React, Tailwind CSS y TypeScript, ofreciendo plataformas modernas, responsivas y accesibles.",
        },
      ],
    },
    events: {
      sectionTitle: "Eventos organizados y liderazgo técnico",
      sectionSubtitle: "Conferencias para desarrolladores, talleres prácticos y eventos comunitarios que organicé, presenté y lideré como Director Técnico en GDG on Campus - BITS College.",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "Evento Oficial de Lanzamiento y Bienvenida",
          role: "Líder Técnico y Organizador",
          description: "Organización y presentación del evento oficial de lanzamiento y bienvenida para GDG on Campus en BITS College bajo la misión de Conectar, Aprender y Desarrollar.",
        },
        {
          title: "Break The Pattern — Cumbre Tecnológica Conjunta",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "Coorganizador Principal",
          description: "Coorganización de una cumbre interuniversitaria reuniendo capítulos estudiantiles y empresas tecnológicas para conferencias magistrales, paneles y networking.",
        },
        {
          title: "Talleres Prácticos de Programación y Mentoría en Laboratorio",
          subtitle: "Laboratorio de Computación de BITS College",
          role: "Ponente y Mentor Técnico",
          description: "Realización de talleres prácticos de código, explicaciones arquitectónicas y sesiones de mentoría personalizada para futuros ingenieros.",
        },
        {
          title: "Cursor AI Hackathon Etiopía",
          subtitle: "Innobiz-K × Telebirr × AAU",
          role: "Participante y Colaborador",
          description: "Colaboración con ingenieros en el principal Hackathon de Cursor AI en Adís Abeba, creando y testeando flujos full-stack asistidos por IA.",
        },
        {
          title: "Charlas Tecnológicas Virtuales y Webinars con la Industria",
          subtitle: "Serie Online GDG on Campus",
          role: "Anfitrión y Moderador",
          description: "Presentación de webinars virtuales en vivo con líderes de ingeniería de la industria (con el ponente invitado Abel Hubena), brindando mentoría técnica.",
        },
      ],
    },
    skills: {
      sectionTitle: "Habilidades y Stack Tecnológico",
      sectionSubtitle: "Un desglose detallado de lenguajes de programación, frameworks, infraestructura en la nube y plataformas de despliegue con las que trabajo.",
      categories: {
        programmingLanguages: "Lenguajes de Programación",
        frontend: "Frontend",
        backendApis: "Backend y APIs",
        deployment: "Despliegue y Distribución",
        dataInfrastructure: "Datos e Infraestructura",
        spokenLanguages: "Idiomas Hablados",
      },
      spokenAmharic: {
        name: "Amhárico (Amharic)",
        proficiency: "Nativo",
        subtitle: "Lengua materna · Fluidez nativa absoluta oral y escrita",
      },
      spokenEnglish: {
        name: "Inglés (English)",
        proficiency: "Competencia Profesional Completa",
        subtitle: "Fluidez profesional en redacción técnica y colaboración internacional",
      },
    },
    projects: {
      sectionTitle: "Proyectos Destacados",
      visitProject: "Visitar Proyecto",
      items: [
        {
          title: "YOM Technology",
          tag: "Aplicación Web",
          description: "Sitio corporativo para una firma de ingeniería de software — muestra servicios, soluciones tecnológicas y un enfoque moderno para resolver problemas reales.",
        },
        {
          title: "Gestión Clínica Lewi Dental",
          tag: "Sistema de Salud",
          description: "Sistema web integral para digitalizar y optimizar la administración diaria, historiales y citas de una clínica dental de alta especialidad.",
        },
        {
          title: "BITS College",
          tag: "Portal Institucional",
          description: "Sitio oficial de la Escuela de Sistemas y Tecnología con información académica, admisiones y programas en ingeniería de software.",
        },
        {
          title: "Sheba Extensionz",
          tag: "Comercio Electrónico",
          description: "Tienda digital para extensiones de cabello de lujo, conectando clientes con la elegancia de la marca.",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "Aplicación Web",
          description: "Plataforma odontológica moderna con sistema de citas online e información accesible para pacientes.",
        },
        {
          title: "Sistema de Gestión de Incidencias",
          tag: "Aplicación Web",
          description: "Plataforma para registrar, gestionar y resolver incidencias de manera ágil entre equipos de ingeniería y operaciones.",
        },
      ],
    },
    certificates: {
      sectionTitle: "Premios y Certificaciones",
      sectionSubtitle: "Una selección de certificaciones verificadas y programas académicos completados con éxito.",
      prev: "Certificados anteriores",
      next: "Certificados siguientes",
      items: [
        { title: "Fundamentos de Desarrollo Android", subtitle: "Udacity" },
        { title: "Inteligencia Artificial", subtitle: "Udacity" },
        { title: "Fundamentos de Análisis de Datos", subtitle: "Udacity" },
        { title: "Fundamentos de Programación", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "Universidad de Stanford" },
        { title: "ALX - Professional Foundation", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "Conectemos",
      heading: "¿Tienes un proyecto en mente o quieres colaborar?",
      description: "Siempre estoy abierto a discutir nuevas oportunidades, desarrollo de productos full-stack o alianzas técnicas. No dudes en contactarme directamente.",
      getInTouch: "Contactar",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      craftedWith: "Creado con",
    },
  },

  de: {
    nav: {
      skipToContent: "Zum Inhalt springen",
      toggleTheme: "Design wechseln",
      selectLanguage: "Sprache wählen",
    },
    hero: {
      availableForWork: "Verfügbar für Projekte",
      role: "Software Engineer & Full-Stack-Entwickler",
      bioP1: "Hallo, ich bin Nathenael Tamirat. Meine Leidenschaft ist es, Software zu entwickeln, die innovative Ideen in praxistaugliche Lösungen verwandelt. Mein Weg in die Softwareentwicklung begann 2018 mit HTML, CSS und JavaScript in der Schule. Was als Neugier begann, wuchs zu einer tiefen Begeisterung für moderne Softwaretechnik heran.",
      bioP2: "Heute konzentriere ich mich darauf, meine Fähigkeiten zu vertiefen, praxisorientierte Produktionsprojekte zu realisieren und Technologien zur Lösung realer Herausforderungen einzusetzen. Derzeit arbeite ich an der Gründung meines eigenen Softwareunternehmens, entwickle innovative Produkte und verbessere mich kontinuierlich als Ingenieur.",
    },
    experience: {
      sectionTitle: "Berufserfahrung",
      viewProof: "Nachweis ansehen",
      visitLewi: "Lewi Dental System ansehen",
      items: [
        {
          role: "Freiberuflicher Softwareentwickler",
          company: "Selbstständig",
          locationOrType: "Hybrid",
          duration: "Aug 2026 — Heute · 3 Monate",
          description: "Entwicklung eines umfassenden Klinikmanagementsystems für die Lewi Speciality Dental Clinic zur Digitalisierung klinischer und administrativer Arbeitsabläufe in einer zentralen Webplattform.",
        },
        {
          role: "Software Engineer",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "Praktikum · Addis Abeba, Äthiopien · Hybrid",
          duration: "Jul 2026 — Heute · 4 Monate",
          description: "Mitarbeit an Software-Engineering-Lösungen und Entwicklung produktionsreifer Webanwendungen in agilen Teams.",
        },
        {
          role: "Technical Lead",
          company: "GDG on Campus - BITS College",
          locationOrType: "Addis Abeba, Äthiopien · Vor Ort",
          duration: "Sep 2025 — Sep 2026 · 1 Jahr 1 Monat",
          description: "Leitung von Softwareentwicklungsinitiativen, Organisation technischer Workshops und Veranstaltungen im Rahmen von Google Developer Groups on Campus.",
        },
        {
          role: "Frontend-Entwickler",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "Addis Abeba, Äthiopien",
          duration: "Jan 2025 — Mai 2025 · 5 Monate",
          description: "Erstellung und Pflege von mehr als 5 Portfolio-Websites für Anwälte mit React, Tailwind CSS und TypeScript.",
        },
      ],
    },
    events: {
      sectionTitle: "Organisierte Events & Führung",
      sectionSubtitle: "Entwicklerkonferenzen, Workshops und Community-Events, die ich als Technical Lead bei GDG on Campus - BITS College organisiert und moderiert habe.",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "Offizielles Launch- & Willkommensevent",
          role: "Technischer Leiter & Organisator",
          description: "Organisation und Leitung des Launch-Events für GDG on Campus am BITS College unter dem Motto Vernetzen, Lernen und Entwickeln.",
        },
        {
          title: "Break The Pattern — Joint Tech Summit",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "Leitender Mitorganisator",
          description: "Organisation eines campusübergreifenden Entwicklergipfels mit Keynotes, Podiumsdiskussionen und Networking.",
        },
        {
          title: "Praxis-Workshops & Lab-Mentoring",
          subtitle: "BITS College Computer-Labor",
          role: "Referent & Technischer Mentor",
          description: "Durchführung praktischer Programmierworkshops und Mentoring-Sessions für angehende Entwickler.",
        },
        {
          title: "Cursor AI Hackathon Äthiopien",
          subtitle: "Innobiz-K × Telebirr × AAU",
          role: "Teilnehmer & Mitwirkender",
          description: "Zusammenarbeit mit Ingenieuren beim führenden Cursor AI Hackathon in Addis Abeba zur Erprobung KI-gestützter Workflows.",
        },
        {
          title: "Virtuelle Tech-Talks & Branchen-Webinare",
          subtitle: "GDG on Campus Online-Serie",
          role: "Moderator & Gastgeber",
          description: "Moderation von Live-Webinaren mit führenden Branchenexperten zur beruflichen und technischen Förderung.",
        },
      ],
    },
    skills: {
      sectionTitle: "Fähigkeiten & Tech-Stack",
      sectionSubtitle: "Eine Übersicht der Programmiersprachen, Frameworks, Cloud-Services und Bereitstellungsumgebungen, mit denen ich entwickle.",
      categories: {
        programmingLanguages: "Programmiersprachen",
        frontend: "Frontend",
        backendApis: "Backend & APIs",
        deployment: "Deployment & Verteilung",
        dataInfrastructure: "Daten & Infrastruktur",
        spokenLanguages: "Sprachkenntnisse",
      },
      spokenAmharic: {
        name: "Amharisch (Amharic)",
        proficiency: "Muttersprache",
        subtitle: "Muttersprache · Verhandlungssicher in Wort und Schrift",
      },
      spokenEnglish: {
        name: "Englisch (English)",
        proficiency: "Fließend in Wort & Schrift",
        subtitle: "Professionelle Kompetenz für technische Kommunikation und weltweite Zusammenarbeit",
      },
    },
    projects: {
      sectionTitle: "Ausgewählte Projekte",
      visitProject: "Projekt ansehen",
      items: [
        {
          title: "YOM Technology",
          tag: "Web-App",
          description: "Unternehmenswebsite für ein Software-Engineering-Unternehmen zur Präsentation von Dienstleistungen und digitalen Produkten.",
        },
        {
          title: "Lewi Zahnklinik-Managementsystem",
          tag: "Gesundheitssystem",
          description: "Zentralisierte Webplattform zur Digitalisierung klinischer und organisatorischer Abläufe einer Zahnklinik.",
        },
        {
          title: "BITS College",
          tag: "Webportal",
          description: "Offizielle Website der School of Systems and Technology für Studiengänge und akademische Informationen.",
        },
        {
          title: "Sheba Extensionz",
          tag: "E-Commerce",
          description: "Eleganter Online-Store für Premium-Haarverlängerungen mit moderner Markenpräsentation.",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "Web-App",
          description: "Moderne Zahnarzt-Plattform mit komfortablem Online-Terminsystem für Patienten.",
        },
        {
          title: "Issue Management System",
          tag: "Web-App",
          description: "Effizientes System zur Nachverfolgung und Lösung technischer Aufgaben und Team-Workflows.",
        },
      ],
    },
    certificates: {
      sectionTitle: "Auszeichnungen & Zertifikate",
      sectionSubtitle: "Eine Auswahl verifizierter Zertifikate und erfolgreich abgeschlossener akademischer Programme.",
      prev: "Vorherige Zertifikate",
      next: "Nächste Zertifikate",
      items: [
        { title: "Android Developer Fundamentals", subtitle: "Udacity" },
        { title: "Artificial Intelligence", subtitle: "Udacity" },
        { title: "Data Analysis Fundamentals", subtitle: "Udacity" },
        { title: "Programming Fundamentals", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "Stanford Universität" },
        { title: "ALX - Professional Foundation", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "Lass uns vernetzen",
      heading: "Haben Sie ein Projekt vor Augen oder möchten zusammenarbeiten?",
      description: "Ich bin jederzeit offen für neue Möglichkeiten, Full-Stack-Produktentwicklungen oder technische Partnerschaften. Schreiben Sie mir gerne direkt.",
      getInTouch: "Kontaktieren",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      craftedWith: "Entwickelt mit",
    },
  },

  fr: {
    nav: {
      skipToContent: "Passer au contenu",
      toggleTheme: "Changer de thème",
      selectLanguage: "Choisir la langue",
    },
    hero: {
      availableForWork: "Disponible pour travailler",
      role: "Ingénieur Logiciel & Développeur Full-Stack",
      bioP1: "Bonjour, je m'appelle Nathenael Tamirat. Je suis passionné par la création de logiciels qui transforment les idées en solutions concrètes et performantes. Mon parcours dans le développement a débuté en 2018 à l'école avec HTML, CSS et JavaScript. Ce qui n'était au départ qu'une simple curiosité est devenu une véritable vocation pour l'ingénierie logicielle.",
      bioP2: "Aujourd'hui, je me consacre au perfectionnement de mes compétences, au développement de projets concrets et à l'exploration des façons dont la technologie peut résoudre des problèmes du quotidien. Je travaille actuellement à la création de ma propre entreprise de logiciels tout en concevant des produits innovants, en collaborant en équipe et en progressant sans cesse.",
    },
    experience: {
      sectionTitle: "Expérience professionnelle",
      viewProof: "Voir la preuve",
      visitLewi: "Visiter le système Lewi Dental",
      items: [
        {
          role: "Développeur Logiciel Indépendant",
          company: "Indépendant",
          locationOrType: "Hybride",
          duration: "Août 2026 — Présent · 3 mois",
          description: "Conception et développement d'un système complet de gestion clinique pour Lewi Speciality Dental Clinic, numérisant les flux cliniques et administratifs sur une plateforme web centralisée.",
        },
        {
          role: "Ingénieur Logiciel",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "Stage · Addis-Abeba, Éthiopie · Hybride",
          duration: "Juil 2026 — Présent · 4 mois",
          description: "Contribution au développement d'applications web de production et collaboration au sein d'équipes agiles pour implémenter des solutions numériques robustes.",
        },
        {
          role: "Responsable Technique (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "Addis-Abeba, Éthiopie · Sur site",
          duration: "Sept 2025 — Sept 2026 · 1 an 1 mois",
          description: "Organisation d'ateliers techniques et d'événements, encadrement d'initiatives étudiantes au sein des Google Developer Groups on Campus.",
        },
        {
          role: "Développeur Frontend",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "Addis-Abeba, Éthiopie",
          duration: "Janv 2025 — Mai 2025 · 5 mois",
          description: "Création et maintenance de plus de 5 sites web vitrines pour avocats avec React, Tailwind CSS et TypeScript, offrant des interfaces réactives et modernes.",
        },
      ],
    },
    events: {
      sectionTitle: "Événements organisés & Leadership",
      sectionSubtitle: "Conférences pour développeurs, ateliers pratiques et événements communautaires que j'ai organisés, animés et dirigés en tant que responsable technique au GDG on Campus - BITS College.",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "Événement de lancement et d'accueil",
          role: "Responsable Technique & Organisateur",
          description: "Organisation et animation de la soirée officielle de lancement du club GDG on Campus au BITS College sous la devise Connecter, Apprendre et Développer.",
        },
        {
          title: "Break The Pattern — Sommet Technologique Conjoint",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "Co-organisateur Principal",
          description: "Co-organisation d'un sommet réunissant plusieurs universités et entreprises technologiques pour des conférences, panels et séances de networking.",
        },
        {
          title: "Ateliers Pratiques de Programmation & Mentorat",
          subtitle: "Laboratoire Informatique du BITS College",
          role: "Conférencier & Mentor Technique",
          description: "Animation d'ateliers de code pratiques, présentations d'architectures système et accompagnement technique d'étudiants en ingénierie.",
        },
        {
          title: "Hackathon Cursor AI Éthiopie",
          subtitle: "Innobiz-K × Telebirr × AAU",
          role: "Participant & Collaborateur",
          description: "Collaboration avec des ingénieurs lors du grand hackathon Cursor AI à Addis-Abeba, développant et testant des flux de travail full-stack assistés par l'IA.",
        },
        {
          title: "Conférences Virtuelles & Webinaires d'Entreprise",
          subtitle: "Série en ligne GDG on Campus",
          role: "Hôte & Modérateur",
          description: "Animation de webinaires en direct avec des leaders de l'ingénierie logicielle (avec l'invité Abel Hubena), offrant mentorat et partage d'expérience.",
        },
      ],
    },
    skills: {
      sectionTitle: "Compétences & Stack Technique",
      sectionSubtitle: "Un aperçu des langages de programmation, frameworks, services cloud et environnements de déploiement en production que je maîtrise.",
      categories: {
        programmingLanguages: "Langages de Programmation",
        frontend: "Frontend",
        backendApis: "Backend & APIs",
        deployment: "Déploiement & Distribution",
        dataInfrastructure: "Données & Infrastructure",
        spokenLanguages: "Langues Parlées",
      },
      spokenAmharic: {
        name: "Amharique (Amharic)",
        proficiency: "Langue maternelle",
        subtitle: "Langue maternelle · Maîtrise absolue à l'oral et à l'écrit",
      },
      spokenEnglish: {
        name: "Anglais (English)",
        proficiency: "Capacité Professionnelle Complète",
        subtitle: "Aisance professionnelle pour la rédaction technique et la collaboration internationale",
      },
    },
    projects: {
      sectionTitle: "Projets à la Une",
      visitProject: "Voir le projet",
      items: [
        {
          title: "YOM Technology",
          tag: "Application Web",
          description: "Site vitrine d'une société d'ingénierie logicielle présentant ses services, expertises technologiques et approches novatrices.",
        },
        {
          title: "Gestion Clinique Lewi Dental",
          tag: "Système de Santé",
          description: "Plateforme web complète conçue pour numériser et fluidifier la gestion quotidienne et le suivi des patients en cabinet dentaire.",
        },
        {
          title: "BITS College",
          tag: "Portail Web",
          description: "Site officiel de l'École des Systèmes et de la Technologie présentant les filières d'ingénierie et d'admission.",
        },
        {
          title: "Sheba Extensionz",
          tag: "Commerce Électronique",
          description: "Boutique en ligne élégante pour extensions capillaires haut de gamme, valorisant l'image de marque auprès des clients.",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "Application Web",
          description: "Plateforme dentaire moderne intégrant prise de rendez-vous en ligne et informations pratiques pour les patients.",
        },
        {
          title: "Système de Gestion des Incidents",
          tag: "Application Web",
          description: "Outil de suivi et de résolution efficace des anomalies au sein des équipes d'ingénierie logicielle.",
        },
      ],
    },
    certificates: {
      sectionTitle: "Prix et Certifications",
      sectionSubtitle: "Une sélection de certifications vérifiées et de formations académiques accomplies.",
      prev: "Certificats précédents",
      next: "Certificats suivants",
      items: [
        { title: "Fondamentaux du Développement Android", subtitle: "Udacity" },
        { title: "Intelligence Artificielle", subtitle: "Udacity" },
        { title: "Fondamentaux de l'Analyse de Données", subtitle: "Udacity" },
        { title: "Fondamentaux de la Programmation", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "Université de Stanford" },
        { title: "ALX - Fondations Professionnelles", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "Prenons contact",
      heading: "Vous avez un projet en tête ou souhaitez collaborer ?",
      description: "Je suis toujours disponible pour discuter de nouvelles opportunités, de développement de produits full-stack ou de partenariats techniques. N'hésitez pas à me contacter directement.",
      getInTouch: "Me Contacter",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Tous droits réservés.",
      craftedWith: "Conçu avec",
    },
  },

  ja: {
    nav: {
      skipToContent: "コンテンツへスキップ",
      toggleTheme: "テーマ切り替え",
      selectLanguage: "言語を選択",
    },
    hero: {
      availableForWork: "案件・就職対応可能",
      role: "ソフトウェアエンジニア & フルスタック開発者",
      bioP1: "こんにちは、ナサナエル・タミラト（Nathenael Tamirat）です。アイデアを実用的で価値あるソリューションに変えるソフトウェア開発に情熱を注いでいます。2018年に学校でHTML、CSS、JavaScriptに触れたことから開発の歩みを始めました。Webの仕組みに対する好奇心から始まった探究心は、ソフトウェアエンジニアリングへの深い情熱へと成長しました。",
      bioP2: "現在は、技術力の向上、本番環境を見据えた実践的なプロダクト開発、そして日々の課題をテクノロジーで解決することに注力しています。自身のソフトウェア企業の創設を視野に入れながら、プロダクトの開発、他者との協業、そしてエンジニアとしての継続的な成長に取り組んでいます。",
    },
    experience: {
      sectionTitle: "実務経験・経歴",
      viewProof: "実績を見る",
      visitLewi: "Lewi Dentalシステムを見る",
      items: [
        {
          role: "フリーランス ソフトウェア開発者",
          company: "個人事業",
          locationOrType: "ハイブリッド",
          duration: "2026年8月 — 現在 · 3ヶ月",
          description: "Lewi専門歯科クリニック向けに包括的なクリニック管理システムを開発。臨床、管理、日常業務のワークフローを統合型Webプラットフォームに集約し、診療運営を効率化しました。",
        },
        {
          role: "ソフトウェアエンジニア",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "インターン · エチオピア アディスアベバ · ハイブリッド",
          duration: "2026年7月 — 現在 · 4ヶ月",
          description: "アジャイル開発チームにおいて商用Webアプリケーションの開発とソフトウェア設計に貢献し、堅牢なデジタルソリューションの実装を担当。",
        },
        {
          role: "テクニカルリード",
          company: "GDG on Campus - BITS College",
          locationOrType: "エチオピア アディスアベバ · オンサイト",
          duration: "2025年9月 — 2026年9月 · 1年1ヶ月",
          description: "Google Developer Groups on Campusにて技術ワークショップや開発者イベントの企画・運営を行い、学生エンジニア向け開発プログラムを牽引しました。",
        },
        {
          role: "フロントエンド開発者",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "エチオピア アディスアベバ",
          duration: "2025年1月 — 2025年5月 · 5ヶ月",
          description: "React、Tailwind CSS、TypeScriptを用いて弁護士向けに5件以上のポートフォリオサイトを構築・保守し、アクセシブルで洗練されたWeb体験を提供しました。",
        },
      ],
    },
    events: {
      sectionTitle: "主催・登壇イベントとコミュニティ活動",
      sectionSubtitle: "GDG on Campus - BITS Collegeのテクニカルリードとして主催・司会・主導した開発者カンファレンス、実践ワークショップ、コミュニティ活動の実績です。",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "発足 & ウェルカムキックオフイベント",
          role: "テクニカルリード & 主催者",
          description: "「繋がり、学び、成長する」をミッションに掲げ、BITS CollegeにおけるGDG on Campusの公式ローンチイベントを企画・開催しました。",
        },
        {
          title: "Break The Pattern — 合同テックサミット",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "共同リードオーガナイザー",
          description: "複数大学の開発者チャプターとテクノロジー企業を結ぶ合同サミットを共同主催し、基調講演やパネル討論会を統括しました。",
        },
        {
          title: "実践的コーディングワークショップ & ラボ指導",
          subtitle: "BITS College コンピュータ研究室",
          role: "登壇講師 & 技術メンター",
          description: "実践的なコード解説やシステム設計のデモ、後輩学生エンジニアに向けた技術メンタリングセッションを実施しました。",
        },
        {
          title: "Cursor AI ハッカソン エチオピア",
          subtitle: "Innobiz-K × Telebirr × アディスアベバ大学",
          role: "参加者 & 共同開発者",
          description: "アディスアベバで開催されたCursor AIハッカソンに参加し、AIツールを活用した迅速なフルスタック開発フローを検証しました。",
        },
        {
          title: "バーチャル技術講演 & 業界ウェビナー",
          subtitle: "GDG on Campus オンラインシリーズ",
          role: "司会 & モデレーター",
          description: "業界のトップエンジニア（ゲスト講師 Abel Hubena氏）を迎えたオンラインウェビナーを主宰し、キャリア開発支援を行いました。",
        },
      ],
    },
    skills: {
      sectionTitle: "スキル & 技術スタック",
      sectionSubtitle: "私が開発で使用しているプログラミング言語、フレームワーク、クラウドインフラ、本番デプロイ環境の概要です。",
      categories: {
        programmingLanguages: "プログラミング言語",
        frontend: "フロントエンド",
        backendApis: "バックエンド & API",
        deployment: "デプロイ & 配信環境",
        dataInfrastructure: "データ & クラウドインフラ",
        spokenLanguages: "言語能力",
      },
      spokenAmharic: {
        name: "アムハラ語 (Amharic)",
        proficiency: "ネイティブ",
        subtitle: "母国語 · 読み書き・会話ともに完全なネイティブレベル",
      },
      spokenEnglish: {
        name: "英語 (English)",
        proficiency: "ビジネス実務レベル",
        subtitle: "技術文書の作成およびグローバル協業における高い実務運用能力",
      },
    },
    projects: {
      sectionTitle: "注目のプロジェクト",
      visitProject: "プロジェクトを見る",
      items: [
        {
          title: "YOM Technology",
          tag: "Webアプリ",
          description: "ソフトウェアエンジニアリング企業の公式Webサイト。技術サービス、デジタルソリューション、実用的な開発アプローチを紹介。",
        },
        {
          title: "Lewi 歯科クリニック管理システム",
          tag: "医療・ヘルスケア",
          description: "専門歯科クリニックの日常業務、予約、患者記録を一元化し、ペーパーレスかつ高効率な診療オペレーションを実現するWebシステム。",
        },
        {
          title: "BITS College",
          tag: "教育機関ポータル",
          description: "システム＆テクノロジースクールの公式サイト。ソフトウェア工学プログラム、入学案内、学術情報を発信。",
        },
        {
          title: "Sheba Extensionz",
          tag: "Eコマース",
          description: "高級ヘアエクステンションブランドのデジタルストアフロント。上質な世界観と商品カタログを提供。",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "Webアプリ",
          description: "オンライン予約とスムーズな問い合わせ機能を備えた、洗練されたモダン歯科医院向けプラットフォーム。",
        },
        {
          title: "課題・障害管理システム",
          tag: "Webアプリ",
          description: "開発チームと運用チーム間の課題追跡、進捗管理、迅速な問題解決を支援するワークフローシステム。",
        },
      ],
    },
    certificates: {
      sectionTitle: "受賞歴 & 認定資格",
      sectionSubtitle: "修了した公式認定資格および専門アカデミックプログラムの一覧です。",
      prev: "前の認定証",
      next: "次の認定証",
      items: [
        { title: "Android デベロッパー基礎", subtitle: "Udacity" },
        { title: "人工知能 (AI) 認定", subtitle: "Udacity" },
        { title: "データ分析ファンダメンタルズ", subtitle: "Udacity" },
        { title: "プログラミング基礎", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "スタンフォード大学" },
        { title: "ALX プロフェッショナル基盤認定", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "お問い合わせ・協業のご相談",
      heading: "新しいプロジェクトのご相談や技術提携をお考えですか？",
      description: "新たな機会、フルスタック製品開発、技術的なパートナーシップについていつでもお気軽にご相談ください。",
      getInTouch: "お問い合わせ",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      craftedWith: "制作環境:",
    },
  },

  ru: {
    nav: {
      skipToContent: "Перейти к содержанию",
      toggleTheme: "Переключить тему",
      selectLanguage: "Выбрать язык",
    },
    hero: {
      availableForWork: "Открыт для предложений",
      role: "Инженер-программист и Full-Stack разработчик",
      bioP1: "Здравствуйте, я Нафанаил Тамират (Nathenael Tamirat). Я увлечен созданием программного обеспечения, которое превращает смелые идеи в практичные решения. Мой путь в разработку начался в 2018 году со знакомства с HTML, CSS и JavaScript в школе. Простое любопытство к устройству веб-сайтов со временем переросло в глубокую преданность инженерному делу.",
      bioP2: "Сегодня я сосредоточен на развитии своих инженерных навыков, создании реальных масштабируемых систем и поиске технологических решений для повседневных задач. В настоящее время я работаю над созданием собственной софтверной компании, проектирую продукты, сотрудничаю с командами и постоянно совершенствую мастерство.",
    },
    experience: {
      sectionTitle: "Опыт работы",
      viewProof: "Подтверждение работы",
      visitLewi: "Открыть систему Lewi Dental",
      items: [
        {
          role: "Фриланс-разработчик ПО",
          company: "Частная практика",
          locationOrType: "Гибридный формат",
          duration: "Авг 2026 — Настоящее время · 3 мес",
          description: "Разработал комплексную систему управления стоматологической клиникой для Lewi Speciality Dental Clinic, оцифровав медицинские, административные и операционные процессы на единой веб-платформе.",
        },
        {
          role: "Инженер-программист",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "Стажировка · Аддис-Абеба, Эфиопия · Гибрид",
          duration: "Июл 2026 — Настоящее время · 4 мес",
          description: "Участие в проектировании программных решений и создании масштабируемых веб-приложений, работа в agile-командах над реализацией цифровых продуктов.",
        },
        {
          role: "Технический руководитель (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "Аддис-Абеба, Эфиопия · Очно",
          duration: "Сен 2025 — Сен 2026 · 1 год 1 мес",
          description: "Организация технических семинаров и конференций, руководство студенческими программами разработки ПО в рамках Google Developer Groups on Campus.",
        },
        {
          role: "Frontend-разработчик",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "Аддис-Абеба, Эфиопия",
          duration: "Янв 2025 — Май 2025 · 5 мес",
          description: "Создание и поддержка более 5 веб-сайтов портфолио для юристов на React, Tailwind CSS и TypeScript с современным и отзывчивым интерфейсом.",
        },
      ],
    },
    events: {
      sectionTitle: "Организованные мероприятия и лидерство",
      sectionSubtitle: "Конференции для разработчиков, практические воркшопы и мероприятия сообщества, которые я организовал и провел в качестве технического руководителя GDG on Campus - BITS College.",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "Официальное открытие и приветственное мероприятие",
          role: "Технический лидер и организатор",
          description: "Организовал и провел официальное открытие клуба GDG on Campus в BITS College в соответствии с миссией Объединять, Обучать и Развивать.",
        },
        {
          title: "Break The Pattern — Объединенный технологический саммит",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "Ведущий соорганизатор",
          description: "Соорганизатор межвузовского саммита разработчиков, объединившего университетские сообщества и IT-компании для докладов и нетворкинга.",
        },
        {
          title: "Практические воркшопы по кодингу и наставничество",
          subtitle: "Компьютерная лаборатория BITS College",
          role: "Спикер и технический наставник",
          description: "Проведение практических занятий по разработке, разбору системной архитектуры и менторство для студентов инженерных специальностей.",
        },
        {
          title: "Хакатон Cursor AI в Эфиопии",
          subtitle: "Innobiz-K × Telebirr × AAU",
          role: "Участник и разработчик",
          description: "Совместная разработка с инженерами на первом хакатоне Cursor AI в Аддис-Абебе, тестирование AI-ассистированных full-stack процессов.",
        },
        {
          title: "Виртуальные лекции и индустриальные вебинары",
          subtitle: "Онлайн-серия GDG on Campus",
          role: "Ведущий и модератор",
          description: "Проведение живых вебинаров с ведущими инженерами отрасли (при участии приглашенного спикера Абеля Хубены).",
        },
      ],
    },
    skills: {
      sectionTitle: "Навыки и стек технологий",
      sectionSubtitle: "Обзор языков программирования, фреймворков, облачных сервисов и сред развертывания, которые я использую в работе.",
      categories: {
        programmingLanguages: "Языки программирования",
        frontend: "Frontend",
        backendApis: "Backend и API",
        deployment: "Развертывание и доставка",
        dataInfrastructure: "Данные и инфраструктура",
        spokenLanguages: "Языки общения",
      },
      spokenAmharic: {
        name: "Амхарский (Amharic)",
        proficiency: "Родной язык",
        subtitle: "Родной язык · Свободное владение устной и письменной речью",
      },
      spokenEnglish: {
        name: "Английский (English)",
        proficiency: "Профессиональный рабочий уровень",
        subtitle: "Профессиональная беглость для технической документации и международного сотрудничества",
      },
    },
    projects: {
      sectionTitle: "Избранные проекты",
      visitProject: "Перейти к проекту",
      items: [
        {
          title: "YOM Technology",
          tag: "Веб-приложение",
          description: "Корпоративный сайт компании по разработке ПО — демонстрация услуг, решений, технологий и практического подхода к решению бизнес-задач.",
        },
        {
          title: "Управление стоматологией Lewi",
          tag: "Медицинская система",
          description: "Медицинская система для Lewi Speciality Dental Clinic, объединяющая клинические и организационные процессы в централизованной платформе.",
        },
        {
          title: "BITS College",
          tag: "Официальный сайт",
          description: "Официальный сайт Школы систем и технологий с программами по программной инженерии и условиями поступления.",
        },
        {
          title: "Sheba Extensionz",
          tag: "Электронная коммерция",
          description: "Премиальная цифровая витрина для роскошных наращиваний волос, связывающая клиентов с брендом.",
        },
        {
          title: "Стоматология Nahom Dental Clinic",
          tag: "Веб-приложение",
          description: "Современная платформа стоматологической клиники с системой онлайн-записи на прием для пациентов.",
        },
        {
          title: "Система управления инцидентами",
          tag: "Веб-приложение",
          description: "Система отслеживания и оперативного решения задач и инцидентов для команд разработки и операций.",
        },
      ],
    },
    certificates: {
      sectionTitle: "Награды и сертификаты",
      sectionSubtitle: "Подборка подтвержденных сертификатов и завершенных академических программ.",
      prev: "Предыдущие сертификаты",
      next: "Следующие сертификаты",
      items: [
        { title: "Android Developer Fundamentals", subtitle: "Udacity" },
        { title: "Искусственный интеллект", subtitle: "Udacity" },
        { title: "Основы анализа данных", subtitle: "Udacity" },
        { title: "Основы программирования", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "Стэнфордский университет" },
        { title: "ALX - Профессиональный фундамент", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "Давайте общаться",
      heading: "Есть проект или хотите сотрудничать?",
      description: "Я всегда открыт для обсуждения новых возможностей, full-stack разработки продуктов или технического партнерства. Не стесняйтесь обращаться напрямую.",
      getInTouch: "Связаться",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Все права защищены.",
      craftedWith: "Разработано на",
    },
  },

  pt: {
    nav: {
      skipToContent: "Pular para o conteúdo",
      toggleTheme: "Alternar tema",
      selectLanguage: "Mudar idioma",
    },
    hero: {
      availableForWork: "Disponível para trabalho",
      role: "Engenheiro de Software e Desenvolvedor Full-Stack",
      bioP1: "Olá, sou Nathenael Tamirat. Sou apaixonado por criar softwares que transformam ideias em soluções práticas e de alto impacto. Minha jornada no desenvolvimento começou em 2018 ao aprender HTML, CSS e JavaScript na escola. O que começou como curiosidade evoluiu para um profundo compromisso com a engenharia de software.",
      bioP2: "Hoje, estou focado em aprimorar minhas habilidades técnicas, desenvolver projetos de produção e explorar maneiras de aplicar tecnologia na resolução de desafios diários. Atualmente, trabalho rumo à fundação da minha própria empresa de software, enquanto desenvolvo produtos, colaboro com outros talentos e evoluo continuamente como desenvolvedor.",
    },
    experience: {
      sectionTitle: "Experiência profissional",
      viewProof: "Ver Prova de Trabalho",
      visitLewi: "Acessar Sistema Lewi Dental",
      items: [
        {
          role: "Desenvolvedor de Software Freelancer",
          company: "Autônomo",
          locationOrType: "Híbrido",
          duration: "Ago 2026 — Presente · 3 meses",
          description: "Desenvolvi um sistema abrangente de gestão clínica para a Lewi Speciality Dental Clinic, digitalizando fluxos clínicos, administrativos e operacionais em uma plataforma web centralizada para otimizar o atendimento ao paciente.",
        },
        {
          role: "Engenheiro de Software",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "Estágio · Adis Abeba, Etiópia · Híbrido",
          duration: "Jul 2026 — Presente · 4 meses",
          description: "Contribuição no desenvolvimento de aplicações web de produção e soluções de engenharia de software, colaborando em equipes ágeis.",
        },
        {
          role: "Líder Técnico (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "Adis Abeba, Etiópia · Presencial",
          duration: "Set 2025 — Set 2026 · 1 ano 1 mês",
          description: "Organização de workshops e palestras técnicas, liderança de programas estudantis de desenvolvimento de software no Google Developer Groups on Campus.",
        },
        {
          role: "Desenvolvedor Frontend",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "Adis Abeba, Etiópia",
          duration: "Jan 2025 — Mai 2025 · 5 meses",
          description: "Construção e suporte de mais de 5 sites de portfólio para advogados com React, Tailwind CSS e TypeScript, com alto padrão de acessibilidade.",
        },
      ],
    },
    events: {
      sectionTitle: "Eventos organizados e liderança técnica",
      sectionSubtitle: "Conferências de desenvolvedores, workshops técnicos e eventos comunitários que organizei, apresentei e liderei como Líder Técnico no GDG on Campus - BITS College.",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "Evento Oficial de Lançamento e Boas-Vindas",
          role: "Líder Técnico e Organizador",
          description: "Organização e apresentação do evento de lançamento do GDG on Campus no BITS College com a missão de Conectar, Aprender e Desenvolver.",
        },
        {
          title: "Break The Pattern — Cúpula Tecnológica Conjunta",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "Co-organizador Líder",
          description: "Co-organização de cúpula intercampi reunindo núcleos universitários e empresas de tecnologia para palestras e networking.",
        },
        {
          title: "Workshops Práticos de Programação e Mentoria",
          subtitle: "Laboratório de Computação BITS College",
          role: "Palestrante e Mentor Técnico",
          description: "Condução de oficinas práticas de código e sessões de mentoria técnica para estudantes de engenharia.",
        },
        {
          title: "Hackathon Cursor AI Etiópia",
          subtitle: "Innobiz-K × Telebirr × AAU",
          role: "Participante e Colaborador",
          description: "Colaboração com engenheiros no primeiro Hackathon Cursor AI em Adis Abeba, testando fluxos full-stack potencializados por inteligência artificial.",
        },
        {
          title: "Webinars Técnicos e Painéis com a Indústria",
          subtitle: "Série Online GDG on Campus",
          role: "Apresentador e Moderador",
          description: "Apresentação de webinars ao vivo com líderes de engenharia (com o convidado especial Abel Hubena).",
        },
      ],
    },
    skills: {
      sectionTitle: "Habilidades e Stack Tecnológica",
      sectionSubtitle: "Um panorama das linguagens de programação, frameworks, serviços em nuvem e ambientes de implantação em produção com os quais trabalho.",
      categories: {
        programmingLanguages: "Linguagens de Programação",
        frontend: "Frontend",
        backendApis: "Backend e APIs",
        deployment: "Implantação e Distribuição",
        dataInfrastructure: "Dados e Infraestrutura",
        spokenLanguages: "Idiomas Falados",
      },
      spokenAmharic: {
        name: "Amárico (Amharic)",
        proficiency: "Nativo",
        subtitle: "Língua materna · Fluência nativa completa falada e escrita",
      },
      spokenEnglish: {
        name: "Inglês (English)",
        proficiency: "Proficiência Profissional Plena",
        subtitle: "Fluência profissional para escrita técnica e colaboração internacional",
      },
    },
    projects: {
      sectionTitle: "Projetos em Destaque",
      visitProject: "Ver Projeto",
      items: [
        {
          title: "YOM Technology",
          tag: "Web App",
          description: "Website institucional para empresa de engenharia de software — apresentando serviços, arquiteturas e soluções digitais inovadoras.",
        },
        {
          title: "Gestão Clínica Lewi Dental",
          tag: "Sistema de Saúde",
          description: "Sistema web abrangente para digitalização operacional e otimização dos processos clínicos e de atendimento odontológico.",
        },
        {
          title: "BITS College",
          tag: "Portal Web",
          description: "Website oficial da Escola de Sistemas e Tecnologia com informações acadêmicas e cursos de engenharia de software.",
        },
        {
          title: "Sheba Extensionz",
          tag: "E-commerce",
          description: "Loja virtual moderna para extensões capilares de luxo, conectando clientes a um design sofisticado.",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "Web App",
          description: "Plataforma odontológica moderna com agendamento online e atendimento ágil aos pacientes.",
        },
        {
          title: "Sistema de Gestão de Chamados",
          tag: "Web App",
          description: "Sistema para monitoramento e resolução eficiente de incidentes entre equipes de engenharia e operações.",
        },
      ],
    },
    certificates: {
      sectionTitle: "Prêmios e Certificações",
      sectionSubtitle: "Uma seleção de certificações verificadas e programas acadêmicos concluídos com sucesso.",
      prev: "Certificados anteriores",
      next: "Certificados seguintes",
      items: [
        { title: "Fundamentos de Desenvolvimento Android", subtitle: "Udacity" },
        { title: "Inteligência Artificial", subtitle: "Udacity" },
        { title: "Fundamentos de Análise de Dados", subtitle: "Udacity" },
        { title: "Fundamentos de Programação", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "Universidade de Stanford" },
        { title: "ALX - Fundações Profissionais", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "Vamos Conversar",
      heading: "Tem um projeto em mente ou deseja colaborar?",
      description: "Estou sempre aberto a novas oportunidades, desenvolvimento de produtos full-stack ou parcerias técnicas. Sinta-se à vontade para entrar em contato.",
      getInTouch: "Fale Comigo",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      craftedWith: "Desenvolvido com",
    },
  },

  ko: {
    nav: {
      skipToContent: "본문 바로가기",
      toggleTheme: "테마 전환",
      selectLanguage: "언어 변경",
    },
    hero: {
      availableForWork: "프로젝트 및 협업 가능",
      role: "소프트웨어 엔지니어 & 풀스택 개발자",
      bioP1: "안녕하세요, 나타나엘 타미라트(Nathenael Tamirat)입니다. 혁신적인 아이디어를 실용적인 디지털 솔루션으로 구현하는 소프트웨어 엔지니어링에 열정을 쏟고 있습니다. 2018년 학교에서 HTML, CSS, JavaScript를 접하며 개발에 입문하였으며, 웹의 작동 원리에 대한 호기심으로 시작된 여정은 견고한 소프트웨어 개발에 대한 깊은 열정으로 성장했습니다.",
      bioP2: "현재 저는 기술 역량을 강화하고 실사용자 중심의 실전 프로젝트를 구축하며, 기술을 통해 현실 세계의 문제를 해결하는 데 집중하고 있습니다. 자체 소프트웨어 기업 창업을 목표로 다양한 프로덕트를 개발하고 동료들과 협업하며 지속적으로 성장해 나가고 있습니다.",
    },
    experience: {
      sectionTitle: "경력 및 실무 경험",
      viewProof: "작업 증빙 보기",
      visitLewi: "Lewi 치과 시스템 방문",
      items: [
        {
          role: "프리랜서 소프트웨어 개발자",
          company: "개인 사업",
          locationOrType: "하이브리드",
          duration: "2026년 8월 — 현재 · 3개월",
          description: "Lewi 전문 치과 클리닉을 위한 통합 치과 관리 시스템을 개발하여, 일상 진료 운영 및 환자 케어 프로세스를 간소화하도록 맞춤 제작된 중앙 집중식 웹 플랫폼에 임상, 행정 및 운영 워크플로우를 디지털화했습니다.",
        },
        {
          role: "소프트웨어 엔지니어",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "인턴십 · 에티오피아 아디스아바바 · 하이브리드",
          duration: "2026년 7월 — 현재 · 4개월",
          description: "애자일 개발 팀과 협업하여 엔터프라이즈급 프로덕션 웹 애플리케이션을 구축하고 안정적인 디지털 소프트웨어 솔루션을 구현했습니다.",
        },
        {
          role: "테크니컬 리드 (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "에티오피아 아디스아바바 · 온사이트",
          duration: "2025년 9월 — 2026년 9월 · 1년 1개월",
          description: "Google Developer Groups on Campus의 리더로서 기술 워크숍 및 세미나를 기획·주최하고 학생 개발자 커뮤니티 육성을 주도했습니다.",
        },
        {
          role: "프론트엔드 개발자",
          company: "Tamirat Bizuneh Legal Service",
          locationOrType: "에티오피아 아디스아바바",
          duration: "2025년 1월 — 2025년 5월 · 5개월",
          description: "React, Tailwind CSS, TypeScript를 사용하여 변호사들을 위한 5개 이상의 전문 웹사이트를 제작 및 유지보수하여 접근성과 반응성이 뛰어난 인터페이스를 제공했습니다.",
        },
      ],
    },
    events: {
      sectionTitle: "주최 및 주도한 기술 행사",
      sectionSubtitle: "GDG on Campus - BITS College의 테크니컬 리드 및 커뮤니티 이니셔티브로서 기획, 주최, 진행한 개발자 컨퍼런스, 기술 워크숍 및 멘토링 세션입니다.",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "공식 출범 및 웰컴 이벤트",
          role: "테크니컬 리드 & 총괄 기획자",
          description: "BITS College 내 GDG on Campus 개발자 커뮤니티의 공식 출범식과 웰컴 행사를 주최하고 진행했습니다.",
        },
        {
          title: "Break The Pattern — 연합 테크 서밋",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "공동 총괄 주최자",
          description: "대학 개발자 챕터와 기술 기업들이 모여 기조연설, 패널 토론, 네트워킹을 진행한 다각적 테크 서밋을 공동 기획했습니다.",
        },
        {
          title: "실전 코딩 워크숍 & 연구실 멘토링",
          subtitle: "BITS College 컴퓨터 실습실",
          role: "강연자 & 기술 멘토",
          description: "후배 공학도들을 위해 실전 코딩 워크숍, 아키텍처 분석 및 1:1 기술 멘토링 세션을 진행했습니다.",
        },
        {
          title: "Cursor AI 해커톤 에티오피아",
          subtitle: "Innobiz-K × Telebirr × 아디스아바바 대학교",
          role: "참가자 & 협력 개발자",
          description: "아디스아바바에서 개최된 Cursor AI 해커톤에 참가하여 최신 AI 지원 풀스택 개발 워크플로우를 테스트 및 구현했습니다.",
        },
        {
          title: "온라인 기술 세미나 & 산업 웨비나",
          subtitle: "GDG on Campus 온라인 시리즈",
          role: "진행자 & 모더레이터",
          description: "업계 엔지니어링 리더(초청 연사 Abel Hubena)와 함께 실시간 웨비나를 진행하여 진로 및 기술 멘토링을 제공했습니다.",
        },
      ],
    },
    skills: {
      sectionTitle: "보유 기술 및 기술 스택",
      sectionSubtitle: "실제 프로덕션 환경에서 활용하는 프로그래밍 언어, 프레임워크, 클라우드 인프라 및 배포 플랫폼의 상세 개요입니다.",
      categories: {
        programmingLanguages: "프로그래밍 언어",
        frontend: "프론트엔드",
        backendApis: "백엔드 & API",
        deployment: "배포 & 릴리즈 플랫폼",
        dataInfrastructure: "데이터 & 인프라",
        spokenLanguages: "구사 가능 언어",
      },
      spokenAmharic: {
        name: "암하라어 (Amharic)",
        proficiency: "원어민 수준",
        subtitle: "모국어 · 읽기, 쓰기 및 회화 완벽 구사",
      },
      spokenEnglish: {
        name: "영어 (English)",
        proficiency: "비즈니스 실무 영어",
        subtitle: "기술 문서 작성 및 글로벌 팀 협업에 능통한 전문 실무 회화",
      },
    },
    projects: {
      sectionTitle: "주요 프로젝트",
      visitProject: "프로젝트 방문",
      items: [
        {
          title: "YOM Technology",
          tag: "웹 애플리케이션",
          description: "소프트웨어 엔지니어링 기업 공식 웹사이트 — 서비스, 아키텍처 및 실전 비즈니스 문제를 해결하는 디지털 솔루션을 소개.",
        },
        {
          title: "Lewi 치과 클리닉 관리 시스템",
          tag: "헬스케어 시스템",
          description: "치과 전문 병원의 예약, 임상 차트, 행정 업무를 디지털화하여 효율적인 진료 운영을 지원하는 종합 플랫폼.",
        },
        {
          title: "BITS College",
          tag: "공식 포털",
          description: "시스템 및 기술 대학 공식 웹사이트로, 소프트웨어 엔지니어링 프로그램 및 입학 정보를 제공.",
        },
        {
          title: "Sheba Extensionz",
          tag: "이커머스",
          description: "프리미엄 럭셔리 헤어 익스텐션 브랜드의 디지털 스토어로 우아한 쇼핑 경험을 선사.",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "웹 애플리케이션",
          description: "환자가 쉽게 접근할 수 있는 온라인 예약 및 안내 기능을 갖춘 모던 덴탈 케어 웹 플랫폼.",
        },
        {
          title: "이슈 및 결함 관리 시스템",
          tag: "웹 애플리케이션",
          description: "엔지니어링 팀 전반의 버그 추적, 업무 처리 및 생산성 최적화를 지원하는 시스템.",
        },
      ],
    },
    certificates: {
      sectionTitle: "수상 내역 및 공인 인증",
      sectionSubtitle: "이수한 공인 전문 인증 및 학술 교육 프로그램 모음입니다.",
      prev: "이전 인증서",
      next: "다음 인증서",
      items: [
        { title: "안드로이드 개발자 핵심 기초", subtitle: "Udacity" },
        { title: "인공지능 (AI) 전문가 인증", subtitle: "Udacity" },
        { title: "데이터 분석 기초 과정", subtitle: "Udacity" },
        { title: "프로그래밍 기초", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "스탠퍼드 대학교" },
        { title: "ALX - 프로페셔널 파운데이션", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "함께 협업하기",
      heading: "새로운 프로젝트 아이디어가 있거나 기술 협업을 원하시나요?",
      description: "새로운 기회, 풀스택 제품 개발 및 기술 파트너십에 대해 언제든 열려 있습니다. 편하게 연락해 주세요.",
      getInTouch: "문의하기",
      telegram: "Telegram",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      craftedWith: "제작 기술:",
    },
  },

  am: {
    nav: {
      skipToContent: "ወደ ዋናው ይዘት ይለፉ",
      toggleTheme: "ገጽታ ይቀይሩ",
      selectLanguage: "ቋንቋ ይምረጡ",
    },
    hero: {
      availableForWork: "ለስራ ክፍት",
      role: "የሶፍትዌር መሃንዲስ እና የሙሉ-ስታክ አልሚ",
      bioP1: "ሰላም፣ ናትናኤል ታምራት እባላለሁ። ሃሳቦችን ወደ ተግባራዊ መፍትሄዎች የሚቀይሩ ሶፍትዌሮችን በመገንባት ከፍተኛ ፍላጎት አለኝ። ወደ ሶፍትዌር አልሚነት የጀመርኩት ጉዞ በ2018 ዓ.ም በትምህርት ቤት ውስጥ HTML፣ CSS እና JavaScript ከተዋወቅኩበት ጊዜ ጀምሮ ነው። ድረ-ገጾች እንዴት እንደሚሰሩ በመጠየቅ የተጀመረው ጉጉት ቀስ በቀስ ወደ ጥልቅ የሶፍትዌር ምህንድስና ፍቅር አድጓል።",
      bioP2: "ዛሬ ላይ ችሎታዬን በማዳበር፣ በእውነተኛው ዓለም ላይ ተጨባጭ ለውጥ የሚያመጡ ፕሮጀክቶችን በመገንባት እና ቴክኖሎጂ የዕለት ተዕለት ችግሮችን እንዴት መፍታት እንደሚችል በመመርመር ላይ አተኩራለሁ። ምርቶችን በማበልፀግ፣ ከሌሎች ጋር በመተባበር እና በየጊዜው ራሴን በማሻሻል የራሴን የሶፍትዌር ኩባንያ ለማቋቋም እየሰራሁ እገኛለሁ።",
    },
    experience: {
      sectionTitle: "የስራ ልምድ",
      viewProof: "የስራ ማስረጃ ይመልከቱ",
      visitLewi: "የሌዊ የጥርስ ሲስተም ይጎብኙ",
      items: [
        {
          role: "የግል ነፃ የሶፍትዌር አልሚ",
          company: "በግል ተቀጣሪ",
          locationOrType: "ድብልቅ (Hybrid)",
          duration: "ነሐሴ 2026 — አሁን · 3 ወራት",
          description: "ለሌዊ የጥርስ ህክምና ክሊኒክ የተሟላ የክሊኒክ አስተዳደር ስርዓት በማበልፀግ፣ ክሊኒካዊ፣ አስተዳደራዊ እና ዕለታዊ የስራ ሂደቶችን በአንድ ማዕከላዊ የድረ-ገጽ መድረክ ላይ በማካተት ታካሚዎችን በተሻለ ሁኔታ ማስተናገድ የሚያስችል ሲስተም ገንብቻለሁ።",
        },
        {
          role: "የሶፍትዌር መሃንዲስ",
          company: "Mentor Knowledge Solutions PLC",
          locationOrType: "ልምምድ · አዲስ አበባ፣ ኢትዮጵያ · ድብልቅ",
          duration: "ሐምሌ 2026 — አሁን · 4 ወራት",
          description: "በተግባራዊ የሶፍትዌር ምህንድስና መፍትሄዎች ላይ በመሳተፍ፣ ዘመናዊ የድር መተግበሪያዎችን በማዘጋጀት እና በአጃይል ቡድኖች ውስጥ በመተባበር አስተማማኝ ዲጂታል መፍትሄዎችን መገንባት።",
        },
        {
          role: "ቴክኒካል መሪ (Technical Lead)",
          company: "GDG on Campus - BITS College",
          locationOrType: "አዲስ አበባ፣ ኢትዮጵያ · በቦታው",
          duration: "መስከረም 2025 — መስከረም 2026 · 1 ዓመት ከ1 ወር",
          description: "ከባልደረቦች ጋር በመተባበር የቴክኒክ አውደ ጥናቶችን እና ዝግጅቶችን በማዘጋጀት እንዲሁም የሶፍትዌር ልማት ተነሳሽነቶችን በመምራት የተማሪዎችን አቅም ማጎልበት።",
        },
        {
          role: "የፊት-ለፊት አልሚ (Frontend Developer)",
          company: "ታምራት ብዙነህ የህግ አገልግሎት",
          locationOrType: "አዲስ አበባ፣ ኢትዮጵያ",
          duration: "ጥር 2025 — ግንቦት 2025 · 5 ወራት",
          description: "React፣ Tailwind CSS እና TypeScript በመጠቀም ለህግ ባለሙያዎች ከ5 በላይ ዘመናዊ እና ምቹ የሆኑ የፖርትፎሊዮ ድረ-ገጾችን በመገንባትና በማስተዳደር ሰርቻለሁ።",
        },
      ],
    },
    events: {
      sectionTitle: "ያዘጋጀኋቸው እና የመራኋቸው ዝግጅቶች",
      sectionSubtitle: "በGDG on Campus - BITS College እና በማህበረሰብ ተነሳሽነቶች ውስጥ እንደ ቴክኒካል መሪ ያዘጋጀኋቸው፣ ያስተናገድኳቸው እና የመራኋቸው የገንቢዎች ኮንፈረንሶች፣ የኮዲንግ አውደ ጥናቶች እና ዝግጅቶች።",
      items: [
        {
          title: "Google Developer Groups on Campus — BITS College",
          subtitle: "ይፋዊ የማስጀመሪያ እና አቀባበል ፕሮግራም",
          role: "ቴክኒካል መሪ እና አዘጋጅ",
          description: "በBITS College ውስጥ የGDG on Campus ክለብን 'መገናኘት፣ መማር እና ማበልፀግ' በሚል መሪ ቃል ይፋዊ የማስጀመሪያ እና የአቀባበል ዝግጅትን ማዘጋጀት እና ማስተናገድ።",
        },
        {
          title: "Break The Pattern — የጋራ የቴክኖሎጂ ጉባኤ",
          subtitle: "BITS × HiLCoE × Notion × Dala Studio",
          role: "ዋና አስተባባሪ",
          description: "የዩኒቨርሲቲ ክለቦችን እና የቴክኖሎጂ ኩባንያዎችን በማሰባሰብ የገንቢዎች ጉባኤን፣ የፓናል ውይይቶችን እና የኔትወርክ መድረኮችን በጋራ ማዘጋጀት።",
        },
        {
          title: "ተግባራዊ የኮዲንግ አውደ ጥናት እና የላብራቶሪ ስልጠና",
          subtitle: "የBITS College ኮምፒውተር ላብራቶሪ",
          role: "አቅራቢ እና ቴክኒካል አማካሪ",
          description: "ለጀማሪ መሃንዲስ ተማሪዎች ተግባራዊ የኮዲንግ ስልጠናዎችን፣ የስርዓት ግንባታ ማሳያዎችን እና የልምድ ልውውጥ ክፍለ-ጊዜዎችን መስጠት።",
        },
        {
          title: "የCursor AI ሀካቶን ኢትዮጵያ",
          subtitle: "Innobiz-K × ቴሌብር × አዲስ አበባ ዩኒቨርሲቲ",
          role: "ተሳታፊ እና አልሚ",
          description: "በአዲስ አበባ በተካሄደው የቀዳሚው የCursor AI ሀካቶን ላይ ከሌሎች መሃንዲሶች ጋር በመተባበር በAI የሚታገዙ የሙሉ-ስታክ አሰራሮችን መገንባት እና መሞከር።",
        },
        {
          title: "የኦንላይን የቴክኖሎጂ ውይይቶች እና ዌቢናሮች",
          subtitle: "የGDG on Campus የኦንላይን ተከታታይ ዝግጅቶች",
          role: "አወያይ እና አዘጋጅ",
          description: "ከኢንዱስትሪው አንጋፋ መሃንዲሶች (ከእንግዳ አቅራቢ አቤል ሁበና ጋር) የቀጥታ ዌቢናሮችን በማዘጋጀት የሙያ እና የቴክኒክ ምክሮችን ማጋራት።",
        },
      ],
    },
    skills: {
      sectionTitle: "ክህሎቶች እና ቴክኖሎጂዎች",
      sectionSubtitle: "ስራዎችን ለማከናወን የምጠቀምባቸው የፕሮግራሚንግ ቋንቋዎች፣ ፍሬምዎርኮች፣ የክላውድ አገልግሎቶች እና የማሰማሪያ መድረኮች ዝርዝር።",
      categories: {
        programmingLanguages: "የፕሮግራሚንግ ቋንቋዎች",
        frontend: "የፊት-ለፊት ቴክኖሎጂዎች (Frontend)",
        backendApis: "የጀርባ ቴክኖሎጂዎች እና APIs",
        deployment: "ማሰማሪያ እና ማሰራጫ",
        dataInfrastructure: "መረጃ እና የመሰረተ-ልማት አውታር",
        spokenLanguages: "የመግባቢያ ቋንቋዎች",
      },
      spokenAmharic: {
        name: "አማርኛ (Amharic)",
        proficiency: "አፍ መፍቻ ቋንቋ (Native)",
        subtitle: "የእናት ቋንቋ · በመናገር እና በመጻፍ የተሟላ የተፈጥሮ ክህሎት",
      },
      spokenEnglish: {
        name: "እንግሊዝኛ (English)",
        proficiency: "ከፍተኛ የሙያ ብቃት",
        subtitle: "ለቴክኒካዊ ጽሁፎች እና ለአለም አቀፍ ትብብር ሙሉ የስራ ብቃት",
      },
    },
    projects: {
      sectionTitle: "ተለይተው የቀረቡ ፕሮጀክቶች",
      visitProject: "ፕሮጀክቱን ይመልከቱ",
      items: [
        {
          title: "YOM Technology",
          tag: "የድር መተግበሪያ",
          description: "ለሶፍትዌር ምህንድስና ድርጅት የተሰራ የኩባንያ ድረ-ገጽ — አገልግሎቶችን፣ መፍትሄዎችን እና ዘመናዊ ዲጂታል አሰራሮችን ያሳያል።",
        },
        {
          title: "የሌዊ የጥርስ ክሊኒክ አስተዳደር ስርዓት",
          tag: "የጤና አጠባበቅ ስርዓት",
          description: "የታካሚ ቀጠሮዎችን፣ የህክምና መዛግብትን እና አስተዳደራዊ ስራዎችን በአንድ ላይ የሚያስተዳድር ዘመናዊ የድር መድረክ።",
        },
        {
          title: "BITS College",
          tag: "የትምህርት ተቋም ድረ-ገጽ",
          description: "የሲስተምስ እና ቴክኖሎጂ ኮሌጅ ይፋዊ ድረ-ገጽ፣ የሶፍትዌር ምህንድስና እና የአይቲ ትምህርት መረጃዎችን ያቀርባል።",
        },
        {
          title: "Sheba Extensionz",
          tag: "የኤሌክትሮኒክስ ንግድ (E-commerce)",
          description: "ለከፍተኛ ጥራት የጸጉር ውጤቶች የተዘጋጀ የኦንላይን መደብር፣ ደንበኞችን ከብራንዱ ጋር የሚያገናኝ ማራኪ መድረክ።",
        },
        {
          title: "Nahom Dental Clinic",
          tag: "የድር መተግበሪያ",
          description: "የታካሚዎችን የኦንላይን ቀጠሮ እና ግንኙነት የሚያቀላጥፍ ዘመናዊ የጥርስ ህክምና መድረክ።",
        },
        {
          title: "የጉዳዮች አስተዳደር ስርዓት",
          tag: "የድር መተግበሪያ",
          description: "በምህንድስና ቡድኖች ውስጥ ቴክኒካዊ ችግሮችን ለመከታተል፣ ለማስተዳደር እና በፍጥነት ለመፍታት የሚያስችል ስርዓት።",
        },
      ],
    },
    certificates: {
      sectionTitle: "ሽልማቶች እና ሰርተፊኬቶች",
      sectionSubtitle: "የተረጋገጡ ሰርተፊኬቶች እና የተጠናቀቁ የትምህርት ፕሮግራሞች ስብስብ።",
      prev: "ቀደም ሲል ያሉ ሰርተፊኬቶች",
      next: "ቀጣይ ሰርተፊኬቶች",
      items: [
        { title: "የአንድሮይድ ልማት መሰረታዊያን", subtitle: "Udacity" },
        { title: "አርቴፊሻል ኢንተለጀንስ (AI)", subtitle: "Udacity" },
        { title: "የመረጃ ትንተና መሰረታዊያን", subtitle: "Udacity" },
        { title: "የፕሮግራሚንግ መሰረታዊያን", subtitle: "Udacity" },
        { title: "Code in Place", subtitle: "ስታንፎርድ ዩኒቨርሲቲ" },
        { title: "ALX - ሙያዊ ፋውንዴሽን", subtitle: "ALX" },
      ],
    },
    connect: {
      sectionTitle: "እንገናኝ",
      heading: "በአእምሮዎ የያዙት ፕሮጀክት አለ ወይስ አብረን መስራት ይፈልጋሉ?",
      description: "ለአዳዲስ የስራ እድሎች፣ ለሙሉ-ስታክ ምርት ልማት ወይም ለቴክኒካል አጋርነት ለመወያየት ሁልጊዜ ዝግጁ ነኝ። በቀጥታ ሊያገኙኝ ይችላሉ።",
      getInTouch: "ያግኙኝ",
      telegram: "ቴሌግራም",
      linkedin: "ሊንክድኢን",
    },
    footer: {
      rights: "መብቱ በህግ የተጠበቀ ነው።",
      craftedWith: "የተሰራው በ",
    },
  },
};
