// import { Ii18nText } from "./comonData";

export interface Ii18nString {
  [lang: string]: string;
}

export interface IProject {
  key: string;
  country: string;
  img?: string;
  short: string;
  url?: string;
  title: Ii18nString;
  description: Ii18nString;
  from: Date;
  to: Date | null;
  team?: string;
  techStack: string[];
}

export const certificates: IProject[] = [
  {
    key: "cu_mongo",
    country: "us",
    img: "cu_mongo.png",
    url: "https://university.mongodb.com/course_completion/906576af9f244bd0b90a28bd8c1a80b4/printable",
    short: "MongoDB University",
    title: {
      ru: "MongoDB University",
      en: "MongoDB University",
    },
    description: {
      ru: `M101JS: MongoDB for Node.js Developers`,
      en: `M101JS: MongoDB для Node.js Разработчиков`,
    },
    techStack: ["mongodb", "nodejs", "js"],
    from: new Date(2014, 6),
    to: new Date(2014, 7),
  },
  {
    key: "cu_codecamp_front",
    country: "us",
    img: "cu_codecamp_front.png",
    url: "https://www.freecodecamp.com/andrewb76/front-end-certification",
    short: "CodeCamp FE",
    title: {
      ru: "CodeCamp",
      en: "CodeCamp",
    },
    description: {
      ru: `Курс по Фронт разработке`,
      en: `FrontEnd Development Course`,
    },
    techStack: ["html", "css", "js", "bootstrap", "jquery"],
    from: new Date(2017, 1),
    to: new Date(2017, 4),
  },
  {
    key: "cu_stepik_python",
    country: "ru",
    img: "cu_stepik_python.png",
    url: "https://stepik.org/cert/107778",
    short: "STEPIK Python",
    title: {
      ru: "Институт БиоИнформатики",
      en: "BioInformatics University",
    },
    description: {
      ru: `Курс разработки на Python`,
      en: `Python development Course`,
    },
    techStack: ["python"],
    from: new Date(2018, 4),
    to: new Date(2018, 6),
  },
  {
    key: "cu_codecamp_data_visualization",
    country: "us",
    img: "cu_codecamp_data_visualization.png",
    url: "https://www.freecodecamp.org/certification/andrewb76/data-visualization",
    short: "Data Vis",
    title: {
      ru: "CodeCamp",
      en: "CodeCamp",
    },
    description: {
      ru: `Визуализация Данных на D3`,
      en: `Data Visualization with D3`,
    },
    techStack: ["html", "css", "js", "svg", "d3"],
    from: new Date(2022, 10),
    to: new Date(2022, 10),
  },
  {
    key: "cu_codecamp_js",
    country: "us",
    img: "cu_codecamp_js.png",
    url: "https://freecodecamp.org/certification/andrewb76/javascript-algorithms-and-data-structures",
    short: "JS Algorithms",
    title: {
      ru: "CodeCamp",
      en: "CodeCamp",
    },
    description: {
      ru: `JavaScript Алгоритмы и Структуры Данных`,
      en: `JavaScript Algorithms and Data Structures`,
    },
    techStack: ["js"],
    from: new Date(2022, 9),
    to: new Date(2022, 9),
  },
  {
    key: "cu_codecamp_front_lib",
    country: "us",
    img: "cu_codecamp_front_lib.png",
    url: "https://freecodecamp.org/certification/andrewb76/front-end-development-libraries",
    short: "CodeCamp FE Lib",
    title: {
      ru: "CodeCamp",
      en: "CodeCamp",
    },
    description: {
      ru: `Библиотеки для Фронт Разработки`,
      en: `Front End Development Libraries`,
    },
    techStack: ["sass", "jquery", "react", "redux", "bootstrap"],
    from: new Date(2022, 1),
    to: new Date(2022, 4),
  },
  {
    key: "cu_tau_automation_with_git",
    country: "us",
    img: "cu_tau_automation_with_git.png",
    url: "https://testautomationu.applitools.com/certificate/?id=3957c319",
    short: "Automation with GIT",
    title: {
      ru: "TestAutomationUniversity",
      en: "TestAutomationUniversity",
    },
    description: {
      ru: `Git в автоматизации тестирования`,
      en: `Source Control for Test Automation with Git`,
    },
    techStack: ["git"],
    from: new Date(2022, 10),
    to: new Date(2022, 10),
  },
  {
    key: "cu_ml_docker",
    country: "us",
    img: "cu_ml_docker.png",
    url: "https://www.mindluster.com/student/certificate/718402762",
    short: "Exploring Docker",
    title: {
      ru: "Mind Luster",
      en: "Mind Luster",
    },
    description: {
      ru: `Изучение Docker`,
      en: ` Exploring Docker`,
    },
    techStack: ["docker"],
    from: new Date(2022, 10),
    to: new Date(2022, 10),
  },
];
export const projects: IProject[] = [
  {
    key: "mz_chernobyl",
    country: "ua",
    short: "Chernobyl",
    img: "mz_chernobyl.png",
    title: {
      ru: "Система учёта пострадавших от Чернобыльской аварии",
      en: "The system of medical registration of victims of the Chernobyl accident",
    },
    description: {
      ru: `Система учета пострадавших от Чернобыльской аварии проживающих на территории Крымской республики.
      Изначально учет велся на бумажных картах, в зоне моей ответственности было автоматизировать этот процесс
      и наладить переодическую отправку данных в главный ИЦ. Под бдительным глазом старших товарищей
      я разработал схему БД и написал рабочее место оператора для занесения данных в базу.
      Также раз в неделю я передавал свежие данные в Киев по протоколу UUPC и dialUp соединению.
      Работа с базой осуществлялась библиотекой codebase, а пользовательский интерфейс был реализован через библиотеку turbovision`,
      en: `A platform for building a multi-level referral network,
      with a flexibly customizable system for distributing input funds according to the tree of participants.
      A system for registering victims of the Chernobyl accident living on the territory of the Crimean Republic.
      Initially, records were kept on paper cards, it was my responsibility to automate this process
      and set up periodic sending of data to the main information center. Under the watchful eye of senior comrades
      I developed a database schema and wrote an operator's workplace for entering data into the database.
      Also, once a week I sent fresh data to Kyiv via the UUPC protocol and a dialUp connection.
      The work with the base was carried out by the codebase library, and the user interface was implemented through the turbovision library`,
    },
    techStack: ["c", "turbovision", "dBase3"],
    from: new Date(1994, 1),
    to: new Date(1997, 1),
  },
  {
    key: "mz_gl_book",
    country: "ua",
    img: "mz_chernobyl.png",
    short: "Menu Calc",
    title: {
      ru: "Министерство Здравоохранения Крыма, Меню - раскладка",
      en: "Ministry of Health of Crimea, Menu-Layout",
    },
    description: {
      ru: "Меню - раскладка. Программа для составления меню и расчета объемов закупки продуктов в санаториях принадлежащих министерству здравоохранения Крыма",
      en: "Menu/Layout. A program for compiling menus and calculating the volume of purchases of products in sanatoriums belonging to the Crimean Healthcare department",
    },
    techStack: ["c", "turbovision", "dBase3"],
    from: new Date(1995, 8),
    to: new Date(1997, 1),
  },
  {
    key: "ed_tnu",
    country: "ua",
    img: "ed_tnu.png",
    short: "TNU",
    title: {
      ru: "Обучение в Таврическом Национальном Университете",
      en: "Lerning in the Crimean National University",
    },
    description: {
      ru: `В 1997 поступил в Таврический национальный университет им. В.И.Вернадского
      на кафедру финансы и кредит экономического факультета.
      Закончил с дипломом специалиста в 2002 году.`,
      en: `In 1997 entered the Vernadsky Tauride National University
      at the Department of Finance and Credit of the Faculty of Economics.
      Graduated with a specialist diploma in 2002.`,
    },
    techStack: [],
    from: new Date(1997, 2),
    to: new Date(2001, 6),
  },
  {
    key: "oup_1c",
    country: "en",
    img: "1c.png",
    short: "OUP Ukraine",
    title: {
      ru: "Предстовительство Oxford University Press в Украине",
      en: "Agency of Oxford University Press in Ukraine",
    },
    description: {
      ru: "Программа по учету командировочных расходов на С, Cистема приёма и обработки заказов и складского учета на 1С",
      en: "Program for accounting for travel expenses, System for receiving and processing orders and warehouse accounting.",
    },
    techStack: ["c++", "Delphi", "svn", "codebase", "turbovision", "1c"],
    from: new Date(1997, 2),
    to: new Date(2001, 6),
  },
  {
    key: "1c_ozenbash",
    country: "ru",
    img: "1c.png",
    short: "1C Ozenbash",
    title: {
      ru: "Автоматиация складского учета в небольшой торговой компании",
      en: "Automation of warehouse accounting in a small trading company",
    },
    description: {
      ru: `Поддержка IT инфраструктуры небольшой оптовой торговой фирмы, доработка ПО под нужды бизнеса.`,
      en: `Support for the IT infrastructure of a small wholesale trading company, software development for the needs of the business.`,
    },
    techStack: ["1c"],
    from: new Date(2001, 8),
    to: new Date(2002, 9),
  },
  {
    key: "sn_traffic_control",
    country: "ua",
    img: "sn_traffic_control.png",
    short: "TraficControl",
    title: {
      ru: "Система учета и реализации интернет трафика",
      en: "The system of accounting and selling of Internet traffic",
    },
    description: {
      ru: `Система учета и реализации интернет трафика.
      Система позволяла включать интернет на оплаченное время на выбранных компах внутри сети, считать трафик, печатать чеки,
      собирать статистику и делать дневные и месячные отчеты. Система была написана с помощью bash скриптов и других cli утилит awk, sed, ipfw, и тд.,
      управление осуществлялось в терминале, через текстовое меню.`,
      en: `The system of accounting and selling of Internet traffic.
      The system allowed turning on the Internet for paid time on selected PC within the company network, counting traffic, printing checks,
      collect statistics and make daily and monthly reports. The system was written using bash scripts and other cli utilities like sed awk, ipfw, etc.,
      UI control was carried out in the terminal, through the text menu.`,
    },
    techStack: ["freebsd", "cliUtils", "bash"],
    from: new Date(2001, 6),
    to: new Date(2002, 4),
  },
  {
    key: "1c_victoria_vita",
    country: "ru",
    img: "1c.png",
    short: "1C VictoriaVita",
    title: {
      ru: "Автоматиация складского учета в небольшой торговой компании",
      en: "Automation of warehouse accounting in a small trading company",
    },
    description: {
      ru: `Поддержка IT инфраструктуры небольшой оптовой торговой фирмы, доработка ПО под нужды бизнеса.`,
      en: `Support for the IT infrastructure of a small wholesale trading company, software development for the needs of the business.`,
    },
    techStack: ["1c"],
    from: new Date(2001, 1),
    to: new Date(2003, 1),
  },
  {
    key: "1c_pioner",
    country: "ua",
    short: "1C Pioneer",
    img: "1c.png",
    title: {
      ru: "Автоматизация бизнес процессов торговой компании",
      en: "Automation of business processes of a trading company",
    },
    description: {
      ru: `Внедрение системы товарного учета и взаиморасчетов.
      Доработка системы под нужды бизнеса, обучение сотрудников, обеспечение обмена данными с филиалами.`,
      en: `Implementation of warehouse and accounting systems. Custom tuning based on business requirements.
      Personals training of employees. Support data migrations between  company remote offices and warehouses.`,
    },
    techStack: ["1c", "mssql"],
    from: new Date(2002, 4),
    to: new Date(2003, 1),
  },
  {
    key: "1c_palas",
    country: "ua",
    short: "1C Palas",
    img: "1c.png",
    title: {
      ru: 'Network of building supermarkets "Palace"',
      en: 'Network of building supermarkets "Palace"',
    },
    description: {
      ru: `Сеть супермаркетов на территории Украины специализирующихся на торговле напольными покрытиями и сопутствующими товарами.
      В составе отдела из 5ти человек занимался разработкой и внедрением доработок реализующий особенности работы с нештучными товарами.`,
      en: `A network of supermarkets in Ukraine specializing in the sale of floor coverings and related products.
      Was working in IT department of 5 people. In area of my responsibility was extending of the existent trade system with additional features of working with non-piece goods.`,
    },
    techStack: ["1c", "mssql"],
    from: new Date(2003, 1),
    to: new Date(2004, 3),
  },
  {
    key: "1c_B&G",
    country: "ua",
    img: "1c.png",
    short: "1C B&G",
    title: {
      ru: "B&G Group",
      en: "B&G Group",
    },
    description: {
      en: `Large regional FMCG distributor with a large network of retail stores and a transport and logistics company.
      Worked as an engineer in the business development department. We were engaged in the analysis of existing processes,
      their automation and optimization.`,
      ru: `Кпупный региональный FMCG дистрибьютор с большой сетью розничных магазинов и транспортной и логистической компанией.
      Работал инженером в отделе развития бизнеса. Занимались анализом существующих процессов, их автоматизацией и оптимизацией.`,
    },
    techStack: ["1c", "mssql", "js", "html", "googleAPI"],
    from: new Date(2004, 3),
    to: new Date(2008, 10),
  },
  {
    key: "1c_aviatur",
    country: "ua",
    short: "1C Aviatur",
    img: "1c.png",
    techStack: ["1c", "aeroflotAPI"],
    title: {
      ru: "Туристическое агенство",
      en: "Travel agency",
    },
    description: {
      ru: `Разработка и сопровождение модуля резервирования и покупки авиабилетов на базе 1Сб для туристического агентства`,
      en: `Development and support of a module for booking and purchasing tickets based on 1C, for a travel agency, support and maintenance of the system.`,
    },
    from: new Date(2005, 4),
    to: new Date(2007, 5),
  },
  {
    key: "fr_massandra",
    country: "ru",
    img: "fr_massandra.png",
    short: "Massandra market",
    title: {
      ru: "Интернет магазин Массандровских вин",
      en: "Massandra wine internet market",
    },
    description: {
      ru: `Интернет магазин вина из коллекции "Массандра", Сделал для себя, как проба пера в новых на тот момент для меня web технологиях,
      магазин долго приносил доход, был продан.`,
      en: `Online wine store from the "Massandra" collection, Was made for myself, as a first step in new for me web technology,
      the store brought income for a long time, in final was sold.`,
    },
    techStack: ["php", "mysql", "js", "jquery", "css", "handlebars", "git"],
    from: new Date(2006, 1),
    to: new Date(2006, 5),
  },
  {
    key: "1c_koktebel",
    country: "ua",
    img: "1c_koktebel.png",
    short: "1C Koktebel",
    title: {
      ru: 'Коньячный завод "Коктебель"',
      en: 'Brandy factory "Koktebel"',
    },
    description: {
      ru: `Большой проект, доработка и внедрение системы управления предприятием
      на базе конфигурации "1С Производство" на заводе "Коктебель". Автоматицация бухгалтерии,
      учет ГСМ и транспотрного парка, учет по с/х и виноградникам. Работа велась на территории завода коммандой из 10ти человек.`,
      en: `Large project for "Koktebel" factory. Implement enterprise management system based on the configuration "1C ERP".
      Adopting to business requirements from different factory departments like: logistic, accounting department,  transport park,
      agriculture and vineyards. The work was carried out on the territory of the plant by a team of 10 people.`,
    },
    techStack: ["1c"],
    from: new Date(2004, 5),
    to: new Date(2005, 2),
  },
  {
    key: "nv_link_trade",
    country: "ua",
    img: "nv_link_trade.png",
    short: "Link Trade",
    title: {
      ru: "Биржа интернет трафика",
      en: "Internet traffic exchange service",
    },
    description: {
      ru: `Биржа интернет трафика. С одной стороны были владельцы площадок, они могли настраивать у себя в админке поведение системы,
      например вести списки по тематике ссылок в разрезе представленных площадок, настраивать различные фильтры, стоп слова.
      С другой стороны выступали покупатели трафика, они имели доступ к списку предоставляемых продавцами площадок и могли выбирать
      наиболее подходящие и эффективные из них`,
      en: `Internet traffic exchange. On the one hand, they were the owners of the sites, they could harm themselves in the admin panel of the system behavior,
      for example, maintain lists by topic in the context of the sites presented, for various filters, stop words.
      On the other hand, the interests of buyers, they have access to a list of trading platforms and have a choice
      the most suitable and closest of them`,
    },
    techStack: [
      "js",
      "php",
      "mysql",
      "jquery",
      "underscore",
      "symfony",
      "svn",
      "mercurial",
      "vagrant",
    ],
    from: new Date(2008, 1),
    to: new Date(2010, 6),
  },
  {
    key: "nv_seotop",
    country: "ua",
    img: "nv_seotop.png",
    short: "SEO TOP",
    title: {
      ru: `Набор СЕО инструментов`,
      en: `A set of SEO tools`,
    },
    description: {
      ru: `Набор СЕО инструментов для продвижения ресурсов в социальных сетях, форумах, новостных лентах и сервисах социальных закладок.
      Генератор уникальных текстов по ключевым словам, и т.д.`,
      en: `A set of SEO tools for promoting resources in social networks, forums, news feeds and social bookmarking services.
      Generator of unique texts by keywords, etc.`,
    },
    techStack: [
      "js",
      "php",
      "mysql",
      "jquery",
      "underscore",
      "symfony",
      "svn",
      "mercurial",
      "vagrant",
    ],
    from: new Date(2008, 1),
    to: new Date(2010, 6),
  },
  {
    key: "nv_forumok",
    country: "ua",
    short: "Forumok",
    img: "nv_forumok.png",
    url: "https://forumok.com/",
    title: {
      ru: "Форумок Маркетинг/СЕО сервис",
      en: "Forumok Marketing/SEO service",
    },
    description: {
      ru: `Форумок - комплексная система продвижения товаров и услуг в социальных сервисах рунета: форумы, Twitter, ВКонтакте,
      Facebook, Мой мир@mail.ru, Google+. Сотни тысяч пользователей моментально отреагируют на ваше предложение. Простой и в тоже время
      гибкий заказ позволит вам быть первым в своем деле - ведь нет более активной аудитории, чем форумы и твиттер. Для твиттерян и форумчан
      это монетизация своего любимого дела и общения на своих сервисах.`,
      en: `Forumok is a complex system for promoting goods and services in the social services of the Russian Internet: forums, Twitter,
      VKontakte, Facebook, My world@mail.ru, Google+. Hundreds of thousands of users will instantly respond to your offer. Simple and at the same time
      a flexible order will allow you to be the first in your business - after all, there is no more active audience than forums and twitter.
      For twitterers and forum users it is the monetization of your favorite business and communication on your services.`,
    },
    techStack: [
      "js",
      "jquery",
      "php",
      "symfony",
      "mysql",
      "twitterAPI",
      "facebookAPI",
      "mercurial",
    ],
    from: new Date(2009, 1),
    to: new Date(2010, 6),
  },
  {
    key: "nv_video preview_builder",
    country: "ua",
    img: "nv_video_preview_builder.png",
    short: "Video tools",
    title: {
      ru: "Сервис обработки видео",
      en: "Video processing service",
    },
    description: {
      ru: `Админ-модуль для подготовки CD/DVD фильмов для заливки на видео хостинг.
      Проверка и нормализация формата и разрешения, выбор кадра для тайтла. Генерация короткого превью`,
      en: `Admin module for preparing CD/DVD movies for uploading to video hosting.
      Checking and normalizing the format and resolution, selecting a frame for the title. Short preview generation`,
    },
    techStack: ["ffmpeg", "bash", "imageMagic", "mercurial"],
    from: new Date(2010, 1),
    to: new Date(2010, 12),
  },
  {
    key: "nv_bot_detector",
    country: "ua",
    img: "nv_anti_bot.png",
    short: "TrafficQuality",
    title: {
      ru: "TrafficTrade детектор накрутки трафика",
      en: "TrafficTrade traffic bot detector",
    },
    description: {
      ru: `Сервис оценки качества покупаемого трафика. Часть более крупной системы по покупке продаже трафика.
      Задачей сервиса было выявление роботов генерирующих трафик путём специальных станиц ловушек.`,
      en: `Service for assessing the quality of purchased traffic. Part of a larger system for buying and selling traffic.
      The service request was to detect robots generating traffic from certain trap pages.`,
    },
    techStack: ["php", "mysql", "js", "css", "html", "mercurial"],
    from: new Date(2010, 1),
    to: new Date(2010, 12),
  },
  {
    key: "am_frankfurt",
    country: "dm",
    img: "am_frankfurt.png",
    short: "Parking API",
    title: {
      ru: "Интеграция Апи паркинга на сайте аэропорта",
      en: "Implementing ParkingAPI on airport site.",
    },
    description: {
      en: `Web interface for booking parking slots, integration with API for Frankfurt airport`,
      ru: `Веб-интерфейс для бронирования парковочных мест, интеграция с API для аэропорта Франкфурта`,
    },
    techStack: ["rabbitmq", "php", "mysql", "svn"],
    from: new Date(2011, 1),
    to: new Date(2011, 7),
  },
  {
    key: "sf_bstow",
    country: "us",
    img: "sf_bstow.png",
    short: "Bstow",
    url: "https://bstow.com",
    title: {
      ru: "Bstow, SPA приложение для сборов в благотворительные организации",
      en: "Bstow, white labeling SPA for donation to charity organization",
    },
    description: {
      ru: `bstow Одностраничное приложение, которое позволяет пользователям делать пожертвования различным некоммерческим организациям,
      собирая сдачу от своих ежедневных покупок. Пользователи имеют уникальную возможность беспрепятственно делать пожертвования любым
      благотворительным организациям по своему выбору, привязывая банковские счета к своей учетной записи. Широкий спектр уведомлений
      по электронной почте позволит пользователю узнать, сколько набралось сдачи и в какую благотворительную организацию пожертвованы эти средства.`,
      en: `bstow A single page application, which allows users to donate to various non-profits by gathering spare change from their daily purchases.
      Users have a unique opportunity to seamlessly donate to any charity organizations of their choice by creating accounts
      and adding bank account. A wide range of email notifications will let user know how much spare change is donated and when
      they are forwarded to the charity organization of their choice.`,
    },
    techStack: [
      "js",
      "nodejs",
      "sails",
      "mongodb",
      "pug",
      "plaidAPI",
      "stripeAPI",
      "git",
    ],
    from: new Date(2015, 2),
    to: new Date(2019, 8),
  },
  {
    key: "sf_int_aggregation",
    country: "us",
    short: "Profitability",
    title: {
      ru: "Расчет доходности компании/проектов/сотрудников",
      en: "Calculation of profitability of the company/projects/employees",
    },
    description: {
      ru: `Внутренняя система мониторинга прибыльности компании в разрезе (подразделение / проект / сотрудник).
      Система консолидировала данные из разных используемых компанией сервисов отвечающих за разные аспекты бизнеса.
      Типа планирование людских ресурсов,
      управление проектами, трекер задач, персональные расчеты, расчеты с клиентами, затраты на офисы и т.д.`,
      en: `Internal system for monitoring the profitability of the company in the context (division / project / employee).
      The system consolidated data from different services used by the company responsible for different aspects of the business.
      Types of human resources planning, project management, task tracker, personal accounts, accounts with clients, office costs, etc.`,
    },
    techStack: [
      "mongodb",
      "graphql",
      "apollographql",
      "redmineAPI",
      "git",
      "gitlab",
      "crm API",
      "hrm API",
      "google docs API",
      "google auth API",
    ],
    from: new Date(2019, 1),
    to: new Date(2019, 10),
  },
  {
    // https://twelvedeg.com/portfolio/frogio/
    key: "sf_frogio",
    country: "us",
    img: "sf_frogio.png",
    short: "Frogio",
    title: {
      ru: "Frogio, социальная медиа платформа",
      en: "Frogio, social media platform",
    },
    description: {
      en: "A social media platform showcasing unique things about your city",
      ru: "Социальная медиа платформа построенная вокруг уникальности разных городов",
    },
    from: new Date(2015, 1),
    to: new Date(2016, 5),
    techStack: [
      "js",
      "nodejs",
      "mongodb",
      "jquery",
      "git",
      "twitterAPI",
      "facebookAPI",
    ],
  },
  {
    key: "sf_american_certified",
    country: "us",
    short: "American Certified",
    img: "sf_americancertified.png",
    title: {
      ru: "American Certified, торговая площадка",
      en: "American Certified, marketplace",
    },
    description: {
      ru: `American Certified — ваш поставщик всего, что сделано в Америке, и активный участник движения за сознательное потребление.
      С помощью нашего интернет-магазина (более 3 миллионов товаров от тысяч производителей) и подробного каталога американских производителей
      мы надеемся дать потребителям возможность принимать обоснованные и ответственные решения о покупке и поддержать те предприятия, которые,
      по их мнению, действуют в соответствии с их идеалами, будь то наемные работники. работников профсоюзов,
      нанимает на работу ветеранов или производит углеродно-нейтральную продукцию.`,
      en: `American Certified is your source for everything Made-in-America,
      and an active participant in the conscious consumer movement.
      Through our online store (Over 3 million products by thousands of makers)
      and detailed directory of American makers, we hope to empower consumers to make informed,
      responsible purchasing decisions and support those businesses they feel operate along their ideals-be
      it whether the business hires union workers, employs veterans, or produces carbon neutral products. `,
    },
    from: new Date(),
    to: new Date(),
    techStack: ["php", "magento", "mysql"],
  },
  {
    key: "sf_safetytag",
    country: "us",
    img: "sf_safetytag.png",
    short: "Safetytag",
    title: {
      ru: "Safetytag, Проект призванный улучшить качество медицинской помощи за счет своевременного предоставления критически важной информации о поцеенте",
      en: "Safetytag, A project designed to improve the quality of care through the timely provision of critical information about the patient",
    },
    description: {
      en: `A SaaS platform that addresses a problem in youth sports today,
      where practices and games don’t have medically trained personnel on hand to handle injuries and chronic illnesses.`,
      ru: `SaaS платформа , Предназначенная хранить медицинские предписания и ограничения школьных команд и спортивных секций,
      где на тренировках и играх нет подготовленного медицинского персонала.`,
    },
    techStack: [
      "js",
      "nodejs",
      "sails",
      "mongodb",
      "redis",
      "nginx",
      "paypalAPI",
      "cucumber",
      "jasmine",
      "jenkins",
      "less",
      "apacheBenchmark",
      "Bees with machine guns",
    ],
    from: new Date(2013, 2),
    to: new Date(2016, 4),
  },
  {
    key: "sf_maeus",
    country: "us",
    img: "sf_maeus.png",
    short: "Maeus",
    title: {
      ru: "Maeus, сервис для музыкантов",
      en: "Maeus, service for musicians",
    },
    description: {
      ru: `Maeus — это музыкальное приложение, которое помогает людям находить новых исполнителей.
      Он проигрывает случайные треки и скрывает информацию о музыкантах для непредвзятого суждения о музыке.`,
      en: `Maeus is a music app that helps people discover new artists.
      It plays random tracks and hides information about musicians for an unbiased judgement on the music.`,
    },
    techStack: [
      "python",
      "django",
      "mongodb",
      "nginx",
      "angular",
      "less",
      "git",
    ],
    from: new Date(2015, 1),
    to: new Date(2016, 1),
  },
  {
    key: "sf_yadsa",
    country: "us",
    img: "sf_yadsa.png",
    short: "YADSA",
    url: "https://apkpure.com/yadsa-digital-service-market/com.zelantsoft.yadsa",
    title: {
      ru: "YADSA, Возможность заработать Bitcoins за участие в платных опросах",
      en: "YADSA, Participation in paid surveys, and get Bitcoins",
    },
    description: {
      en: `You play for real Bitcoin. The point of the game is
      to get a lot of Bitcoin and cash out! But really, the point of the game is to get people to tell you the real truth.
      In YaDSa, you can anonymously ask questions of people you know. You can ask them to which you have the answers (ex: "What's 14 + 17?").
      Or maybe something a bit more challenging... You can ask for a Picture or a Video or a Location. Or just some random text.
      It's up to you.`,
      ru: `Игра с возможностью заработать биткойны. Суть игры в том
      чтобы получить много биткойнов и обналичить их! Но на самом деле смысл игры в том, чтобы заставить людей сказать вам настоящую правду.
      В ЯДСа вы можете анонимно задавать вопросы знакомым людям. Вы можете спросить их, на что у вас есть ответы или может быть,
      что-то более сложное... Вы можете запросить изображение, видео или местоположение.`,
    },
    techStack: ["js", "ionic", "git"],
    from: new Date(2016, 3),
    to: new Date(2016, 9),
  },
  {
    key: "sf_sport",
    country: "us",
    img: "sf_sport_baseball.png",
    short: "Sport Apps",
    title: {
      ru: "Прилошения Спортивной Статистики",
      en: "Sport Statistics Apps",
    },
    description: {
      en: `Assisted "One Two See" development team with a UI engineering effort and QA. (football, basketball, baseball,...)`,
      ru: `Разработка UI с отображением статистики для серии спортивных приложений (футбол, баскетбол, бейсбол,...)
      для компании "One Two See"`,
    },
    techStack: ["js", "css", "svg", "d3", "git"],
    from: new Date(2013, 1),
    to: new Date(2014, 1),
  },
  {
    key: "sf_logical_living",
    country: "us",
    img: "sf_logical_living.png",

    short: "Logical Living",
    url: "https://logical-living.com",
    title: {
      ru: "Logical Living — green стартап",
      en: "Logical Living — green startup",
    },
    description: {
      en: `Logical Living is a startup that wants to make it easy for people to live more green.`,
      ru: `Logical Living — это стартап, который хочет помочь людям жить более экологично.`,
    },
    techStack: ["js", "php", "codeigniter", "mysql", "git"],
    from: new Date(2014, 1),
    to: new Date(2014, 12),
  },
  {
    key: "sf_united_air",
    country: "us",
    img: "sf_united_air.png",
    short: "UnitedAir Simulator",
    title: {
      ru: "United Airline Simulator",
      en: "United Airline Simulator",
    },
    description: {
      en: `United Airline Simulator. When a major US airline needed to overhaul their internal training system,
      they partnered with Speed & Function to create an ipad-based training simulation.
      Their existing training platform crashed constantly, resulting in rescheduled trainings.
      Our solution — we developed a front-end based simulator of the training platform to get their on-boarding process back on track.`,
      ru: `Симулятор United Airline. Когда крупной американской авиакомпании потребовалось пересмотреть свою внутреннюю систему обучения,
      они сотрудничали со Speed & Function для создания тренировочной симуляции на базе iPad.
      Их существующая тренировочная платформа постоянно зависала, что приводило к переносу тренировок.
      Наше решение — мы разработали интерфейсный симулятор учебной платформы, чтобы вернуть их процесс адаптации в нужное русло.`,
    },
    techStack: ["ts", "js", "angular", "d3", "sass", "git", "protractor"],
    from: new Date(2016, 1),
    to: new Date(2018, 12),
  },
  {
    key: "sf_dlux",
    country: "us",
    img: "sf_dlux.png",
    short: "Dlux",
    title: {
      ru: "Dlux SaaS платформа",
      en: "Dlux SaaS platform",
    },
    description: {
      en: `Building lighting management SaaS for Dlux company.
      It delivers progressive health-driven lighting solutions for home and business purposes,
      services from analysis & design to implementation & maintenance.`,
      ru: `SaaS для управления освещением зданий для компании Dlux.
      Компания предлагает прогрессивные решения для освещения, ориентированные на здоровье, для дома и бизнеса.
      услуги от анализа и проектирования до внедрения и обслуживания.`,
    },
    techStack: [
      "js",
      "nodejs",
      "sails",
      "mongodb",
      "angular",
      "less",
      "bootstrap",
      "grunt",
      "git",
    ],
    from: new Date(2016, 1),
    to: new Date(2017, 1),
  },
  {
    key: "sf_higher_next",
    country: "us",
    short: "Higher Next",
    title: {
      ru: "Higher Next, 'экзаменационная платформа'",
      en: "Higher Next, proctoring platform",
    },
    description: {
      en: `We designed and developed a comprehensive, interactive, masonry-style help system for a Java applet-based proctoring app.
      The system collects stats about client actions success/failure and allows to submit feedback.
      We are currently working on HTML5-based proctoring system that records user actions, audio and video.`,
      ru: ``,
    },
    techStack: ["js", "php", "codeigniter", "mysql", "git"],
    from: new Date(2015, 1),
    to: new Date(2016, 1),
  },
  {
    key: "sf_info_wall",
    country: "us",
    img: "sf_infowall.png",
    short: "Infowall",
    title: {
      ru: "Infowall, легковесная СМS",
      en: "Infowall, A lightweight CMS",
    },
    description: {
      en: `A lightweight CMS, designed with the entry-level computer user in mind,
      Infowall’s easy to use administration features provide content managers
      with the ability to create a robust CMS capable of handling even the most intricate types of content.`,
      ru: `Легкая CMS, разработанная для пользователей компьютеров начального уровня,
      Простые в использовании функции администрирования Infowall предоставляют контент-менеджерам
      с возможностью создания надежной CMS, способной обрабатывать даже самые сложные типы контента.`,
    },
    techStack: [
      "js",
      "express",
      "mongodb",
      "bootstrap",
      "underscore",
      "backbone",
      "git",
    ],
    from: new Date(2013, 6),
    to: new Date(2015, 6),
  },
  {
    key: "sf_proctor_u",
    country: "us",
    img: "sf_proctor_u.png",
    short: "ProctorU",
    title: {
      ru: "ProctorU, экзаменационная платформа",
      en: "ProctorU, proctoring platform",
    },
    description: {
      en: `HigherNext is an testing platform for academic testing, licensing it"s innovative solution
      (test administration, online proctoring, certification) to existing tests and certifications.
      The flagship product is a standardized business skills exam, which enables entry level job applicants
      to demonstrate their skills in key business subject areas in a uniform and measurable way to employers.`,
      ru: `HigherNext — платформа для академического тестирования, лицензирование инновационного решения.
      (администрирование тестов, онлайн-прокторинг, сертификация) к существующим тестам и сертификатам.
      Флагманский продукт — это стандартизированный экзамен по деловым навыкам, который позволяет кандидатам на работу начального уровня
      демонстрировать работодателям свои навыки в ключевых предметных областях бизнеса единообразным и измеримым образом.`,
    },
    techStack: ["drupal", "mysql", "php", "git"],
    from: new Date(2014, 1),
    to: new Date(2015, 1),
  },
  {
    key: "sf_spa_standard",
    country: "us",
    img: "sf_spa-standard.png",
    short: "SPA Standard",
    title: {
      ru: "SPA Standard, e-commerce",
      en: "SPA Standard, e-commerce",
    },
    description: {
      en: `Spa Standard is an educational community site with e-commerce elements,
      several paid membership levels with different sets of permissions, interactive videos, E-courses, podcasts, webinars and blogs.`,
      ru: `Spa Standard — это сайт образовательного сообщества с элементами электронной коммерции,
      несколько платных уровней членства с разными наборами разрешений, интерактивные видео, электронные курсы, подкасты, вебинары и блоги.`,
    },
    techStack: ["php", "drupal", "grunt", "sass", "jquery", "mysql", "git"],
    from: new Date(2014, 1),
    to: new Date(2016, 1),
  },
  {
    key: "sf_spark",
    country: "us",
    short: "Spark DSG",
    img: "sf_sparkdsg.png",
    url: "https://sparkdsg.com/",
    title: {
      ru: "Spark DSG, сайт компании",
      en: "Spark DSG, company site",
    },
    description: {
      en: `Spark DSG is a team of experienced designers and information architects who specialize in online consumer experiences
      for regional, national and international brands.`,
      ru: `Spark DSG — это команда опытных дизайнеров и информационных архитекторов, специализирующихся на потребительском опыте в Интернете.
      для региональных, национальных и международных брендов.`,
    },
    techStack: ["js", "php", "wordpress"],
    from: new Date(2016, 1),
    to: new Date(2017, 1),
  },
  {
    key: "sf_int_redmine_plugin",
    country: "us",
    img: "sf_int_redmine_plugin.png",
    short: "Redmine plugin",
    techStack: ["ruby", "rubyonrails", "redmineAPI", "git", "gitlab"],
    title: {
      ru: "TimeTraking integration Redmine plugin",
      en: "Redmine плагин интеграции контроля времени",
    },
    description: {
      ru: `Внутренний проект, плагин для redmine,
      добавляющий веб хуки на события логирования времени и других манипуляций с затреканными часами`,
      en: `Internel project, redmine plugin,
      adding web hooks for time logging events and other manipulations with time entries`,
    },
    from: new Date(2018, 1),
    to: new Date(2018, 12),
  },
  {
    key: "bh_printer_monitor",
    country: "ru",
    img: "bh_printers.png",
    short: "Printer monitor",
    title: {
      ru: "Remote Printers monitiring platform",
      en: "Система удаленного контроля принтеров",
    },
    description: {
      ru: `Система удаленного мониторинга состояния принтеров для компании по их обслуживанию. Система состоит из центрального сервера и сети мониторов.
      Каждый монитор представлял из себя одноплантый ARM микрокомпьютер (OrangePiZero) под управлением Raspberry Pi Debian, GSM модем и helthcheck модуль упакованные в небольшой корпус.
      Модуль подключался к питанию и локальной сети (Eth./WiFi) и осуществлял мониторинг основных показателей находящихся в доступности по сети принтеров по протоколу SNMP, а именно чернил, тонера бумаги, состояние ошибки
      Принтера и параметры локальной сети в которой находится монитор, задавались удаленно с центрального сервера. Также на сервере был поднят VPN
      по которому с ним соединялись мониторы и сбрасывали актуальную информацию. Целью проекта была оптимизация процессов, логистики, профилактика проблем, минимизация простоя
      и возможность более точного и качественного планирования закупок расходных материалов и профилактического обслуживания. UI часть состояла из модуля управления мониторами
      (добавление новых, настройка принтеров и доступов) и модуля мониторинга для отображении актуальной картины состояния сети (дашборд, лог и карта)`,
      en: `A system for remote monitoring of printer status for a printer maintenance company. The system consists of a central server and a network of monitors.
      Each monitor was a single-plane ARM microcomputer (OrangePiZero) running a Raspberry Pi Debian, a GSM modem and a helthcheck module packed into a small case.
      The module was connected to power and a local network (Eth./WiFi) and monitored the main indicators of network-accessible printers using the SNMP protocol, namely ink, paper toner, error status
      The printer and the parameters of the local network in which the monitor is located were set remotely from the central server. VPN was also raised on the server
      through which monitors were connected to it and reset the current information. The aim of the project was to optimize processes, logistics, prevent problems, minimize downtime
      and the ability to better plan consumables procurement and preventive maintenance. The UI part consisted of a monitor control module
      (adding new ones, setting up printers and accesses) and a monitoring module to display an up-to-date picture of the network status (dashboard, log and map)`,
    },
    techStack: [
      "js",
      "express",
      "hasura",
      "graphql",
      "postgresql",
      "leaflet",
      "mapboxAPI",
      "vue",
      "apollographql",
      "IoT",
      "c",
      "bash",
      "SNMP",
      "sentry",
    ],
    from: new Date(2021, 1),
    to: new Date(2021, 12),
  },
  {
    key: "bh_media morph",
    country: "us",
    img: "bh_media_morph.png",
    short: "Media Morph",
    title: {
      ru: "Media Morph, сервис пакетной видеообработки",
      en: "Media Morph, batch media transform service",
    },
    description: {
      ru: `Сервис по автоматизированной обработке видеофайлов, Система позволяет создавать шаблоны обработки видео с помощью ffmpeg. Пользователь привязывал к аккаунту
      свои s3 бакеты для входящих и обработанных данных, выбирал или создавал свой шаблон обработки. Сервис контролировал входящие бакеты, и при появлении файла
      использовал доступный или запускал новый es2 инстанс с настроенным по шаблону ffmpeg воркером. По окончании результаты отправляются в бакет пользователя.`,
      en: `Service for automatic processing of video files, The system allows you to create templates for video processing using the Web interface translated into ffmpeg scripts. User linked to account
      own s3 buckets for incoming and processed data, chose or created your own processing template. The service controlled incoming buckets, and when mixing files
      used an available or launched a new es2 instance with a worker configured according to the ffmpeg template. As a result, the results are sent to the user's bucket.`,
    },
    techStack: [
      "js",
      "nodejs",
      "actionhero",
      "docker",
      "amazons3",
      "awslambda",
      "amazonec2API",
      "ffmpeg",
      "bash",
      "vue",
      "tailwindcss",
      "git",
      "gitlab",
      "docker",
      "sentry",
    ],
    from: new Date(2019, 5),
    to: new Date(2020, 1),
  },
  {
    key: "bh_magicflix",
    country: "us",
    short: "MagicFlix",
    img: "bh_magicflix.png",
    title: {
      ru: "MagicFlix, videohosting for magicians",
      en: "MagicFlix, видеохостинг для фокусников",
    },
    description: {
      en: `Thematic video streaming platform with modules for user management, content management, subscriptions and recurring payments, billing, input-output module,
      statistics collection, mailing module, system of requests from users, reporting module`,
      ru: `Тематическая стриминговая платформа с модулями управления пользователями, управления контентом, управления подписками и регулярные платежи, биллинг, модуль ввода вывода средств,
      сбор статистики, модуль рассылки, система обращений от пользователей, модуль отчетов`,
    },
    techStack: [
      "js",
      "php",
      "lua",
      "laravel",
      "mysql",
      "react",
      "redux",
      "reduxsaga",
      "docker",
      "gitlab",
      "ffmpeg",
      "redis",
      "nginx",
      "git",
      "stripeAPI",
      "twilioAPI",
      "mailchimpAPI",
      "cloudflare",
      "sentry",
      "graylog",
      "prometheus",
      "grafana",
    ],
    from: new Date(2018, 1),
    to: new Date(2020, 1),
  },
  {
    key: "bh_novi",
    country: "ru",
    img: "bh_novi.png",
    short: "Novi",
    title: {
      ru: "Novi, движок финансовой пирамиды",
      en: "Novi, pyramid scheme engine",
    },
    description: {
      ru: `Платформа для построения многоуровневой реферальной сети, с гибко настраиваемой системой распределения зашедших средств по дереву участников`,
      en: `A platform for building a multi-level referral network, with a flexibly customizable system for distributing input funds according to the tree of participants`,
    },
    techStack: [
      "js",
      "nodejs",
      "twilioAPI",
      "express",
      "docker",
      "postgresql",
      "d3",
      "react",
      "qiwiAPI",
      "sentry",
      "pug",
      "ramda",
      "rxjs",
      "socketIo",
      "jest",
    ],
    from: new Date(2020, 1),
    to: new Date(2020, 12),
  },

  {
    key: "bh_rhino",
    country: "us",
    img: "bh_rhino.png",
    short: "Rhino",
    title: {
      ru: "Rhino, мобильная стриминговая платформа",
      en: "Rhino, mobile streaming platform",
    },
    description: {
      ru: `MVP стриминговой платформы, Кабинет пользователя, аудио и видео посты, поиск, подписка, лайки, чат,
      видео стриминг через мобильное приложение, админка, статистика, отчеты`,
      en: `MVP of the streaming platform, User account, audio and video posts, search, subscription, likes, chat,
      video streaming through a mobile application, admin panel, statistics, reports`,
    },
    techStack: [
      "nodejs",
      "express",
      "mongodb",
      "amazons3",
      "awslambda",
      "rabbitmq",
      "twilioAPI",
      // "Sightengine API",
      "facebookAPI",
      "twitterAPI",
      "instagramAPI",
      // "usapay",
      "antmediaAPI",
    ],
    from: new Date(2019, 11),
    to: new Date(2021, 1),
  },
  {
    key: "bh_sirus_cams",
    country: "ru",
    img: "bh_sirus_cams.png",
    short: "Hardware project",
    title: {
      ru: "Верхнеуровневое API для оборудования",
      en: "Top level hardware control API",
    },
    description: {
      en: `A service that allows you to use hardware from different manufacturers under a single contract.
      Part of a larger residential automation project. During the work on the project, a problem arose when integrating equipment
      (cameras with number recognition system, outdoor panels) from different vendors caused by the peculiarities of the implementation of the same functionality.
      As a solution, a service was developed that provides a single API for managing similar equipment from different manufacturers.
      Also, a system of events generated by equipment was wrapped in a common interface.`,
      ru: `Сервис позволяющий использовать железо разных производителей по единому контракту.
      Часть более крупного проекта по автоматизации жилых комплексов. Во время работы над проектом встала проблема при интеграции железа
      (камеры с системой распознавания номеров, вызывные панели) от разных производителей вызванная особенностями реализации одной и той же функциональности.
      Как решение был разработан сервис предоставляющий единый API для управления аналогичным оборудованием от разных производителей.
      Также общим интерфейсом была обернута система событий генерируемых оборудованием`,
    },
    techStack: [
      "js",
      "nodejs",
      "koa",
      "git",
      "gitlab",
      "docker",
      "rabbitmq",
      "ramda",
    ],
    from: new Date(2020, 1),
    to: new Date(2021, 11),
  },
  {
    key: "sollers",
    country: "ru",
    img: "sollers.png",
    short: "Tariff calculator",
    title: {
      ru: "B2B / B2С Платформа по аренде транспорта",
      en: "B2B / B2С Vehicles leasing platform",
    },
    description: {
      en: `I was engaged in the development and implementation of a service for calculating the tariff for leasing, as well as a service for messaging with clients, and also helped in the development of the frontend.`,
      ru: `Занимался разработкой и внедрением сервиса расчета тарифа для лизинга, а также сервиса для обмена сообщениями с клиентами, помогал в разработке фронта.`,
    },
    techStack: [
      "js",
      "nodejs",
      "nginx",
      "postgresql",
      "googleAPI",
      "express",
      "socketIo",
      "vue",
      "docker",
      "k8s",
      "helm",
      "git",
      "gitlab",
      "rxjs",
      "ramda",
    ],
    from: new Date(2020, 1),
    to: new Date(2021, 11),
  },
  {
    key: "potok",
    country: "ru",
    img: "potok.png",
    short: "Potok",
    title: {
      ru: "B2C Кредитный Сервис",
      en: "B2C Lending Service",
    },
    description: {
      en: `Investment platform. Worked in a team of 6 people on project services that responsible for the "investor's office",
      was engaged in rewriting legacy code on TS, as well as developing new features.`,
      ru: `Инвестиционная платформа. Работал в команде из 6ти человек над сервисами проекта отвечающими за "кабинета инвестора",
      в основном занимался переписыванием легаси кода на TS, а также разработкой новых фич.`,
    },
    techStack: [
      "js",
      "ts",
      "postgresql",
      "nodejs",
      "nginx",
      "jest",
      // "sinon",
      "koa",
      "vue",
      "docker",
      "kafka",
      "k8s",
      // "Y-Cloud",
    ],
    from: new Date(2021, 11),
    to: new Date(2022, 9),
  },
];

// http://oxy-oxygen.com/

// Oxygen
// Shelfs builder
