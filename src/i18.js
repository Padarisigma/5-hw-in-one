
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // автоматически определяет язык браузера
  .use(initReactI18next) // инициализирует i18next для React
  .init({
    fallbackLng: 'en', // язык по умолчанию
    debug: process.env.NODE_ENV === 'development', // логи в dev-режиме
    interpolation: {
      escapeValue: false, // не экранировать HTML (если нужны теги в переводах)
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome!",
          about: "About Us",
			 text1: 'Construction',
			 text2:'Construction refers to a structure, system, or arrangement in engineering, architecture, linguistics, etc. Examples: "steel bridge construction" or "grammatical sentence construction." ',
			  text3: 'Call us',
		  text4: 'Talk to us',
		  text5: 'Project Development',
		  text6: '"Inspiration lies in details. Every interior element creates spatial harmony. We use natural materials, highlighting their texture and sustainability. Professional approach ensures flawless results where aesthetics meet functionality."',
		  text7: 'Interior Design',
		  text8: '"Modern technologies unlock new horizons. Innovative solutions enable maximum efficiency with minimal costs. Every production stage is meticulously controlled, ensuring top-tier product quality. Our clients value the reliability and thoughtfulness of every component."',
		  text9: 'Repairs',
		  text10:'"Modern technologies are radically transforming our lives. Automation, artificial intelligence and robotics create new opportunities for business and daily routines. Yet maintaining balance between innovation and human values is crucial. Only thoughtful technology use can build a sustainable future for coming generations."'
        }, 
		  
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать!",
          about: "О нас",
			 text1: 'Конструкция',
			 text2: 'Конструкция – это построение, устройство или система в строительстве, технике, лингвистике и других областях. Например: "Металлическая конструкция моста" или "грамматическая конструкция предложения".',
			 text3: 'Позвонить нам',
		  text4: 'Поговорить с нами',
		  text5:'Разработка проекта',
		  text6: '"Вдохновение рождается в деталях. Каждый элемент интерьера создаёт гармонию пространства. Мы используем натуральные материалы, подчёркивая их фактуру и экологичность. Профессиональный подход гарантирует безупречный результат, где эстетика сочетается с функциональностью."',
		  text7: 'Интерьерный дизайнер',
		  text8: '"Современные технологии открывают новые горизонты. Инновационные решения позволяют достичь максимальной эффективности при минимальных затратах. Каждый этап производства тщательно контролируется, обеспечивая высочайшее качество продукции. Наши клиенты ценят надежность и продуманность каждого элемента."',
		  text9:'Техническое обслуживание',
		  text10:'"Современные технологии кардинально меняют нашу жизнь. Автоматизация, искусственный интеллект и роботизация открывают новые возможности для бизнеса и повседневности. Однако важно сохранять баланс между инновациями и человеческими ценностями. Только разумное использование технологий создаст устойчивое будущее для следующих поколений."'
        },
		  
      },
    },
  });

export default i18n;