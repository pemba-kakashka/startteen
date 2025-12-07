import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.about': 'О проекте',
    'nav.mentors': 'Менторы',
    'nav.success': 'Истории успеха',
    'nav.resources': 'Ресурсы',
    'nav.docs': 'Документы',
    'nav.applicationElements': 'Элементы заявки',
    'nav.contact': 'Контакты',
    'nav.apply': 'Подать заявку',
    'nav.becomeMentor': 'Стать ментором',
    
    // Hero Section
    'hero.title': 'StarTTeen — стартап‑академия для школьников и студентов',
    'hero.subtitle': 'Каждая идея может превратиться в реальный проект',
    'hero.description': 'Мы помогаем школьникам и студентам запускать свои первые проекты и стартапы — от идеи до реального результата.',
    
    // Mission
    'mission.title': 'Наша миссия',
    'mission.description': 'Дать возможность школьникам и студентам запускать собственные проекты и стартапы без преград. Помочь каждому реализовать свою идею и исполнить мечту! Мы создаем среду, где молодые и амбициозные ребята могут получить поддержку на всех стадиях — от первой идеи до успешного запуска.',
    
    // Benefits
    'benefits.title': 'Что вы получаете',
    'benefits.support.title': 'Поддержка менторов',
    'benefits.support.description': 'Студенты и специалисты с опытом в бизнесе и менеджменте',
    'benefits.consultation.title': 'Консультации по продвижению',
    'benefits.consultation.description': 'Помощь в масштабировании и развитии проекта',
    'benefits.funding.title': 'Шанс на финансирование',
    'benefits.funding.description': 'Возможность получить поддержку от партнёров и спонсоров',
    'benefits.community.title': 'Сообщество единомышленников',
    'benefits.community.description': 'Общение с такими же амбициозными молодыми предпринимателями',
    
    // How It Works
    'howItWorks.title': 'Как это работает',
    'howItWorks.step1.title': 'Подайте заявку',
    'howItWorks.step1.description': 'Опишите свою идею и получите обратную связь от экспертов',
    'howItWorks.step2.title': 'Получите ментора',
    'howItWorks.step2.description': 'Мы подберём опытного наставника под ваш проект',
    'howItWorks.step3.title': 'Запустите проект',
    'howItWorks.step3.description': 'Реализуйте идею с поддержкой команды и сообщества',
    
    // CTA
    'cta.title': 'Готовы запустить свой проект?',
    'cta.description': 'Присоединяйтесь к сообществу молодых предпринимателей и воплотите свою идею в жизнь',
    'cta.applications': 'Заявки открыты',
    'cta.free': 'Бесплатно',
    'cta.online': 'Онлайн формат',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Кто может участвовать в программе?',
    'faq.a1': 'Дети и подростки 14-23 лет. Школьники 7-11 классов и студенты 1-5 курсов из любого города России.',
    'faq.q2': 'Сколько длится программа?',
    'faq.a2': 'Программа рассчитана на 3-4 месяца активной работы с ментором.',
    'faq.q3': 'Нужно ли платить за участие?',
    'faq.a3': 'Нет, участие в программе полностью бесплатное.',
    'faq.q4': 'Какие проекты вы принимаете?',
    'faq.a4': 'Любые проекты с потенциалом решения реальных проблем: IT, социальные, образовательные, экологические.',
    'faq.q5': 'Как происходит отбор?',
    'faq.a5': 'Эксперты оценивают заявки по критериям: актуальность проблемы, реалистичность решения, мотивация участника.',
    
    // Footer
    'footer.description': 'Платформа для запуска молодёжных проектов и стартапов',
    'footer.main': 'Основное',
    'footer.support': 'Поддержка',
    'footer.contact': 'Контакты',
    'footer.supportHours': 'Поддержка: пн-пт 10:00-18:00 МСК',
    'footer.email': 'Email: support@startteen.ru',
    'footer.telegram': 'Telegram: @startteen',
    'footer.copyright': '© 2025 StarTTeen. Все права защищены.',
    
    // Pages
    'about.title': 'О проекте',
    'about.subtitle': 'Узнайте больше о нашей программе поддержки молодых предпринимателей',
    'about.whoWeAre': 'Кто мы?',
    'about.founderText': 'Меня зовут Алексей. Я ученик одной из лучших школ в своей стране. Я создал проект направленный на то, чтобы дать возможность школьникам и студентам со всей страны реализовывать свои идеи и воплощать их в жизнь.',
    'about.teamText': 'Наша команда - менторы и эксперты, которые всегда будут рады вам помочь и подвинут Ваш проект еще ближе к завершению. Подробнее о команде Вы можете почитать в разделе "Менторы".',
    'about.history': 'История проекта',
    'about.historyText': 'StartTeen начался с простой идеи - дать молодым предпринимателям возможность реализовать свои проекты с поддержкой опытных менторов.',
    'about.whyUs': 'Почему именно мы?',
    'about.whyUsText': 'Наша команда состоит из успешных предпринимателей и экспертов, которые прошли путь от идеи до реализации.',
    'about.howToParticipate': 'Как участвовать?',
    'about.howToParticipateText': 'Заполни простую форму в разделе: "Подать заявку", главное подробно опиши свою идею! Как это сделать, можешь почитать на странице "Документы"!',
    'about.thanks': 'Спасибо, что поддерживаете молодых создателей! Вместе мы строим сообщество будущих лидеров и предпринимателей.',

    // Docs page
    'docs.title': 'Документы',
    'docs.subtitle': 'и материалы',
    'docs.description': 'Всё необходимое для успешного участия в программе StartTeen. Изучите материалы перед подачей заявки.',
    'docs.importantNotice': 'Обязательно к изучению!',
    'docs.noticeText': 'Перед подачей заявки внимательно прочитайте "Гайд для участников". Это поможет вам лучше подготовить заявку и понять весь процесс участия в программе.',
    'docs.recommended': 'Рекомендуемый',
    'docs.requiredBefore': 'Обязательно перед заявкой',
    'docs.download': 'Скачать',
    'docs.helpTitle': 'Нужна помощь с документами?',
    'docs.helpText': 'Если у вас возникли вопросы по любому из документов или нужна помощь с заполнением заявки, не стесняйтесь обращаться к нам.',
    'docs.askQuestion': 'Задать вопрос',
    'docs.lastUpdate': 'Документы регулярно обновляются. Последнее обновление: декабрь 2024',
    'docs.documents.participantGuide.title': 'Гайд для участников',
    'docs.documents.participantGuide.description': 'Как проходит процесс, как подать идею, как общаться с менторами. О формате и этапах проекта, подробные советы по заполнению заявки.',
    'docs.documents.teamGuide.title': 'Гайд для команды',
    'docs.documents.teamGuide.description': 'Обязанности координатора, эксперта и ментора. Подробное описание ролей и ответственности каждого участника команды.',
    'docs.documents.mentorHandbook.title': 'Руководство для менторов',
    'docs.documents.mentorHandbook.description': 'Детальные инструкции для менторов: проведение встреч, разработка планов развития, оценка этапов и подготовка к презентациям.',
    'docs.documents.expertHandbook.title': 'Руководство для экспертов',
    'docs.documents.expertHandbook.description': 'Инструкции для экспертов: оценка заявок, участие в контрольных точках, поддержка менторов и финальная оценка проектов.',
    'docs.documents.projectTemplate.title': 'Шаблон описания проекта',
    'docs.documents.projectTemplate.description': 'Структурированный шаблон для описания вашего проекта: от проблемы до бизнес-модели и планов развития.',

    // Application Elements
    'applicationElements.title': 'Элементы заявки',
    'applicationElements.subtitle': 'Подробный список всех элементов, которые должны быть включены в вашу заявку для участия в программе StarTTeen.',
    'applicationElements.personalInfo': 'Личная информация',
    'applicationElements.personalInfoDesc': 'Основные данные о вас для регистрации в программе',
    'applicationElements.fullName': 'ФИО',
    'applicationElements.fullNameDesc': 'Полное имя для официального оформления документов',
    'applicationElements.age': 'Возраст',
    'applicationElements.ageDesc': 'Ваш текущий возраст на момент подачи заявки',
    'applicationElements.grade': 'Класс',
    'applicationElements.gradeDesc': 'Класс школы или курс университета',
    'applicationElements.city': 'Город',
    'applicationElements.cityDesc': 'Город проживания для координации встреч',
    'applicationElements.school': 'Школа / Образовательное учреждение',
    'applicationElements.schoolDesc': 'Название вашего учебного заведения',
    'applicationElements.required': 'Обязательно',
    'applicationElements.ideaTitle': 'Подробное описание идеи',
    'applicationElements.ideaDesc': 'Ключевые вопросы, которые помогут нам понять ваш проект',
    'applicationElements.problem': 'Проблема, которую вы решаете',
    'applicationElements.problemDesc': 'Опишите, как лично Вы в жизни столкнулись с проблемой или кто вам рассказал о ней. Приведите реальные примеры.',
    'applicationElements.solution': 'Ваше решение проблемы',
    'applicationElements.solutionDesc': 'Максимально подробно опишите то, чем ваше решение помогает людям и почему вы уверены, что оно будет полезно.',
    'applicationElements.howCameUp': 'Как вам в голову пришло решение проблемы?',
    'applicationElements.howCameUpDesc': 'История возникновения идеи, момент озарения или процесс размышлений.',
    'applicationElements.uniqueness': 'В чем уникальность вашей идеи',
    'applicationElements.uniquenessDesc': 'Сделайте акцент на неповторимость вашей идеи. Чем она отличается от других? Если не знаете — так и напишите.',
    'applicationElements.profitability': 'Почему ваше решение может быть прибыльно или полезно?',
    'applicationElements.profitabilityDesc': 'Опишите пользу решения и его коммерческий потенциал.',
    'applicationElements.requirements': 'Требования к нам как к платформе',
    'applicationElements.requirementsDesc': 'Напишите любые свои пожелания: как бы Вам было проще и удобнее сотрудничать с нами. Что бы Вы хотели видеть, какие особенности есть у Вас, которые нам нужно учесть.',
    'applicationElements.optional': 'Необязательно, но очень ценно для нас',
    'applicationElements.readyToApply': 'Готовы подать заявку?',
    'applicationElements.readyToApplyDesc': 'Теперь, когда вы знаете все требования, можете приступить к заполнению заявки.',
    'applicationElements.readGuide': 'Прочитать гайд',
    'applicationElements.submitApplication': 'Подать заявку',

    // Apply page
    'apply.title': 'Подать',
    'apply.subtitle': 'Готовы превратить свою идею в реальный проект? Заполните заявку и получите поддержку опытных менторов и экспертов.',
    'apply.important': 'ВАЖНО!',
    'apply.readGuideFirst': 'Перед заполнением формы обязательно ознакомьтесь с документом "Гайд для участников" в разделе "Документы". Это поможет вам лучше подготовить заявку и понять процесс участия.',
    'apply.processTitle': 'Процесс подачи заявки',
    'apply.step1': 'Изучите гайд для участников',
    'apply.step2': 'Заполните подробную форму заявки',
    'apply.step3': 'Дождитесь рассмотрения (до 5 рабочих дней)',
    'apply.step4': 'Получите ответ и начните работу с ментором',
    'apply.requiredData': 'Необходимые данные',
    'apply.readyToStart': 'Готовы начать?',
    'apply.readyToStartDesc': 'Нажмите кнопку ниже, чтобы открыть форму заявки. Уделите время качественному заполнению — это увеличит ваши шансы на участие в программе.',
    'apply.openForm': 'Открыть форму заявки',
    'apply.readGuideFirst2': 'Сначала читать гайд',
    'apply.hasQuestions': 'Есть вопросы?',

    // Mentors page
    'mentors.title': 'Наши менторы',
    'mentors.subtitle': 'Эксперты и специалисты с опытом в бизнесе, которые помогают участникам воплощать идеи в реальные проекты.',
    'mentors.searchPlaceholder': 'Поиск по имени или экспертизе...',
    'mentors.comingSoon': 'Менторы скоро появятся',
    'mentors.comingSoonDesc': 'Мы активно собираем команду экспертов. Хотите присоединиться к нашим менторам?',
    'mentors.becomeMentor': 'Стать ментором',
    'mentors.becomeMentorTitle': 'Станьте ментором',
    'mentors.becomeMentorDesc': 'Поделитесь своим опытом с молодыми предпринимателями и помогите им воплотить идеи в жизнь. Это отличная возможность дать обратно сообществу и найти перспективные проекты.',
    'mentors.fillApplication': 'Заполнить заявку ментора',

    // Success page
    'success.title': 'Истории успеха',
    'success.subtitle': 'Реальные проекты и достижения участников StarTTeen. Вдохновляйтесь и создавайте свои успешные истории!',
    'success.comingSoon': 'Кейсы в подготовке',
    'success.comingSoonDesc': 'Наши участники активно работают над своими проектами. Первые истории успеха появятся совсем скоро! Следите за обновлениями и не пропустите вдохновляющие кейсы.',
    'success.stayUpdated': 'Узнавайте первыми',
    'success.emailPlaceholder': 'Ваш email',
    'success.subscribe': 'Подписаться',
    'success.subscribeDesc': 'Получайте уведомления о новых кейсах и достижениях участников',
    'success.projectGrowth': 'Рост проектов',
    'success.projectGrowthDesc': 'От идеи до MVP за 3 месяца',
    'success.achievements': 'Достижения',
    'success.achievementsDesc': 'Победы в хакатонах и конкурсах',
    'success.launches': 'Запуски',
    'success.launchesDesc': 'Реальные продукты с пользователями',
    'success.createSuccess': 'Создать свою историю успеха',

    // Resources page
    'resources.title': 'Наши ресурсы',
    'resources.subtitle': 'Всё необходимое для успешного запуска и развития вашего проекта. От идеи до готового продукта с нашей поддержкой.',
    'resources.whatWeProvide': 'Что мы предоставляем',
    'resources.whatWeProvideDesc': 'Комплексная поддержка на всех этапах развития вашего проекта',
    'resources.workWith': 'С кем мы работаем',
    'resources.workWithDesc': 'Партнёры и спонсоры, которые поддерживают развитие молодых предпринимателей',
    'resources.partnersSoon': 'Список партнёров постоянно растёт. Скоро обновим раздел с новыми возможностями!',
    'resources.howCanHelp': 'Чем можем помочь?',
    'resources.howCanHelpDesc': 'Не знаете, с чего начать? Есть идея, но нужна поддержка? Подайте заявку, и мы подберём оптимальный набор ресурсов для вашего проекта.',

    // Contact page
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Есть вопросы о проекте? Нужна помощь с заявкой? Мы готовы ответить и поддержать вас на любом этапе.',
    'contact.contactInfo': 'Контактная информация',
    'contact.emailSupport': 'Email поддержка',
    'contact.emailSupportDesc': 'Основной канал связи',
    'contact.telegram': 'Telegram',
    'contact.telegramDesc': 'Быстрые ответы и уведомления',
    'contact.workingHours': 'Время работы',
    'contact.workingHoursValue': 'Пн-Пт: 9:00-18:00 МСК',
    'contact.responseTime': 'Отвечаем в течение 6 часов',
    'contact.faqQuick': 'Частые вопросы',
    'contact.howToApply': 'Как подать заявку?',
    'contact.requirements': 'Какие требования к участникам?',
    'contact.howToMentor': 'Как стать ментором?',
    'contact.whatSupport': 'Какую поддержку вы предоставляете?',
    'contact.writeUs': 'Написать нам',
    'contact.messageSent': 'Сообщение отправлено!',
    'contact.thankYou': 'Спасибо за ваше обращение. Мы ответим вам в течение 6 часов.',
    'contact.name': 'Имя',
    'contact.namePlaceholder': 'Ваше имя',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Тема',
    'contact.selectSubject': 'Выберите тему',
    'contact.subjectApplication': 'Вопрос по заявке',
    'contact.subjectMentoring': 'Менторство',
    'contact.subjectPartnership': 'Партнёрство',
    'contact.subjectTechnical': 'Техническая поддержка',
    'contact.subjectOther': 'Другое',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Опишите ваш вопрос подробно...',
    'contact.wantTelegram': 'Хочу получить ответ в Telegram',
    'contact.telegramUsername': '@ваш_telegram',
    'contact.sendMessage': 'Отправить сообщение',


    // Privacy & Terms
    'privacy.title': 'Политика конфиденциальности',
    'terms.title': 'Условия использования',
  },
  
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.mentors': 'Mentors',
    'nav.success': 'Success Stories',
    'nav.resources': 'Resources',
    'nav.docs': 'Documents',
    'nav.applicationElements': 'Application Elements',
    'nav.contact': 'Contact',
    'nav.apply': 'Apply',
    'nav.becomeMentor': 'Become a Mentor',
    
    // Hero Section
    'hero.title': 'StarTTeen — startup academy for school and university students',
    'hero.subtitle': 'Every idea can become a real project',
    'hero.description': 'We help school and university students launch their first projects and startups — from idea to real results.',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.description': 'To enable school and university students to launch their own projects and startups without barriers. Help everyone realize their idea and fulfill their dream! We create an environment where young and ambitious people can get support at all stages — from the first idea to successful launch.',
    
    // Benefits
    'benefits.title': 'What You Get',
    'benefits.support.title': 'Mentor Support',
    'benefits.support.description': 'Students and specialists with experience in business and management',
    'benefits.consultation.title': 'Promotion Consulting',
    'benefits.consultation.description': 'Help with scaling and project development',
    'benefits.funding.title': 'Funding Opportunity',
    'benefits.funding.description': 'Chance to receive support from partners and sponsors',
    'benefits.community.title': 'Community of Like-minded People',
    'benefits.community.description': 'Communication with equally ambitious young entrepreneurs',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.step1.title': 'Submit Application',
    'howItWorks.step1.description': 'Describe your idea and get feedback from experts',
    'howItWorks.step2.title': 'Get a Mentor',
    'howItWorks.step2.description': 'We will match you with an experienced mentor for your project',
    'howItWorks.step3.title': 'Launch Project',
    'howItWorks.step3.description': 'Implement your idea with team and community support',
    
    // CTA
    'cta.title': 'Ready to Launch Your Project?',
    'cta.description': 'Join the community of young entrepreneurs and bring your idea to life',
    'cta.applications': 'Applications Open',
    'cta.free': 'Free',
    'cta.online': 'Online Format',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Who can participate in the program?',
    'faq.a1': 'High school students (grades 9-11) and university students (years 1-3) from any city in Russia.',
    'faq.q2': 'How long does the program last?',
    'faq.a2': 'The program is designed for 3-4 months of active work with a mentor.',
    'faq.q3': 'Do I need to pay for participation?',
    'faq.a3': 'No, participation in the program is completely free.',
    'faq.q4': 'What kind of projects do you accept?',
    'faq.a4': 'Any projects with potential to solve real problems: IT, social, educational, environmental.',
    'faq.q5': 'How does the selection process work?',
    'faq.a5': 'Experts evaluate applications based on criteria: problem relevance, solution feasibility, participant motivation.',
    
    // Footer
    'footer.description': 'Platform for launching youth projects and startups',
    'footer.main': 'Main',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.supportHours': 'Support: Mon-Fri 10:00-18:00 MSK',
    'footer.email': 'Email: support@startteen.ru',
    'footer.telegram': 'Telegram: @startteen',
    'footer.copyright': '© 2025 StarTTeen. All rights reserved.',
    
    // Pages
    'about.title': 'About Project',
    'about.subtitle': 'Learn more about our program supporting young entrepreneurs',
    'about.whoWeAre': 'Who We Are?',
    'about.founderText': 'My name is Alexey. I am a student in one of the best schools in my country. I created a project aimed at giving students from all over the country the opportunity to realize their ideas and bring them to life.',
    'about.teamText': 'Our team consists of mentors and experts who will always be happy to help you and push your project even closer to completion. You can read more about the team in the "Mentors" section.',
    'about.history': 'Project History',
    'about.historyText': 'StartTeen began with a simple idea - to give young entrepreneurs the opportunity to realize their projects with support from experienced mentors.',
    'about.whyUs': 'Why Choose Us?',
    'about.whyUsText': 'Our team consists of successful entrepreneurs and experts who have gone from idea to implementation.',
    'about.howToParticipate': 'How to Participate?',
    'about.howToParticipateText': 'Fill out a simple form in the "Apply" section, the main thing is to describe your idea in detail! You can read how to do this on the "Documents" page!',
    'about.thanks': 'Thanks for supporting young creators! Together we are building a community of future leaders and entrepreneurs.',

    // Docs page
    'docs.title': 'Documents',
    'docs.subtitle': 'and materials',
    'docs.description': 'Everything necessary for successful participation in the StartTeen program. Study the materials before submitting your application.',
    'docs.importantNotice': 'Required Reading!',
    'docs.noticeText': 'Before submitting your application, carefully read the "Participant Guide". This will help you better prepare your application and understand the entire participation process.',
    'docs.recommended': 'Recommended',
    'docs.requiredBefore': 'Required before application',
    'docs.download': 'Download',
    'docs.helpTitle': 'Need help with documents?',
    'docs.helpText': 'If you have questions about any of the documents or need help filling out the application, don\'t hesitate to contact us.',
    'docs.askQuestion': 'Ask a question',
    'docs.lastUpdate': 'Documents are regularly updated. Last update: December 2024',
    'docs.documents.participantGuide.title': 'Participant Guide',
    'docs.documents.participantGuide.description': 'How the process works, how to submit an idea, how to communicate with mentors. About the format and stages of the project, detailed advice on filling out the application.',
    'docs.documents.teamGuide.title': 'Team Guide',
    'docs.documents.teamGuide.description': 'Responsibilities of coordinator, expert and mentor. Detailed description of roles and responsibilities of each team member.',
    'docs.documents.mentorHandbook.title': 'Mentor Handbook',
    'docs.documents.mentorHandbook.description': 'Detailed instructions for mentors: conducting meetings, developing development plans, evaluating stages and preparing for presentations.',
    'docs.documents.expertHandbook.title': 'Expert Handbook',
    'docs.documents.expertHandbook.description': 'Instructions for experts: evaluating applications, participating in checkpoints, supporting mentors and final project evaluation.',
    'docs.documents.projectTemplate.title': 'Project Description Template',
    'docs.documents.projectTemplate.description': 'Structured template for describing your project: from problem to business model and development plans.',

    // Application Elements
    'applicationElements.title': 'Application Elements',
    'applicationElements.subtitle': 'Detailed list of all elements that should be included in your application to participate in the StarTTeen program.',
    'applicationElements.personalInfo': 'Personal Information',
    'applicationElements.personalInfoDesc': 'Basic data about you for program registration',
    'applicationElements.fullName': 'Full Name',
    'applicationElements.fullNameDesc': 'Full name for official document processing',
    'applicationElements.age': 'Age',
    'applicationElements.ageDesc': 'Your current age at the time of application',
    'applicationElements.grade': 'Grade',
    'applicationElements.gradeDesc': 'School grade or university year',
    'applicationElements.city': 'City',
    'applicationElements.cityDesc': 'City of residence for meeting coordination',
    'applicationElements.school': 'School / Educational Institution',
    'applicationElements.schoolDesc': 'Name of your educational institution',
    'applicationElements.required': 'Required',
    'applicationElements.ideaTitle': 'Detailed Idea Description',
    'applicationElements.ideaDesc': 'Key questions that will help us understand your project',
    'applicationElements.problem': 'Problem you are solving',
    'applicationElements.problemDesc': 'Describe how you personally encountered this problem in life or who told you about it. Provide real examples.',
    'applicationElements.solution': 'Your solution to the problem',
    'applicationElements.solutionDesc': 'Describe in detail how your solution helps people and why you are confident it will be useful.',
    'applicationElements.howCameUp': 'How did you come up with the solution?',
    'applicationElements.howCameUpDesc': 'Story of idea origin, moment of insight, or thought process.',
    'applicationElements.uniqueness': 'What makes your idea unique',
    'applicationElements.uniquenessDesc': 'Focus on the uniqueness of your idea. How is it different from others? If you don\'t know — just write that.',
    'applicationElements.profitability': 'Why can your solution be profitable or useful?',
    'applicationElements.profitabilityDesc': 'Describe the benefits of the solution and its commercial potential.',
    'applicationElements.requirements': 'Requirements for us as a platform',
    'applicationElements.requirementsDesc': 'Write any wishes: how would it be easier and more convenient for you to work with us. What would you like to see, what features you have that we need to consider.',
    'applicationElements.optional': 'Not mandatory, but very valuable for us',
    'applicationElements.readyToApply': 'Ready to apply?',
    'applicationElements.readyToApplyDesc': 'Now that you know all the requirements, you can start filling out the application.',
    'applicationElements.readGuide': 'Read guide',
    'applicationElements.submitApplication': 'Submit application',

    // Apply page
    'apply.title': 'Apply',
    'apply.subtitle': 'Ready to turn your idea into a real project? Fill out the application and get support from experienced mentors and experts.',
    'apply.important': 'IMPORTANT!',
    'apply.readGuideFirst': 'Before filling out the form, be sure to read the "Participant Guide" document in the "Documents" section. This will help you better prepare your application and understand the participation process.',
    'apply.processTitle': 'Application Process',
    'apply.step1': 'Study the participant guide',
    'apply.step2': 'Fill out the detailed application form',
    'apply.step3': 'Wait for review (up to 5 business days)',
    'apply.step4': 'Get a response and start working with a mentor',
    'apply.requiredData': 'Required Data',
    'apply.readyToStart': 'Ready to start?',
    'apply.readyToStartDesc': 'Click the button below to open the application form. Take time for quality filling — this will increase your chances of participating in the program.',
    'apply.openForm': 'Open application form',
    'apply.readGuideFirst2': 'Read guide first',
    'apply.hasQuestions': 'Have questions?',

    // Mentors page
    'mentors.title': 'Our mentors',
    'mentors.subtitle': 'Experts and specialists with business experience who help participants turn ideas into real projects.',
    'mentors.searchPlaceholder': 'Search by name or expertise...',
    'mentors.comingSoon': 'Mentors coming soon',
    'mentors.comingSoonDesc': 'We are actively building a team of experts. Want to join our mentors?',
    'mentors.becomeMentor': 'Become a mentor',
    'mentors.becomeMentorTitle': 'Become a mentor',
    'mentors.becomeMentorDesc': 'Share your experience with young entrepreneurs and help them bring ideas to life. This is a great opportunity to give back to the community and find promising projects.',
    'mentors.fillApplication': 'Fill mentor application',

    // Success page
    'success.title': 'Success Stories',
    'success.subtitle': 'Real projects and achievements of StarTTeen participants. Get inspired and create your own success stories!',
    'success.comingSoon': 'Cases in preparation',
    'success.comingSoonDesc': 'Our participants are actively working on their projects. The first success stories will appear very soon! Stay tuned for updates and don\'t miss inspiring cases.',
    'success.stayUpdated': 'Stay updated',
    'success.emailPlaceholder': 'Your email',
    'success.subscribe': 'Subscribe',
    'success.subscribeDesc': 'Get notifications about new cases and participant achievements',
    'success.projectGrowth': 'Project Growth',
    'success.projectGrowthDesc': 'From idea to MVP in 3 months',
    'success.achievements': 'Achievements',
    'success.achievementsDesc': 'Victories in hackathons and competitions',
    'success.launches': 'Launches',
    'success.launchesDesc': 'Real products with users',
    'success.createSuccess': 'Create your success story',

    // Resources page
    'resources.title': 'Our resources',
    'resources.subtitle': 'Everything needed for successful launch and development of your project. From idea to finished product with our support.',
    'resources.whatWeProvide': 'What we provide',
    'resources.whatWeProvideDesc': 'Comprehensive support at all stages of your project development',
    'resources.workWith': 'Who we work with',
    'resources.workWithDesc': 'Partners and sponsors who support the development of young entrepreneurs',
    'resources.partnersSoon': 'The list of partners is constantly growing. We will update the section with new opportunities soon!',
    'resources.howCanHelp': 'How can we help?',
    'resources.howCanHelpDesc': 'Don\'t know where to start? Have an idea but need support? Submit an application and we will select the optimal set of resources for your project.',

    // Contact page
    'contact.title': 'Contact us',
    'contact.subtitle': 'Have questions about the project? Need help with the application? We are ready to answer and support you at any stage.',
    'contact.contactInfo': 'Contact Information',
    'contact.emailSupport': 'Email support',
    'contact.emailSupportDesc': 'Main communication channel',
    'contact.telegram': 'Telegram',
    'contact.telegramDesc': 'Quick responses and notifications',
    'contact.workingHours': 'Working hours',
    'contact.workingHoursValue': 'Mon-Fri: 9:00-18:00 MSK',
    'contact.responseTime': 'We respond within 6 hours',
    'contact.faqQuick': 'Frequently Asked Questions',
    'contact.howToApply': 'How to apply?',
    'contact.requirements': 'What are the participant requirements?',
    'contact.howToMentor': 'How to become a mentor?',
    'contact.whatSupport': 'What support do you provide?',
    'contact.writeUs': 'Write to us',
    'contact.messageSent': 'Message sent!',
    'contact.thankYou': 'Thank you for your message. We will respond within 6 hours.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.selectSubject': 'Select subject',
    'contact.subjectApplication': 'Application question',
    'contact.subjectMentoring': 'Mentoring',
    'contact.subjectPartnership': 'Partnership',
    'contact.subjectTechnical': 'Technical support',
    'contact.subjectOther': 'Other',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Describe your question in detail...',
    'contact.wantTelegram': 'I want to receive response via Telegram',
    'contact.telegramUsername': '@your_telegram',
    'contact.sendMessage': 'Send message',

    // Privacy & Terms
    'privacy.title': 'Privacy Policy',
    'terms.title': 'Terms of Use',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Загружаем сохранённый язык из localStorage или используем 'ru' по умолчанию
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('startteen-language');
    return (saved === 'en' || saved === 'ru') ? saved as Language : 'ru';
  });

  // Сохраняем изменения языка в localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('startteen-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}