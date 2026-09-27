/*  Akam team site — bilingual content (English / Persian).
 *
 *  Any user-visible string is written as { en: "...", fa: "..." }.
 *  Plain strings (URLs, technology names) are shown as-is in both languages.
 *  Keys are documented in README.md.
 */
window.SITE = {

  /* ---------------------------------------------------------- languages */

  languages: {
    en: { label: "EN", name: "English", dir: "ltr" },
    fa: { label: "فا", name: "فارسی",  dir: "rtl" }
  },
  defaultLang: "en",

  /* ------------------------------------------------- interface strings */

  ui: {
    skip:        { en: "Skip to content",     fa: "پرش به محتوا" },
    themeToggle: { en: "Switch colour theme", fa: "تغییر تم رنگی" },
    langToggle:  { en: "Switch language",     fa: "تغییر زبان" },

    nav: {
      label:    { en: "Sections", fa: "بخش‌ها" },
      services: { en: "Services", fa: "خدمات" },
      team:     { en: "Team",     fa: "تیم" },
      projects: { en: "Projects", fa: "پروژه‌ها" },
      kaggle:   { en: "Kaggle",   fa: "کگل" },
      contact:  { en: "Contact",  fa: "تماس" }
    },

    hero: {
      badge: { en: "AI services · identity verification · applied ML",
               fa: "خدمات هوش مصنوعی · احراز هویت · یادگیری ماشین کاربردی" }
    },

    buttons: {
      email:     { en: "Email us",  fa: "ایمیل بزنید" },
      github:    { en: "GitHub",    fa: "گیت‌هاب" },
      kaggle:    { en: "Kaggle",    fa: "کگل" },
      linkedin:  { en: "LinkedIn",  fa: "لینکدین" },
      portfolio: { en: "Portfolio", fa: "پورتفولیو" },
      website:   { en: "Website",   fa: "وب‌سایت" }
    },

    sections: {
      about: {
        kicker: { en: "01 — About", fa: "۰۱ — درباره" }
      },
      services: {
        kicker: { en: "02 — Services", fa: "۰۲ — خدمات" },
        title:  { en: "A KYC suite, built module by module",
                  fa: "یک سامانه‌ی احراز هویت، ماژول به ماژول" },
        lead:   { en: "Each module answers one question about an applicant and returns the same thing: a decision, a score, and the reasons behind it. They run on their own or together as one verification flow.",
                  fa: "هر ماژول به یک پرسش درباره‌ی متقاضی پاسخ می‌دهد و خروجی همه یکسان است: تصمیم، امتیاز، و دلیل‌های آن. ماژول‌ها هم مستقل کار می‌کنند و هم در قالب یک فرایند احراز هویت یکپارچه." },
        beyond: { en: "Beyond KYC", fa: "فراتر از احراز هویت" }
      },
      team: {
        kicker: { en: "03 — Team", fa: "۰۳ — تیم" },
        title:  { en: "The people behind Akam", fa: "اعضای آکام" }
      },
      projects: {
        kicker: { en: "04 — Work", fa: "۰۴ — نمونه‌کارها" },
        title:  { en: "Projects", fa: "پروژه‌ها" },
        lead:   { en: "Team projects and each member's own work, in one place. Filter by person or by topic; public repositories link straight to the source.",
                  fa: "پروژه‌های تیمی و کارهای شخصی هر عضو، یک‌جا. می‌توانید بر اساس فرد یا موضوع فیلتر کنید؛ ریپوهای عمومی مستقیم به سورس لینک شده‌اند." }
      },
      kaggle: {
        kicker: { en: "05 — Kaggle", fa: "۰۵ — کگل" },
        title:  { en: "Datasets, models & notebooks", fa: "دیتاست‌ها، مدل‌ها و نوت‌بوک‌ها" },
        lead:   { en: "Most of the training data and weights behind our projects are published on the members' Kaggle profiles — brain MRI volumes, ID-card and OCR sets, face data, and the models trained on them.",
                  fa: "بیشتر داده‌های آموزشی و وزن‌های مدل پشت پروژه‌های ما روی پروفایل‌های کگل اعضا منتشر شده‌اند: حجم‌های ام‌آرآی مغز، مجموعه‌های کارت شناسایی و OCR، داده‌ی چهره، و مدل‌هایی که روی آن‌ها آموزش دیده‌اند." }
      },
      contact: {
        kicker: { en: "06 — Contact", fa: "۰۶ — تماس" },
        title:  { en: "Have a verification problem? Let’s talk.",
                  fa: "مسئله‌ای در احراز هویت دارید؟ صحبت کنیم." },
        lead:   { en: "Email is the fastest way to reach the team. Company updates go out on LinkedIn.",
                  fa: "سریع‌ترین راه ارتباط با تیم، ایمیل است. اخبار شرکت در لینکدین منتشر می‌شود." }
      }
    },

    team: {
      honorary:   { en: "Honorary member", fa: "عضو افتخاری" },
      panelLabel: { en: "The team", fa: "تیم ما" }
    },

    projects: {
      all:        { en: "All", fa: "همه" },
      byMember:   { en: "People", fa: "افراد" },
      byTopic:    { en: "Topic", fa: "موضوع" },
      teamBadge:  { en: "Team project", fa: "پروژه‌ی تیمی" },
      empty:      { en: "No projects match those filters.", fa: "پروژه‌ای با این فیلترها پیدا نشد." },
      privateDefault: { en: "Private repository", fa: "مخزن خصوصی" },
      source:     { en: "Source", fa: "سورس" },
      demo:       { en: "Live demo", fa: "نسخه‌ی زنده" },
      memberFilterLabel: { en: "Filter projects by person", fa: "فیلتر پروژه‌ها بر اساس فرد" },
      topicFilterLabel:  { en: "Filter projects by topic",  fa: "فیلتر پروژه‌ها بر اساس موضوع" }
    },

    kaggle: {
      notebooks: { en: "Notebooks", fa: "نوت‌بوک" },
      models:    { en: "Models",    fa: "مدل" },
      datasets:  { en: "Datasets",  fa: "دیتاست" },
      selected:  { en: "Selected",  fa: "منتخب" },
      open:      { en: "Open profile", fa: "دیدن پروفایل" }
    },

    footer: {
      meta: { en: "Static site — no framework, no build step.",
              fa: "سایت استاتیک — بدون فریم‌ورک و بدون مرحله‌ی build." }
    }
  },

  /* -------------------------------------------------------- tag labels */

  tagLabels: {
    kyc:     { en: "KYC",              fa: "احراز هویت" },
    cv:      { en: "Computer Vision",  fa: "بینایی ماشین" },
    medical: { en: "Medical Imaging",  fa: "تصویربرداری پزشکی" },
    audio:   { en: "Audio",            fa: "صوت" },
    backend: { en: "Backend",          fa: "بک‌اند" },
    web:     { en: "Web",              fa: "وب" },
    agentic: { en: "Agentic AI",       fa: "هوش مصنوعی عامل‌محور" },
    data:    { en: "Data",             fa: "داده" }
  },

  /* ----------------------------------------------------------- company */

  company: {
    name:    { en: "Akam", fa: "آکام" },
    /*  Registered name — shown in the About section and the footer.  */
    legalName: { en: "Akam Intelligent Innovators", fa: "نوآوران هوشمند آکام" },
    wordmark: "assets/img/akam-wordmark.jpg",
    emblem:   "assets/img/akam-emblem.jpg",
    tagline: { en: "Practical AI solutions — from data to deployment.",
               fa: "راه‌حل‌های کاربردی هوش مصنوعی — از داده تا استقرار." },
    lead: {
      en: "We build identity-verification systems that stay fast on modest hardware, and take on applied AI problems in vision, speech and medical imaging.",
      fa: "سامانه‌های احراز هویتی می‌سازیم که روی سخت‌افزار معمولی هم سریع بمانند، و مسائل کاربردی هوش مصنوعی را در بینایی ماشین، گفتار و تصویربرداری پزشکی حل می‌کنیم."
    },

    links: {
      email:    "mailto:akamteam.ai@gmail.com",
      linkedin: "https://www.linkedin.com/company/akam-ai",
      github:   "https://github.com/akamteam-ai",
      /*  This site, served by GitHub Pages from the akamteam-ai account.
       *  Change it here and in index.html's og: tags if it moves to
       *  akamteam-ai.ir.  */
      website:  "https://akamteam-ai.github.io/"
    },

    aboutTitle: { en: "A small team with a narrow focus",
                  fa: "تیمی کوچک با تمرکزی مشخص" },
    about: [
      {
        en: "Akam Intelligent Innovators is an AI services company, registered as a limited liability company. Our main product is a KYC suite: the checks that sit between a person uploading an ID card and a selfie and an operator deciding to let them in.",
        fa: "آکام با نام ثبتی «نوآوران هوشمند آکام» یک شرکت خدمات هوش مصنوعی با مسئولیت محدود است. محصول اصلی ما یک سامانه‌ی احراز هویت (KYC) است: همه‌ی بررسی‌هایی که از لحظه‌ی بارگذاری کارت ملی و سلفی تا تصمیم اپراتور برای پذیرش کاربر انجام می‌شود."
      },
      {
        en: "We first competed together as Akam at the ICCKE 2022 challenge, where we took third place, and became a company in 2026. The members also bring their own work in medical imaging, speaker identification, face recognition and data products — you'll find it all in the projects below.",
        fa: "نخستین بار در چالش ICCKE 2022 با نام آکام کنار هم رقابت کردیم و رتبه‌ی سوم را به دست آوردیم، و در سال ۲۰۲۶ به یک شرکت تبدیل شدیم. اعضا کارهای شخصی خود را هم در تصویربرداری پزشکی، شناسایی گوینده، بازشناسی چهره و محصولات داده‌ای به تیم آورده‌اند — همه را در بخش پروژه‌ها می‌بینید."
      },
      {
        en: "How we build: train on GPUs, serve on CPUs, and never return a verdict without the reasons for it — so the system is cheap to run and a human reviewer can always see why.",
        fa: "روش کار ما: آموزش روی GPU، اجرا روی CPU، و هیچ حکمی بدون دلیلش — تا هزینه‌ی اجرای سامانه پایین بماند و کارشناس بازبینی همیشه ببیند چرا."
      }
    ],

    stats: [
      { value: "7",    label: { en: "KYC modules",               fa: "ماژول احراز هویت" } },
      { value: "4",    label: { en: "team members",              fa: "عضو تیم" } },
      { value: "40+",  label: { en: "public Kaggle datasets",    fa: "دیتاست عمومی در کگل" } },
      { value: { en: "3rd", fa: "سوم" }, label: { en: "place, ICCKE 2022 challenge", fa: "رتبه در چالش ICCKE 2022" } }
    ]
  },

  /* ---------------------------------------------------------- services */
  /*  The module list follows github.com/akamteam-ai/Akamteam_kyc.
   *  `cover` uses the same line motifs as the project cards.            */

  services: [
    {
      name: { en: "Document OCR", fa: "OCR مدارک" },
      description: { en: "Rectify an ID card photo, check its quality, locate each field and read it — with validation on the extracted values.",
                     fa: "صاف‌سازی عکس کارت شناسایی، بررسی کیفیت، یافتن تک‌تک فیلدها و خواندن آن‌ها — همراه با اعتبارسنجی مقادیر استخراج‌شده." },
      cover: "scan"
    },
    {
      name: { en: "Face Matching", fa: "تطبیق چهره" },
      description: { en: "Compare the face on the document with the selfie using deep face embeddings, and return a similarity score against a tunable threshold.",
                     fa: "مقایسه‌ی چهره‌ی روی مدرک با سلفی به کمک بردارهای عمیق چهره، و بازگرداندن امتیاز شباهت نسبت به یک آستانه‌ی قابل تنظیم." },
      cover: "network"
    },
    {
      name: { en: "Liveness Detection", fa: "تشخیص زنده‌بودن" },
      description: { en: "Confirm that a real person is in front of the camera at the moment of capture, not a recording.",
                     fa: "اطمینان از اینکه در لحظه‌ی تصویربرداری، یک انسان واقعی جلوی دوربین است و نه یک ویدئوی ضبط‌شده." },
      cover: "waveform"
    },
    {
      name: { en: "Anti-Spoofing", fa: "ضد جعل" },
      description: { en: "Detect presentation attacks — printed photos, screen replays and masks held up to the camera.",
                     fa: "تشخیص حمله‌های نمایشی — عکس چاپی، پخش تصویر از روی صفحه‌نمایش و ماسک جلوی دوربین." },
      cover: "layers"
    },
    {
      name: { en: "Face Quality", fa: "کیفیت چهره" },
      description: { en: "Check a face image against ISO/IEC 19794-5 style requirements — pose, lighting, occlusion — before it is used for matching.",
                     fa: "سنجش تصویر چهره بر اساس الزامات استاندارد ISO/IEC 19794-5 — زاویه‌ی سر، نور و پوشیدگی — پیش از استفاده در تطبیق." },
      cover: "track"
    },
    {
      name: { en: "Image Forensics", fa: "جرم‌شناسی تصویر" },
      description: { en: "Look for signs that a document or face image was edited or generated rather than captured.",
                     fa: "جست‌وجوی نشانه‌هایی که بگوید تصویر مدرک یا چهره ویرایش یا تولید شده است، نه اینکه واقعاً عکس‌برداری شده باشد." },
      cover: "stack"
    },
    {
      name: { en: "Voice Identification", fa: "شناسایی صدا" },
      description: { en: "Speaker embeddings that verify a voice against an enrolled speaker, and reject voices the system has never heard.",
                     fa: "بردارهای گوینده برای تطبیق صدا با گوینده‌ی ثبت‌شده، و رد کردن صداهایی که سامانه هرگز نشنیده است." },
      cover: "waveform"
    }
  ],

  beyond: [
    { name: { en: "Medical imaging", fa: "تصویربرداری پزشکی" },
      description: { en: "Classification, detection and segmentation on brain MRI and dental radiographs.",
                     fa: "دسته‌بندی، تشخیص و قطعه‌بندی روی ام‌آرآی مغز و رادیوگرافی دندان." } },
    { name: { en: "Agentic AI & data", fa: "هوش مصنوعی عامل‌محور و داده" },
      description: { en: "LLM assistants that answer from documents and databases through tool calls, with every claim traceable.",
                     fa: "دستیارهای مبتنی بر LLM که با فراخوانی ابزار از روی اسناد و پایگاه داده پاسخ می‌دهند و هر ادعایشان قابل ردیابی است." } },
    { name: { en: "Model serving", fa: "استقرار مدل" },
      description: { en: "FastAPI services and ONNX Runtime on CPU — models packaged to run where your product runs.",
                     fa: "سرویس‌های FastAPI و ONNX Runtime روی CPU — مدل‌هایی که همان‌جا اجرا می‌شوند که محصول شما اجرا می‌شود." } }
  ],

  /* ----------------------------------------------------------- members */
  /*  `id` is what projects reference in `members`. `avatar` is optional —
   *  without it the card shows `initials`. `portrait` is the larger
   *  head-and-shoulders photo in the About section's team panel.          */

  members: [
    {
      id: "zhaleh",
      name: { en: "Zhaleh Manbari", fa: "ژاله منبری" },
      initials: "ZM",
      role: { en: "Backend & Machine Learning Engineer", fa: "مهندس بک‌اند و یادگیری ماشین" },
      bio: {
        en: "Trains the models and builds the services that run them. Background in medical imaging and speaker identification; led the Akam team to third place at ICCKE 2022.",
        fa: "مدل‌ها را آموزش می‌دهد و سرویس‌هایی را می‌سازد که آن‌ها را اجرا می‌کنند. پیشینه در تصویربرداری پزشکی و شناسایی گوینده؛ سرپرست تیم آکام در ICCKE 2022 که رتبه‌ی سوم را گرفت."
      },
      avatar: "assets/img/zhaleh.jpg",
      portrait: "assets/img/portraits/zhaleh.jpg",
      links: {
        portfolio: "https://zhaleh197.github.io/",
        github:    "https://github.com/zhaleh197",
        kaggle:    "https://www.kaggle.com/zhalehmanbari",
        linkedin:  "https://www.linkedin.com/in/zhaleh-manbari-9796665b"
      }
    },
    {
      id: "shahla",
      name: { en: "Shahla Gharibi", fa: "شهلا غریبی" },
      initials: "SG",
      role: { en: "Backend & Computer Vision Engineer", fa: "مهندس بک‌اند و بینایی ماشین" },
      bio: {
        en: "Builds the backend services behind the suite's face checks — detection, embeddings and matching behind FastAPI — and the data that trains them. Publishes much of the team's MRI, OCR and face data on Kaggle.",
        fa: "سرویس‌های بک‌اند پشت بررسی‌های چهره‌ی سامانه را می‌سازد — تشخیص چهره، استخراج بردار و تطبیق روی FastAPI — و داده‌هایی که مدل‌ها با آن آموزش می‌بینند. بخش بزرگی از داده‌های ام‌آرآی، OCR و چهره‌ی تیم را روی کگل منتشر کرده است."
      },
      /*  Cropped to the face from assets/img/shahla.jpg.  */
      avatar: "assets/img/shahla-avatar.jpg",
      portrait: "assets/img/portraits/shahla.jpg",
      links: {
        github:   "https://github.com/shahla2022",
        kaggle:   "https://www.kaggle.com/sshahla",
        linkedin: "https://www.linkedin.com/in/shahla-garibi-bab660243"
      }
    },
    {
      id: "mohammad",
      name: { en: "Mohammad Jafari", fa: "محمد جعفری" },
      initials: "MJ",
      role: { en: "Honorary member", fa: "عضو افتخاری" },
      honorary: true,
      /*  Introduction and photo only, by the team's choice — no project list.  */
      bio: {
        en: "Supports the Akam team with experience in software development.",
        fa: "با تجربه‌ی خود در توسعه‌ی نرم‌افزار از تیم آکام پشتیبانی می‌کند."
      },
      avatar: "assets/img/mohammad.jpg",
      portrait: "assets/img/portraits/mohammad.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/mohammadjaf/"
      }
    },
    {
      id: "soran",
      name: { en: "Soran Mirzaei", fa: "سوران میرزایی" },
      initials: "SM",
      role: { en: "Honorary member · Full-stack developer",
              fa: "عضو افتخاری · برنامه‌نویس فول‌استک" },
      honorary: true,
      bio: {
        en: "A full-stack developer who has stood beside Akam from the beginning — with advice when we needed it and encouragement when we needed that more.",
        fa: "برنامه‌نویس فول‌استک که از ابتدا کنار آکام بوده است؛ با مشورتش وقتی لازم داشتیم و با دلگرمی‌اش وقتی بیشتر به آن نیاز داشتیم."
      },
      avatar: "assets/img/soran.jpg",
      portrait: "assets/img/portraits/soran.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/soranmirzaei/"
      }
    }
  ],

  /* ---------------------------------------------------------- projects */
  /*  Featured entries first: the smaller cards then sit three-up beneath
   *  them without leaving gaps.
   *  `members` lists member ids; `team: true` marks work done as Akam.
   *  `links` is a list of { label, url } — label is a ui.projects key or a
   *  { en, fa } object.  `cover`: waveform | scan | chart | network |
   *  layers | track | stack                                              */

  projects: [
    {
      name: { en: "Akam KYC Suite", fa: "سامانه‌ی احراز هویت آکام" },
      subtitle: { en: "OCR, face matching, liveness, anti-spoofing — one verdict",
                  fa: "OCR، تطبیق چهره، زنده‌بودن، ضد جعل — یک حکم واحد" },
      description: {
        en: "The company's core product. A modular monolith on FastAPI: one router per verification module, each returning the same envelope — a decision, a score and the reasons behind it — so an orchestrator can aggregate them into one verdict and a reviewer can read the audit trail. Models are trained on Kaggle GPUs and served on CPU through ONNX Runtime; nothing at serving time imports torch or calls a hosted API.",
        fa: "محصول اصلی شرکت. یک مونولیت ماژولار روی FastAPI: برای هر ماژول احراز هویت یک روتر، و همه یک ساختار پاسخ یکسان برمی‌گردانند — تصمیم، امتیاز و دلیل‌ها — تا یک هماهنگ‌کننده آن‌ها را در یک حکم واحد جمع کند و کارشناس بازبینی رد پای تصمیم را بخواند. مدل‌ها روی GPUهای کگل آموزش می‌بینند و با ONNX Runtime روی CPU اجرا می‌شوند؛ در زمان اجرا نه torch لود می‌شود و نه API بیرونی صدا زده می‌شود."
      },
      members: ["zhaleh", "shahla"],
      team: true,
      tags: ["kyc", "cv", "backend"],
      tech: ["Python", "FastAPI", "ONNX Runtime", "YOLOv8", "InsightFace", "EasyOCR", "Docker"],
      links: [
        { label: "source", url: "https://github.com/zhaleh197/kyc" },
        { label: { en: "Team repository", fa: "ریپوی تیم" }, url: "https://github.com/akamteam-ai/Akamteam_kyc" }
      ],
      year: "2026",
      featured: true,
      cover: "scan",
      highlights: [
        { en: "Document OCR pipeline: rectify, quality gate, field detection, recognise, validate",
          fa: "خط‌لوله‌ی OCR مدارک: صاف‌سازی، دروازه‌ی کیفیت، تشخیص فیلد، بازشناسی، اعتبارسنجی" },
        { en: "82 tests that run without model weights — detector and recogniser are injectable",
          fa: "۸۲ تست که بدون وزن مدل اجرا می‌شوند — آشکارساز و بازشناس قابل تزریق‌اند" },
        { en: "Bilingual reason codes so operators can see why a document was flagged",
          fa: "کدهای دلیل دوزبانه تا اپراتور ببیند یک مدرک چرا علامت خورده است" }
      ]
    },
    {
      name: { en: "Face Matching API", fa: "API تطبیق چهره" },
      subtitle: { en: "Two photos in, a similarity score out",
                  fa: "دو عکس ورودی، یک امتیاز شباهت خروجی" },
      description: {
        en: "A FastAPI service that takes two uploaded images, detects the face in each with InsightFace's buffalo_l model pack, and compares their L2-normalised embeddings by cosine similarity. The score is mapped to a 0–100 scale and a match is declared above 72.5 — a threshold the response itself tells the caller they can tune. Packaged for serverless deployment on Vercel and as a long-running service.",
        fa: "یک سرویس FastAPI که دو تصویر بارگذاری‌شده را می‌گیرد، چهره‌ی هر کدام را با بسته‌ی مدل buffalo_l از InsightFace پیدا می‌کند و بردارهای نرمال‌شده‌ی آن‌ها را با شباهت کسینوسی مقایسه می‌کند. امتیاز به بازه‌ی ۰ تا ۱۰۰ نگاشت می‌شود و بالای ۷۲٫۵ تطبیق اعلام می‌شود — آستانه‌ای که خود پاسخ به فراخواننده می‌گوید قابل تنظیم است. برای استقرار serverless روی Vercel و همچنین به‌صورت سرویس دائمی بسته‌بندی شده است."
      },
      members: ["shahla"],
      tags: ["kyc", "cv", "backend"],
      tech: ["Python", "FastAPI", "InsightFace", "OpenCV", "NumPy", "Vercel"],
      links: [
        { label: "source", url: "https://github.com/shahla2022/facematchfinal" },
        { label: { en: "Deployment variant", fa: "نسخه‌ی استقرار" }, url: "https://github.com/shahla2022/railway-deploy" }
      ],
      year: "2026",
      featured: true,
      cover: "network",
      highlights: [
        { en: "ArcFace-style embeddings from buffalo_l, compared by cosine similarity",
          fa: "بردارهای چهره به سبک ArcFace از مدل buffalo_l، مقایسه با شباهت کسینوسی" },
        { en: "Clear failure reasons: invalid image, or no face detected in either photo",
          fa: "دلیل خطای روشن: تصویر نامعتبر، یا پیدا نشدن چهره در یکی از دو عکس" },
        { en: "The service the website's live face-matching demo calls",
          fa: "همان سرویسی که دموی زنده‌ی تطبیق چهره در وب‌سایت صدا می‌زند" }
      ]
    },
    {
      name: { en: "Brain MRI Abnormality Classification", fa: "دسته‌بندی ناهنجاری در ام‌آرآی مغز" },
      subtitle: { en: "IAAA contest — multi-sequence MRI, seventeen model iterations",
                  fa: "مسابقه‌ی IAAA — ام‌آرآی چندتوالی، هفده نسخه‌ی مدل" },
      description: {
        en: "An end-to-end pipeline for classifying abnormality in T1 / T2 / T2-FLAIR brain MRI: DICOM to NIfTI conversion, skull stripping, augmentation, then a long series of architectures measured against each other — MONAI DenseNet-121, 3D U-Net, 3D ResNet, an Inception variant that packs three middle slices into RGB channels, an autoencoder used purely as preprocessing, a GAN discriminator trained on 45,000 normal slices as an anomaly detector, and a YOLO detection head. The skull-stripped volumes, slice sets and per-sequence weights are published on both members' Kaggle profiles.",
        fa: "یک خط‌لوله‌ی سرتاسری برای تشخیص ناهنجاری در ام‌آرآی مغز با توالی‌های T1 / T2 / T2-FLAIR: تبدیل DICOM به NIfTI، حذف جمجمه، داده‌افزایی، و بعد مجموعه‌ای طولانی از معماری‌ها که همه با یک معیار سنجیده شدند — MONAI DenseNet-121، یونت سه‌بعدی، رزنت سه‌بعدی، نسخه‌ای از Inception که سه اسلایس میانی را در کانال‌های RGB می‌چیند، یک اتوانکودر صرفاً برای پیش‌پردازش، دیسکریمیناتور GAN آموزش‌دیده روی ۴۵٬۰۰۰ اسلایس سالم در نقش آشکارساز ناهنجاری، و یک سر تشخیص YOLO. حجم‌های بدون جمجمه، مجموعه‌ی اسلایس‌ها و وزن‌های هر توالی روی پروفایل کگل هر دو عضو منتشر شده‌اند."
      },
      members: ["zhaleh", "shahla"],
      tags: ["medical", "cv"],
      tech: ["PyTorch", "MONAI", "NiBabel", "U-Net", "YOLO", "GANs"],
      links: [],
      year: "2024",
      featured: true,
      cover: "layers",
      private: true,
      privateNote: { en: "Private — contest submission", fa: "خصوصی — ارسال به مسابقه" },
      highlights: [
        { en: "Seventeen numbered model versions, each with its own submission and score, kept comparable",
          fa: "هفده نسخه‌ی شماره‌گذاری‌شده‌ی مدل، هرکدام با ارسال و امتیاز خودش، همه قابل مقایسه" },
        { en: "Per-sequence U-Net weights for T1, T2 and T2-FLAIR published as Kaggle models",
          fa: "وزن‌های یونت جداگانه برای T1، T2 و T2-FLAIR، منتشرشده به‌صورت مدل در کگل" },
        { en: "Anomaly detection framed two ways: supervised classification and a GAN discriminator on normals only",
          fa: "تشخیص ناهنجاری از دو زاویه: دسته‌بندی بانظارت، و دیسکریمیناتور GAN که فقط داده‌ی سالم دیده است" }
      ]
    },
    {
      name: { en: "Open-Set Speaker Identification", fa: "شناسایی گوینده در حالت باز" },
      subtitle: { en: "IAAA 3rd Contest — 0.96700 macro-F1",
                  fa: "سومین مسابقه‌ی IAAA — macro-F1 برابر ۰٫۹۶۷۰۰" },
      description: {
        en: "3,604 audio files across 447 classes: 446 known speakers plus one unknown class holding half the data. Giving each unlabelled file its own prototype instead of treating “unknown” as one class took macro-F1 from 0.735 to 0.948 before any tuning. The final system fuses ECAPA-TDNN and ResNet embeddings with AS-norm and a calibrated margin threshold — the groundwork for the suite's voice module.",
        fa: "۳٬۶۰۴ فایل صوتی در ۴۴۷ کلاس: ۴۴۶ گوینده‌ی شناخته‌شده به‌علاوه‌ی یک کلاس «ناشناس» که نیمی از داده را دارد. دادن یک نمونه‌ی مرجع مستقل به هر فایل بدون برچسب، به‌جای یک کلاس واحد «ناشناس»، macro-F1 را پیش از هر تنظیمی از ۰٫۷۳۵ به ۰٫۹۴۸ رساند. سامانه‌ی نهایی بردارهای ECAPA-TDNN و ResNet را با AS-norm و یک آستانه‌ی کالیبره‌شده ترکیب می‌کند — پایه‌ی ماژول صدای سامانه‌ی احراز هویت."
      },
      members: ["zhaleh"],
      tags: ["audio", "kyc"],
      tech: ["Python", "PyTorch", "SpeechBrain", "NumPy"],
      links: [
        { label: "source", url: "https://github.com/zhaleh197/Open-Set-Speaker-Identification" }
      ],
      year: "2026",
      featured: true,
      cover: "waveform",
      highlights: [
        { en: "Diagnosed the data before modelling: 16.9 GB of stereo PCM WAV hidden behind .mp3 extensions",
          fa: "تشخیص ماهیت داده پیش از مدل‌سازی: ۱۶٫۹ گیگابایت WAV استریوی خام پشت پسوند mp3." },
        { en: "Energy VAD, 6-second chunks, mean of L2-normalised embeddings",
          fa: "تشخیص فعالیت گفتار بر پایه‌ی انرژی، تکه‌های ۶ ثانیه‌ای، میانگین بردارهای نرمال‌شده" },
        { en: "Two-encoder fusion with per-encoder AS-norm, weights flattened 1:1",
          fa: "ترکیب دو انکودر با AS-norm جداگانه و وزن‌های یکسان ۱:۱" }
      ]
    },
    {
      name: { en: "Akam Website & Interactive Demo", fa: "وب‌سایت و دموی تعاملی آکام" },
      subtitle: { en: "Upload a photo, try the KYC modules in the browser",
                  fa: "عکس بارگذاری کنید و ماژول‌های احراز هویت را در مرورگر امتحان کنید" },
      description: {
        en: "A bilingual English / Persian single-page site for the company, with a page per KYC module and an interactive demo: choose a service — face detection, face matching, anti-spoofing or OCR — upload one or two images, and see the result returned by the backend.",
        fa: "یک سایت تک‌صفحه‌ای دوزبانه (انگلیسی / فارسی) برای شرکت، با یک صفحه برای هر ماژول احراز هویت و یک دموی تعاملی: سرویس را انتخاب کنید — تشخیص چهره، تطبیق چهره، ضد جعل یا OCR — یک یا دو تصویر بارگذاری کنید و نتیجه‌ای را که بک‌اند برمی‌گرداند ببینید."
      },
      members: ["shahla"],
      team: true,
      tags: ["web", "kyc"],
      tech: ["React 19", "Vite", "Tailwind CSS", "lucide-react", "Vercel"],
      links: [
        { label: "source", url: "https://github.com/shahla2022/React-vercel" }
      ],
      year: "2026",
      featured: false,
      cover: "stack",
      highlights: []
    },
    {
      name: { en: "Poultry Behaviour Monitoring", fa: "پایش رفتار طیور" },
      subtitle: { en: "ICCKE 2022 challenge — third place",
                  fa: "چالش ICCKE 2022 — رتبه‌ی سوم" },
      description: {
        en: "Detect every bird in overhead farm video, track each one across frames, and analyse the movement distribution to flag abnormal flock behaviour. A YOLOv7 detector was trained on a deliberately small labelled set, tracking used a distance-matrix association between consecutive frames, and trajectories were reduced to movement statistics. The honest finding: numbering individual birds is not reliable at that density — the signal lives in the distribution.",
        fa: "تشخیص تک‌تک پرنده‌ها در ویدئوی سالن از بالا، ردیابی هرکدام در طول فریم‌ها، و تحلیل توزیع حرکت برای علامت‌زدن رفتار غیرعادی گله. آشکارساز YOLOv7 روی مجموعه‌ای عمداً کوچک از داده‌ی برچسب‌خورده آموزش دید، ردیابی با تناظر ماتریس فاصله بین فریم‌های متوالی انجام شد، و مسیرها به آماره‌های حرکتی تبدیل شدند. یافته‌ی صادقانه: شماره‌گذاری تک‌تک پرنده‌ها در آن تراکم قابل‌اتکا نیست — سیگنال در توزیع است."
      },
      members: ["zhaleh"],
      team: true,
      tags: ["cv"],
      tech: ["YOLOv7", "Python", "SciPy", "pandas", "Object tracking"],
      links: [],
      year: "2022",
      featured: false,
      cover: "track",
      private: true,
      privateNote: { en: "Private — challenge entry", fa: "خصوصی — ارسال به چالش" },
      highlights: []
    },
    {
      name: { en: "ZarinPal Merchant Analytics Dashboard", fa: "داشبورد تحلیلی پذیرندگان زرین‌پال" },
      subtitle: { en: "Hackathon — traceable insights over 2.2M transactions",
                  fa: "هکاتون — بینش‌های قابل ردیابی روی ۲٫۲ میلیون تراکنش" },
      description: {
        en: "A bilingual dashboard that turns a merchant's payment history into ranked insights, each with a figure, a recommended action and a one-click trace to the exact SQL that produced it. Natural-language questions go through tool calls only, so the model can never state a number it didn't query.",
        fa: "داشبوردی دوزبانه که تاریخچه‌ی پرداخت یک پذیرنده را به بینش‌های رتبه‌بندی‌شده تبدیل می‌کند؛ هر بینش با یک عدد، یک اقدام پیشنهادی و یک کلیک فاصله تا همان کوئری SQL که آن را ساخته. پرسش‌های زبان طبیعی فقط از راه فراخوانی ابزار پاسخ می‌گیرند، پس مدل هرگز عددی نمی‌گوید که کوئری نکرده."
      },
      members: ["zhaleh"],
      tags: ["agentic", "data", "web"],
      tech: ["Next.js 15", "React 19", "TypeScript", "DuckDB", "Tailwind", "Playwright"],
      links: [
        { label: "source", url: "https://github.com/zhaleh197/Zarinpal" }
      ],
      year: "2026",
      featured: false,
      cover: "chart",
      highlights: []
    },
    {
      name: { en: "Liara Docs Assistant", fa: "دستیار مستندات لیارا" },
      subtitle: { en: "Hackathon — agentic RAG over cloud documentation",
                  fa: "هکاتون — RAG عامل‌محور روی مستندات ابری" },
      description: {
        en: "A conversational assistant for the Liara cloud platform that answers from the official documentation, not model memory: search, open the specific page, answer with citations. Built on the Anthropic SDK with tool use and prompt caching, behind a provider abstraction that can run the same agent over an OpenAI-compatible endpoint.",
        fa: "دستیاری مکالمه‌ای برای پلتفرم ابری لیارا که از روی مستندات رسمی پاسخ می‌دهد، نه از حافظه‌ی مدل: جست‌وجو، باز کردن همان صفحه، پاسخ همراه با ارجاع. روی Anthropic SDK با فراخوانی ابزار و prompt caching ساخته شده، پشت لایه‌ای که همان عامل را روی endpoint سازگار با OpenAI هم اجرا می‌کند."
      },
      members: ["zhaleh"],
      tags: ["agentic", "backend"],
      tech: ["Node.js", "Express", "Anthropic SDK", "Tool use", "RAG"],
      links: [],
      year: "2026",
      featured: false,
      cover: "network",
      private: true,
      privateNote: { en: "Private — hackathon entry", fa: "خصوصی — پروژه‌ی هکاتون" },
      highlights: []
    },
    {
      name: { en: "OCR Fine-Tuning", fa: "تنظیم دقیق OCR" },
      subtitle: { en: "The data work behind the document module",
                  fa: "کار داده‌ای پشت ماژول مدارک" },
      description: {
        en: "Kaggle notebooks and datasets for teaching off-the-shelf OCR to read local documents: a Kurdish EasyOCR recogniser built from its character set up, EasyOCR fine-tuning sets, a YOLO dataset for locating text fields, and a Donut document-understanding dataset.",
        fa: "نوت‌بوک‌ها و دیتاست‌های کگل برای آموزش OCR آماده به خواندن مدارک محلی: یک بازشناس EasyOCR کُردی که از مجموعه‌ی نویسه‌ها ساخته شد، مجموعه‌های تنظیم دقیق EasyOCR، یک دیتاست YOLO برای یافتن فیلدهای متنی، و یک دیتاست Donut برای درک سند."
      },
      members: ["zhaleh", "shahla"],
      tags: ["kyc", "cv", "data"],
      tech: ["EasyOCR", "YOLO", "Donut", "Kaggle"],
      links: [
        { label: { en: "On Kaggle", fa: "در کگل" }, url: "https://www.kaggle.com/sshahla/datasets" }
      ],
      year: "2025",
      featured: false,
      cover: "scan",
      highlights: []
    },
    {
      name: { en: "Endodontic Surgery Diagnosis in OPG Images", fa: "تشخیص جراحی اندو در تصاویر OPG" },
      subtitle: { en: "Detection on panoramic dental radiographs",
                  fa: "تشخیص شیء روی رادیوگرافی پانورامیک دندان" },
      description: {
        en: "A TensorFlow Lite detection model trained to locate evidence of endodontic surgery in orthopantomogram images, with a submission pipeline for evaluation.",
        fa: "یک مدل تشخیص TensorFlow Lite برای یافتن نشانه‌های جراحی اندو در تصاویر ارتوپانتوموگرام، به‌همراه خط‌لوله‌ی ارسال برای ارزیابی."
      },
      members: ["zhaleh"],
      tags: ["medical", "cv"],
      tech: ["Python", "TensorFlow Lite", "Jupyter"],
      links: [
        { label: "source", url: "https://github.com/zhaleh197/Endo_surgery_diagnosis_in_OPG_images" }
      ],
      year: "2023",
      featured: false,
      cover: "scan",
      highlights: []
    },
    {
      name: { en: "Python Socket Programming", fa: "برنامه‌نویسی سوکت در پایتون" },
      subtitle: { en: "A worked tutorial with client and server examples",
                  fa: "آموزش گام‌به‌گام همراه با مثال کلاینت و سرور" },
      description: {
        en: "An explanatory notebook on socket programming in Python, with runnable client/server pairs — including sending Python objects over the wire with pickle.",
        fa: "نوت‌بوکی آموزشی درباره‌ی برنامه‌نویسی سوکت در پایتون، با جفت‌های کلاینت و سرور قابل اجرا — از جمله ارسال اشیای پایتون روی شبکه با pickle."
      },
      members: ["shahla"],
      tags: ["backend"],
      tech: ["Python", "socket", "pickle", "Jupyter"],
      links: [
        { label: "source", url: "https://github.com/shahla2022/Python-Socket-Programming" }
      ],
      year: "2023",
      featured: false,
      cover: "network",
      highlights: []
    },
    {
      name: { en: "Clean-Architecture CMS", fa: "سامانه‌ی مدیریت محتوا با معماری تمیز" },
      subtitle: { en: "CmsRebin — .NET", fa: "CmsRebin — دات‌نت" },
      description: {
        en: "A content management system split along clean-architecture lines — Domain, Application, Infrastructure and Persistence as separate projects, with a dedicated test project.",
        fa: "یک سامانه‌ی مدیریت محتوا با تفکیک معماری تمیز — Domain، Application، Infrastructure و Persistence هرکدام یک پروژه‌ی جدا، به‌علاوه‌ی پروژه‌ی تست اختصاصی."
      },
      members: ["zhaleh"],
      tags: ["backend", "web"],
      tech: ["C#", ".NET", "SQL Server"],
      links: [
        { label: "source", url: "https://github.com/zhaleh197/CMSRebin" }
      ],
      year: "2022",
      featured: false,
      cover: "stack",
      highlights: []
    },
    {
      name: { en: "Sanandaj Weather", fa: "آب‌وهوای سنندج" },
      subtitle: { en: "Right-to-left weather card in plain HTML, CSS and JS",
                  fa: "کارت آب‌وهوای راست‌به‌چپ با HTML، CSS و JS ساده" },
      description: {
        en: "A Persian-language weather interface for Sanandaj: today's temperature, highs and lows, and a forecast strip with custom SVG icons.",
        fa: "رابط کاربری فارسی آب‌وهوای سنندج: دمای امروز، بیشینه و کمینه، و نوار پیش‌بینی با آیکون‌های SVG اختصاصی."
      },
      members: ["shahla"],
      tags: ["web"],
      tech: ["HTML", "CSS", "JavaScript"],
      links: [
        { label: "source", url: "https://github.com/shahla2022/frontend" }
      ],
      year: "2024",
      featured: false,
      cover: "chart",
      highlights: []
    }
  ],

  /* ------------------------------------------------------------ kaggle */
  /*  One card per member, combining all of that member's Kaggle accounts.
   *  Counts are the sum of the profiles as of September 2026, with an item
   *  that appears on two of the same member's profiles counted once.
   *    zhaleh: zhalehmanbari 13 / 4 / 3 + jallemanbari 7 / 5 / 1,
   *            minus kuri_char and easyocr_kurdi listed on both
   *    shahla: sshahla 19 / 3 / 2 + rahagaribi 7 / 4 / 1                 */

  kaggle: [
    {
      member: "zhaleh",
      profiles: [
        { username: "zhalehmanbari", url: "https://www.kaggle.com/zhalehmanbari" },
        { username: "jallemanbari",  url: "https://www.kaggle.com/jallemanbari" }
      ],
      stats: { datasets: 19, models: 8, notebooks: 4 },
      selected: [
        { name: "skullstrippedallnifti", meta: { en: "2 GB · skull-stripped MRI", fa: "۲ گیگابایت · ام‌آرآی بدون جمجمه" } },
        { name: "AEs_Trained_Denoising_DimentionalReduction_MRI", meta: { en: "model · MRI autoencoders", fa: "مدل · اتوانکودرهای ام‌آرآی" } },
        { name: "model_unet_v2",         meta: { en: "model · U-Net", fa: "مدل · یونت" } },
        { name: "easyocr_kurdi",         meta: { en: "model · Kurdish OCR", fa: "مدل · OCR کُردی" } },
        { name: "Face Obstruction Detection", meta: { en: "notebook", fa: "نوت‌بوک" } },
        { name: "Kurdi_namesDS",         meta: { en: "308 MB", fa: "۳۰۸ مگابایت" } }
      ]
    },
    {
      member: "shahla",
      profiles: [
        { username: "sshahla",    url: "https://www.kaggle.com/sshahla" },
        { username: "rahagaribi", url: "https://www.kaggle.com/rahagaribi" }
      ],
      stats: { datasets: 26, models: 7, notebooks: 3 },
      selected: [
        { name: "allnifti",            meta: { en: "3 GB · brain MRI", fa: "۳ گیگابایت · ام‌آرآی مغز" } },
        { name: "face-obstacle",       meta: { en: "2 GB · occluded faces", fa: "۲ گیگابایت · چهره‌ی پوشیده" } },
        { name: "t1U · t2U · t2fU",    meta: { en: "models · per-sequence U-Net", fa: "مدل · یونت هر توالی" } },
        { name: "fine_tune_easyocrsh", meta: { en: "297 MB · OCR fine-tuning", fa: "۲۹۷ مگابایت · تنظیم OCR" } },
        { name: "ai-forensicsi",       meta: { en: "notebook · image forensics", fa: "نوت‌بوک · جرم‌شناسی تصویر" } },
        { name: "FaceRecognition",     meta: { en: "notebook", fa: "نوت‌بوک" } }
      ]
    }
  ]
};
