import { experience, IExperience } from "./myExpirience";
export interface IEnRu {
  [lang: string]: string;
}
interface IContact {
  title: string;
  icon: string;
  url: string;
}

interface IDownload {
  title: IEnRu;
  url: IEnRu;
}

export interface IiAm {
  city: IEnRu;
  address: IEnRu;
  name: IEnRu;
  position: IEnRu;
  bd: IEnRu;
  download: {
    word: IDownload;
    google: IDownload;
    pdf: IDownload;
  };
  contacts: {
    home: IContact;
    email: IContact;
    phone: IContact;
    telegram: IContact;
    linkedIn: IContact;
    github: IContact;
  };
  summary: IEnRu;
  skills: string[][];
  languages: IEnRu[];
  experience: IExperience;
}

export const iAm: IiAm = {
  city: {
    en: `Simferopol`,
    ru: `Симферополь`,
  },
  address: {
    en: `Crimea, Russia`,
    ru: `Россия, Крым`,
  },
  name: {
    en: `Andrew Butov`,
    ru: `Бутов Андрей`,
  },
  bd: {
    en: "1976-10-27",
    ru: "27/10/1976",
  },
  position: {
    en: `Experienced Full Stack JS Developer`,
    ru: `Experienced Full Stack JS Developer`,
  },
  download: {
    word: {
      title: {
        en: "Open MS Word CV Document",
        ru: "Открыть Резюме в MS Word",
      },
      url: {
        en: "https://1drv.ms/w/s!AnGRD7Tn3i1KePyM_bV15yK16KM?e=LS9OnX",
        ru: "https://1drv.ms/w/s!AnGRD7Tn3i1KeXFDc9TTEBVwARU?e=7bBO2s",
      },
    },
    google: {
      title: {
        en: "Open GoogleDoc CV Document",
        ru: "Открыть Резюме в Google Documents",
      },
      url: {
        en: "https://docs.google.com/document/d/1GjR42g-8Cf5fXf_lIf1Ge6o2--Y-mr_0SuZJKLlT2us/edit?usp=sharing",
        ru: "https://docs.google.com/document/d/1Fs2k4asv_x1eIpmUCem3BVzhxVhxLwLhecY1IwDMO6o/edit?usp=sharing",
      },
    },
    pdf: {
      title: {
        en: "Download PDF",
        ru: "Скачать PDF",
      },
      url: {
        en: "",
        ru: "",
      },
    },
  },
  summary: {
    en: `Passionate full-stack engineer with over 20 years of hands-on experience in developing products using a wide range of FE and BE skills.
    More then 50 IT projects with different complications. Familiar with lots of programming utilities and languages.
    Experienced in software architecture, business process modeling and optimization, solves challenges. Working knowledge of DevOps, CI/CD.
    Agile mindset but adaptable to different tools and methodologies. Value data and truth over ego. Capable of working on own initiative and as a team player.
    Excited about mentoring junior developers. Trying to use best practices in my daily basis work.`,
    ru: `Увлеченный инженер программист с более чем 20-летним практическим стажем коммерческой разработки продуктов с использованием широкого спектра навыков и технологий.
    Участвовал в реализации более 50 ИТ-проектов различной сложности. Знаком с большим количеством программных утилит и несколькими языками программирования.
    Имею опыт в построении архитектуры программного обеспечения, моделировании и оптимизации бизнес-процессов, решении сложных задач.
    Знание DevOps достаточное для организации CI/CD процессов. Предпочитаю Agile методалогию, но могу адаптироватся к работе с другими.
    Всегда стараюсь рассмотреть истину поверх своего эго.
    Способен работать как самостоятельно так и игроком в команде. Достовляет удовольствие делится знаниями и опытом.
    Пытаюсь использовать лучшие практики в своей повседневной работе.`,
  },
  contacts: {
    home: {
      title: "www.butov.online",
      icon: "home-6.svg",
      url: "https://www.butov.online",
    },
    email: {
      title: "andrew@butov.online",
      icon: "email.svg",
      url: "mailto:andrew@butov.online",
    },
    phone: {
      title: "+7(978) 706-94-28",
      icon: "",
      url: "tel:+79787069428",
    },
    telegram: {
      title: "telegram.me/andrewb76",
      icon: "",
      url: "https://telegram.me/andrewb76",
    },
    linkedIn: {
      title: "linkedin.com/in/andrew-butov-80b70534",
      icon: "",
      url: "https://linkedin.com/in/andrew-butov-80b70534",
    },
    github: {
      title: "github.com/andrewb76",
      icon: "",
      url: "https://github.com/andrewb76",
    },
  },
  skills: [
    ["mysql", "postgres", "mongodb", "couchdb", "redis", "hasura"],
    ["waterline", "knex", "objection", "sequelize", "mongoose"],
    ["js", "ts", "php", "python", "bash", "ruby"],
    ["nodejs", "express", "koa", "actionhero", "socket.io"],
    ["ror", "django", "flask", "laravel", "code-igniter", "yii", "slim"],
    ["jquery", "d3", "angular", "react", "vue"],
    ["html", "svg", "css", "less", "scss", "style"],
    ["smarty", "twig", "pug", "mustache", "EJS", "nunjucks", "hbs"],
    [
      "tdd",
      "bdd",
      "mocha",
      "chai",
      "frisby",
      "jest",
      "protractor",
      "cypress",
      "cucumber",
    ],
    ["docker", "k8s", "helm"],
    ["AWS", "GoogleCloud", "YandexCloud"],
    ["scrum", "agile", "kanban"],
    [
      "redmine",
      "jira",
      "youtrack",
      "gitlab",
      "jenkins",
      "vercel",
      "graylog",
      "grafana",
      "prometheus",
    ],
    ["rxjs", "ramda"],
  ],
  languages: [
    { ru: "Русский: Родной", en: "Russian: Native" },
    {
      ru: "Английский: UpperIntermediate",
      en: "English: UpperIntermediate",
    },
  ],
  experience,
};
