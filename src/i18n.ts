import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      language: 'Choose your language',
      gender: 'Choose your gender',
      age: 'Choose your age',
      dislikes: 'What do you dislike most in books?',
      likes: 'What are your favorite themes?',
      email: 'Enter your email',
      thank: 'Thank you for completing the quiz!',
      download: 'Download my answers',
      retake: 'Retake the quiz',
      male: 'Male',
      female: 'Female',
      dontTell: 'Other',
      age18_29: '18-29 age',
      age30_39: '30-39 age',
      age40_49: '40-49 age',
      other: 'Other',
      lack_of_logic: 'Lack of logic',
      slow_speed: 'Slow speed',
      lack_of_humor: 'Lack of humor',
      generic_ending: 'Way too generic ending',
      next: 'Next',
      werewolf: 'Werewolf',
      action: 'Action',
      royal_obsession: 'Royal Obsession',
      romance: 'Romance',
      young_adult: 'Young Adult',
      bad_boy: 'Bad Boy',
      billionaire: 'Billionaire'
    }
  },
  fr: {
    translation: {
      language: 'Choisissez votre langue',
      gender: 'Choisissez votre genre',
      age: 'Choisissez votre âge',
      dislikes: 'Qu\'est-ce que vous n\'aimez pas le plus dans les livres ?',
      likes: 'Quels sont vos thèmes préférés ?',
      email: 'Entrez votre email',
      thank: 'Merci d\'avoir complété le quiz!',
      download: 'Téléchargez mes réponses',
      retake: 'Reprendre le quiz',
      male: 'Homme',
      female: 'Femme',
      dontTell: 'Autre',
      age18_29: '18-29 ans',
      age30_39: '30-39 ans',
      age40_49: '40-49 ans',
      other: 'Autre',
      lack_of_logic: 'Manque de logique',
      slow_speed: 'Lenteur',
      lack_of_humor: 'Manque d\'humour',
      generic_ending: 'Fin trop générique',
      next: 'Suivant',
      werewolf: 'Loup-garou',
      action: 'Action',
      royal_obsession: 'Obsession royale',
      romance: 'Romance',
      young_adult: 'Jeune adulte',
      bad_boy: 'Mauvais garçon',
      billionaire: 'Milliardaire'
    }
  },
  de: {
    translation: {
      language: 'Wählen Sie Ihre Sprache',
      gender: 'Wählen Sie Ihr Geschlecht',
      age: 'Wählen Sie Ihr Alter',
      dislikes: 'Was mögen Sie an Büchern am wenigsten?',
      likes: 'Was sind Ihre Lieblingsthemen?',
      email: 'Geben Sie Ihre E-Mail ein',
      thank: 'Vielen Dank für das Ausfüllen des Quiz!',
      download: 'Laden Sie meine Antworten herunter',
      retake: 'Quiz wiederholen',
      male: 'Männlich',
      female: 'Weiblich',
      dontTell: 'Andere',
      age18_29: '18-29 Jahre',
      age30_39: '30-39 Jahre',
      age40_49: '40-49 Jahre',
      other: 'Andere',
      lack_of_logic: 'Mangel an Logik',
      slow_speed: 'Langsamkeit',
      lack_of_humor: 'Mangel an Humor',
      generic_ending: 'Viel zu generisches Ende',
      next: 'Weiter',
      werewolf: 'Werwolf',
      action: 'Action',
      royal_obsession: 'Königliche Besessenheit',
      romance: 'Romanze',
      young_adult: 'Junge Erwachsene',
      bad_boy: 'Böser Junge',
      billionaire: 'Milliardär'
    }
  },
  es: {
    translation: {
      language: 'Elige tu idioma',
      gender: 'Elige tu género',
      age: 'Elige tu edad',
      dislikes: '¿Qué es lo que más te disgusta en los libros?',
      likes: '¿Cuáles son tus temas favoritos?',
      email: 'Ingrese su correo electrónico',
      thank: '¡Gracias por completar el cuestionario!',
      download: 'Descargar mis respuestas',
      retake: 'Rehacer el cuestionario',
      male: 'Hombre',
      female: 'Mujer',
      dontTell: 'Otro',
      age18_29: '18-29 años',
      age30_39: '30-39 años',
      age40_49: '40-49 años',
      other: 'Otro',
      lack_of_logic: 'Falta de lógica',
      slow_speed: 'Lentitud',
      lack_of_humor: 'Falta de humor',
      generic_ending: 'Final demasiado genérico',
      next: 'Siguiente',
      werewolf: 'Hombre lobo',
      action: 'Acción',
      royal_obsession: 'Obsesión real',
      romance: 'Romance',
      young_adult: 'Joven adulto',
      bad_boy: 'Chico malo',
      billionaire: 'Millonario'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: ['en', 'fr', 'de', 'es'],
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
