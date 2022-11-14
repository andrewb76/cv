import { IEnRu } from './aboutMe'

export interface IExperience {
  list: {
    company: IEnRu
    position: IEnRu
    from: IEnRu
    to: IEnRu
    responsibilities: IEnRu[]
  }[]
  experienceFooter: IEnRu
}

export const experience: IExperience = {
  list: [
    {
      company: { en: 'Potok-Digital ltd.', ru: 'ООО Поток-Диджитал' },
      position: { en: 'Senior Full Stack Developer', ru: 'Инженер' },
      from: { en: 'November 2021', ru: 'Ноябрь 2022' },
      to: { en: 'September 2022', ru: 'Сентябрь 2022' },
      responsibilities: [
        {
          en: `Investment platform project. Worked on supporting a monolithic NodeJS application responsible for lending functionality.
          I also mainly did related front-end subtasks (Vue) to reduce the time to delivery.
          Engaged in refactoring and rewriting legacy code from JS to TypeScript. Development and implementation of new features, updating old and developing new tests.
          Autotests, code review, CI/CD, DockerSwarm, 2 week sprints`,
          ru: `Проект инвестиционной платформы. Работал над потдержкой монолитного nodejs приложения отвечающего за функционал кредитования.
          Также в основном делал связанные фронтовые подзадачи (Vue) чтоб сократить время на доставку функционала в продакшин
          Занимался рефакторингом и переписыванием легаси кода с JS на TypeScript. Разработкой и внедрением нофых фич, актуалицацией старых и разработкой новых тестов.
          Автотесты, codeReviw, CI/CD, DockerSwarm, 2х недельные спринты`
        }
      ]
    },
    {
      company: {
        en: 'Sollers Technology ltd.',
        ru: 'ООО Соллерс-Технологии'
      },
      position: { en: 'Senior Full Stack Developer', ru: 'Инженер' },
      from: { en: 'August 2020', ru: 'Август 2020' },
      to: { en: 'November 2021', ru: 'Ноябрь 2021' },
      responsibilities: [
        {
          en: `B2B/B2C Car leasing platform for dealerships. Developed the service of calculating the tariff amount and payment schedule (NodeJS/Vue/Postgres),
          communications with the backend (Java) were carried out through REST and Сamunda pipelines.
          Developed a messaging module between dealer support departments and end users (NodeJS/Socket.io/Postgres).
          Actively participated in the development of BPML schemes for business processes and their implementation in Camunda.
          I also worked a little on the front-end of the application (Vue). Agile, CI/CD, K8s`,
          ru: `B2B/B2C Платформа по предостовления автомобилей в лизинг для диллерских центров. Разработал сервис по калькуляции тарифа и графика платежей (NodeJS/Vue/Postgres),
          коммуникации c backend (Java) осуществлялись через REST и пайплайны Камунды.
          Разработал модуль обмена сообщениями между отделами потдержки диллеров и конечными пользователями (NodeJS/Socket.io/Postgres).
          Активно участвовал в разработке BPML схем для бизнес процессов и их имплементацией в Camunda.
          Также немного занимался фронтовой частью приложения (Vue). Agile, CI/CD, K8s`
        }
      ]
    },
    {
      company: { en: 'BlackHoarseTeam', ru: 'BlackHoarseTeam' },
      position: { en: 'Senior Full Stack Developer', ru: 'Инженер' },
      from: { en: 'August 2020', ru: 'Август 2020' },
      to: { en: 'for now', ru: ' - ' },
      responsibilities: [
        {
          en: `Web Dev. Company "Black Horse Team".
          Was implemented more than five projects of varying complexity. From refinement and refactoring of existing ones to development from scratch.
          Thematic Video Hosting, Mobile Streaming Platform, 3D furniture designer,...
          All stages of development from finding out business needs to designing architecture, breaking down into iterations and their estimates,
          splitting the user stories into tasks and subtasks, development, manual and automatic testing.
          Static code analysis and hard linter. Architecture review is separated from code review at the task level. Agile, Scrum, CI/CD`,
          ru: `Web Dev. Company "Black Horse Team". Реализовали более пяти проектов разной сложности,
          от доработки и рефакторинга существующих до разработки с нуля. Тематический Видеохостинг, Мобильная стриминговая платформа,
          3D конструктор мебели,... Все стадии разработки от выяснение бизнес целей до разработка архитектуры, разбиение на итерации и их оценка,
          дробление юзер строи на задачи и подзадачи, разработка, ручное и автоматическое и тестирование.
          Статический анализ кода и жесткий Линтер. Ревью архитектуры отделено от ревью кода на уровне задач. Agile, Скрам,  CI/CD.
          `
        }
      ]
    },
    {
      company: { en: 'SpeedAndFunctions', ru: 'SpeedAndFunctions' },
      position: { en: 'Senior Full Stack Developer', ru: 'Инженер' },
      from: { en: 'August 2020', ru: 'Август 2020' },
      to: { en: 'November 2021', ru: 'Ноябрь 2021' },
      responsibilities: [
        {
          en: `Web Dev. Company based in California." Was realized about 20 projects on LAMP, MEAN and others stacks.
          Creating and deliver highly efficient application-based solutions. Optimizing the company’s complaints handling process.
          Mentor and Train junior developers in Javascript. Taking a part in Agile processes: Daily Scrum, Backlog Grooming, Sprint Planning,
          Sprint Review, Retrospectives, Planning Poker. Collaborated with a multitude of non technical stakeholders including project owners,
          project managers, business analyst, account executive and UI/UX designers.
          Participated in architecture design and code reviews to ensure best practices and high quality code.
          Implemented the practice of static code quality control on one of the current worked on projects,
          and comit this practice as part of corporate rules for any project.`,
          ru: `Web Dev. Company из Калифорнии. Реализовано около 20 проектов на стеках LAMP, MEAN и других технологиях.
          Создание и поставка высокоэффективных прикладных решений.
          Оптимизация процесса работы с претензиями в компании. Наставничество и обучение младших разработчиков Javascript. Участие в Agile-процессах. : Ежедневный Скрам, Беклог груминг, планирование спринтов, ретроспективы, покер планинг.
          Взаимодействовал и находил общий язык  с множеством нетехнических специалистов, включая владельцев проектов, менеджеров, бизнес-аналитиков, менеджеров по работе с клиентами и дизайнеров UI/UX, и т.д.
          Участвовал в проектировании архитектуры и проверке кода для обеспечения высокого качества продукта.
          Внедрил практику статического проверки кода на одном из текущих проектов, и зафиксировал эту практику как корпоративное правил для любого проекта.
          `
        }
      ]
    },
    {
      company: { en: 'Ameria GmbH ', ru: 'Ameria GmbH' },
      position: { en: 'Full Stack Developer', ru: 'Инженер' },
      from: { en: 'September 2011', ru: 'Сентябрь 2011' },
      to: { en: 'January 2013', ru: 'Январь 2013' },
      responsibilities: [
        {
          en: `Ameria GmbH IT company based in Heidelberg, Germany. I have been worked on some internal corporative products based on popular in Germany CMS Typo3.
          Also worked on paking plases booking system project  for Frankfurt Airport (PHP/Symfony/MySql/SOAP/PHPUnit/Jenkins).`,
          ru: `Ameria GmbH ИТ-компания, базирующаяся в Гейдельберге, Германия. Я работал над внутрикорпоративными клиентскими продуктами на базе популярной в Германии CMS Typo3.
          Также работал над проектом системы бронирования парковочных мест для автостоянок аэропорта Франкфурта (PHP/Symfony/MySql/SOAP/PHPUnit/Jenkins).`
        }
      ]
    },
    {
      company: { en: 'NewVision ', ru: 'NewVision' },
      position: { en: 'Full Stack Developer', ru: 'Инженер' },
      from: { en: 'October 2008', ru: 'Октябрь 2008' },
      to: { en: 'September 2011', ru: 'Сентябрь 2011' },
      responsibilities: [
        {
          en: `"NewVision" company. Bunch of SEO oriented startups.
          Architecting and developing MVC applications using OOP and TDD concepts and LAMP stack. Participate in design and code reviews to ensure best practices and high quality code.
          We experimented on Agile methodology and practices, invited an Agile coach to improve the efficiency of our team,
          successfully implemented this approach to our workflow processes. Used pair programming for transfer knowledge.`,
          ru: `"NewVision" company. Работал над несколькими SEO-ориентированными стартапами.
          Разработка MVC приложений с использованием концепций ООП и TDD и стека LAMP. Участвуйте в ревью дизайна и кода,
          чтобы убедиться в использовании лучших практик и достичь высокого уровня качества продукта. Мы экспериментировали с методологией и практиками Agile,
          пригласили Agile-коуча для повышения эффективности нашей команды, успешно внедрили этот подход в наши рабочие процессы.
          Использовали парное программирование для передачи знаний.`
        }
      ]
    },
    {
      company: { en: 'QP Crimea', ru: 'КуПи Крым' },
      position: {
        en: 'Co-Founder, IT Director',
        ru: 'Соучередитель, ИТ-директор'
      },
      from: { en: 'October 2007', ru: 'Октябрь 2007' },
      to: { en: 'September 2008', ru: 'Сентябрь 2008' },
      responsibilities: [
        {
          en: `FMCJ Distributing company "QP Crimea". Direct and implement the operational strategy, business processes, and systems for overall distribution operations,
          including order fulfillment, warehousing, inventory management, logistic and transportation. Implements data-driven analytical tools and systems to
          continuously monitor operations, identify inefficiencies, and develop optimization strategies.`,
          ru: `FMCJ Дистрибьюторская компания "QP Крым". Разработка и внедрение стратегии развития, автоматизация бизнес-процессов в сфере отношения с поставщиками,
          оптимизирование и управление складскими запасами, логистики и транспортировки, товарного кредитования клиентов. Занимался внедрением аналитических инструментов
          и практик на основе анализа оперативных данных. Непрерывный мониторинг операций, выявление неэффективности и разработка стратегий оптимизации.`
        }
      ]
    },
    {
      company: { en: 'Before web development', ru: 'До вэб разработки' },
      position: { en: 'Developer', ru: 'Инженер' },
      to: { en: 'October 2008', ru: 'Октябрь 2008' },
      from: { en: '1994', ru: '1994' },
      responsibilities: [
        {
          en: `From 1994 to 1997 I worked at the Republican Information and Computing Center of the Crimean Ministry of Health.
          Developed and maintained a program for the registration of victims of the Chernobyl accident.
          From 1997 to 2000 he worked in the representative office of Oxford University Press in Ukraine, dealing with all aspects related to IT,
          accounting, logistics and business optimization. Implemented the 1C system,
          which allowed to significantly reduce the development time compared to the development of products in C++, Delphi and a similar stack.
          Until 2008, he was mainly involved in projects based on 1C for automation and optimization of business processes of various companies and enterprises of the Crimea.`,
          ru: `С 1994 по 97 работал в Респупликанском информационно-вычислительном центре министерства здравоохранения Крыма.
          Разработал и потдерживал программу по учету пострадавших от Чернобыльской аварии. С 97 по 2000 работал в  представительстве Оксфорд Университи Пресс на Украине,
          занимался всеми аспектами связанными с АйТи, учетом, логистикой и оптимизацией бизнеса. Внедрил систему 1С что позволило вразы сокротить время разработки
          по сравнению с разработкой продуктов на С++,  Делфи и похожем стеке. Вплоть до 2008 в основном занимался проектами на базе 1С по автоматицации
          и оптимизации бизнесс процессов различных компаний и предприятий Крыма.`
        }
      ]
    }
  ],
  experienceFooter: {
    en: 'More detail about menshioned above and others projects of mine can be found on my homepage in /#prjects section',
    ru: 'Более подробную информацию о упомянутых выше и других моих проектах можно найти по ссылке /#prjects моей домашней страницы'
  }
}
