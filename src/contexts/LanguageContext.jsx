"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    quiz: "Quiz",
    settings: "Settings",
    support: "Support",
    
    // Header
    selectLanguage: "Select language",
    myAccount: "My Account",
    profile: "Profile",
    logout: "Log out",
    
    // Home page
    welcomeTitle: "Welcome to SignSpeak Tutor",
    welcomeSubtitle: "AI-powered, gamified learning portal for Indian Sign Language",
    translateText: "Translate Text",
    translateVoice: "Translate Voice",
    startLearning: "Start Learning",
    
    // Text to Sign
    textToSignTranslation: "Text to Sign Translation",
    typeWordOrSentence: "Type a word or sentence...",
    translating: "Translating...",
    translate: "Translate",
    
    // Learning Modules
    learningModules: "Learning Modules",
    greetings: "Greetings",
    greetingsDesc: "Learn how to say hello, goodbye, and more.",
    dailyEssentials: "Daily Essentials",
    dailyEssentialsDesc: "Signs for everyday items and activities.",
    familyAndPeople: "Family & People",
    familyAndPeopleDesc: "Communicate about the people in your life.",
    alphabets: "Alphabets (A-Z)",
    alphabetsDesc: "Master the foundational building blocks.",
    actionWords: "Action Words",
    actionWordsDesc: "Express actions like run, eat, and sleep.",
    places: "Places",
    placesDesc: "Signs for common locations.",
    exploreAllModules: "Explore All Modules",
    
    // Dashboard
    progressOverview: "Progress Overview",
    totalLessons: "Total Lessons",
    completedLessons: "Completed Lessons",
    currentStreak: "Current Streak",
    totalPoints: "Total Points",
    keepTrackJourney: "Keep track of your learning journey and stay motivated!",
    signsLearned: "Signs Learned",
    quizAccuracy: "Quiz Accuracy",
    yourFavoriteSigns: "Your Favorite Signs",
    signsToPractice: "Signs to Practice",
    
    // Quiz
    quizTitle: "Test Your Knowledge",
    quizSubtitle: "Practice what you've learned",
    startQuiz: "Start Quiz",
    question: "Question",
    correct: "Correct!",
    incorrect: "Incorrect!",
    nextQuestion: "Next Question",
    finishQuiz: "Finish Quiz",
    generateNewQuiz: "Generate New Quiz",
    quizTime: "Quiz Time!",
    generatingQuiz: "Generating your quiz...",
    failedToGenerate: "Failed to generate new quiz. Please try again.",
    quizComplete: "Quiz Complete!",
    youScored: "You scored",
    outOf: "out of",
    playAgain: "Play Again",
    checkAnswer: "Check Answer",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
  },
  hi: {
    // Navigation
    home: "होम",
    dashboard: "डैशबोर्ड",
    quiz: "क्विज",
    settings: "सेटिंग्स",
    support: "सहायता",
    
    // Header
    selectLanguage: "भाषा चुनें",
    myAccount: "मेरा खाता",
    profile: "प्रोफ़ाइल",
    logout: "लॉग आउट",
    
    // Home page
    welcomeTitle: "साइनस्पीक ट्यूटर में आपका स्वागत है",
    welcomeSubtitle: "भारतीय सांकेतिक भाषा के लिए AI-संचालित, गेमिफाइड लर्निंग पोर्टल",
    translateText: "टेक्स्ट अनुवाद करें",
    translateVoice: "आवाज अनुवाद करें",
    startLearning: "सीखना शुरू करें",
    
    // Text to Sign
    textToSignTranslation: "टेक्स्ट से साइन अनुवाद",
    typeWordOrSentence: "एक शब्द या वाक्य टाइप करें...",
    translating: "अनुवाद हो रहा है...",
    translate: "अनुवाद करें",
    
    // Learning Modules
    learningModules: "सीखने के मॉड्यूल",
    greetings: "अभिवादन",
    greetingsDesc: "हैलो, गुडबाय और अधिक कहना सीखें।",
    dailyEssentials: "दैनिक आवश्यकताएं",
    dailyEssentialsDesc: "रोजमर्रा की वस्तुओं और गतिविधियों के लिए संकेत।",
    familyAndPeople: "परिवार और लोग",
    familyAndPeopleDesc: "अपने जीवन के लोगों के बारे में संवाद करें।",
    alphabets: "वर्णमाला (ए-ज़ेड)",
    alphabetsDesc: "मूलभूत निर्माण ब्लॉक्स में महारत हासिल करें।",
    actionWords: "कार्य शब्द",
    actionWordsDesc: "दौड़ना, खाना और सोना जैसे कार्यों को व्यक्त करें।",
    places: "स्थान",
    placesDesc: "सामान्य स्थानों के लिए संकेत।",
    exploreAllModules: "सभी मॉड्यूल देखें",
    
    // Dashboard
    progressOverview: "प्रगति अवलोकन",
    totalLessons: "कुल पाठ",
    completedLessons: "पूर्ण पाठ",
    currentStreak: "वर्तमान स्ट्रीक",
    totalPoints: "कुल अंक",
    keepTrackJourney: "अपनी सीखने की यात्रा को ट्रैक करें और प्रेरित रहें!",
    signsLearned: "सीखे गए संकेत",
    quizAccuracy: "क्विज सटीकता",
    yourFavoriteSigns: "आपके पसंदीदा संकेत",
    signsToPractice: "अभ्यास के लिए संकेत",
    
    // Quiz
    quizTitle: "अपना ज्ञान जांचें",
    quizSubtitle: "जो आपने सीखा है उसका अभ्यास करें",
    startQuiz: "क्विज शुरू करें",
    question: "प्रश्न",
    correct: "सही!",
    incorrect: "गलत!",
    nextQuestion: "अगला प्रश्न",
    finishQuiz: "क्विज समाप्त करें",
    generateNewQuiz: "नई क्विज बनाएं",
    quizTime: "क्विज का समय!",
    generatingQuiz: "आपकी क्विज बनाई जा रही है...",
    failedToGenerate: "नई क्विज बनाने में विफल। कृपया पुनः प्रयास करें।",
    quizComplete: "क्विज पूर्ण!",
    youScored: "आपने स्कोर किया",
    outOf: "में से",
    playAgain: "फिर से खेलें",
    checkAnswer: "उत्तर जांचें",
    
    // Common
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    success: "सफलता",
    cancel: "रद्द करें",
    save: "सहेजें",
    edit: "संपादित करें",
    delete: "हटाएं",
  },
  gu: {
    // Navigation
    home: "હોમ",
    dashboard: "ડેશબોર્ડ",
    quiz: "ક્વિઝ",
    settings: "સેટિંગ્સ",
    support: "સહાય",
    
    // Header
    selectLanguage: "ભાષા પસંદ કરો",
    myAccount: "મારું એકાઉન્ટ",
    profile: "પ્રોફાઇલ",
    logout: "લૉગઆઉટ",
    
    // Home page
    welcomeTitle: "સાઇનસ્પીક ટ્યૂટરમાં આપનું સ્વાગત છે",
    welcomeSubtitle: "ભારતીય સાઇન લેંગ્વેજ માટે AI-સંચાલિત, ગેમિફાઇડ લર્નિંગ પોર્ટલ",
    translateText: "ટેક્સ્ટ અનુવાદ કરો",
    translateVoice: "અવાજ અનુવાદ કરો",
    startLearning: "સીખવાનું શરૂ કરો",
    
    // Text to Sign
    textToSignTranslation: "ટેક્સ્ટથી સાઇન અનુવાદ",
    typeWordOrSentence: "એક શબ્દ અથવા વાક્ય ટાઇપ કરો...",
    translating: "અનુવાદ થઈ રહ્યો છે...",
    translate: "અનુવાદ કરો",
    
    // Learning Modules
    learningModules: "શીખવાના મોડ્યુલ્સ",
    greetings: "અભિવાદન",
    greetingsDesc: "હેલો, ગુડબાય અને વધુ કહેવાનું શીખો।",
    dailyEssentials: "દૈનિક આવશ્યકતાઓ",
    dailyEssentialsDesc: "રોજિંદા વસ્તુઓ અને પ્રવૃત્તિઓ માટે સંકેતો।",
    familyAndPeople: "પરિવાર અને લોકો",
    familyAndPeopleDesc: "તમારા જીવનના લોકો વિશે વાતચીત કરો।",
    alphabets: "વર્ણમાળા (એ-ઝેડ)",
    alphabetsDesc: "મૂળભૂત બિલ્ડિંગ બ્લોક્સમાં નિપુણતા મેળવો।",
    actionWords: "ક્રિયા શબ્દો",
    actionWordsDesc: "દોડવું, ખાવું અને સૂવું જેવી ક્રિયાઓ વ્યક્ત કરો।",
    places: "સ્થાનો",
    placesDesc: "સામાન્ય સ્થાનો માટે સંકેતો।",
    exploreAllModules: "બધા મોડ્યુલ્સ જુઓ",
    
    // Dashboard
    progressOverview: "પ્રગતિ અવલોકન",
    totalLessons: "કુલ પાઠ",
    completedLessons: "પૂર્ણ પાઠ",
    currentStreak: "વર્તમાન સ્ટ્રીક",
    totalPoints: "કુલ પોઇન્ટ્સ",
    keepTrackJourney: "તમારી શીખવાની યાત્રાને ટ્રૅક કરો અને પ્રેરિત રહો!",
    signsLearned: "શીખેલા સંકેતો",
    quizAccuracy: "ક્વિઝ ચોકસાઈ",
    yourFavoriteSigns: "તમારા પ્રિય સંકેતો",
    signsToPractice: "અભ્યાસ માટે સંકેતો",
    
    // Quiz
    quizTitle: "તમારું જ્ઞાન ચકાસો",
    quizSubtitle: "તમે જે શીખ્યા છો તેનો અભ્યાસ કરો",
    startQuiz: "ક્વિઝ શરૂ કરો",
    question: "પ્રશ્ન",
    correct: "સાચું!",
    incorrect: "ખોટું!",
    nextQuestion: "આગળનો પ્રશ્ન",
    finishQuiz: "ક્વિઝ પૂર્ણ કરો",
    generateNewQuiz: "નવી ક્વિઝ બનાવો",
    quizTime: "ક્વિઝનો સમય!",
    generatingQuiz: "તમારી ક્વિઝ બનાવી રહ્યા છીએ...",
    failedToGenerate: "નવી ક્વિઝ બનાવવામાં નિષ્ફળ. કૃપા કરી ફરીથી પ્રયાસ કરો.",
    quizComplete: "ક્વિઝ પૂર્ણ!",
    youScored: "તમે સ્કોર કર્યું",
    outOf: "માંથી",
    playAgain: "ફરીથી રમો",
    checkAnswer: "જવાબ તપાસો",
    
    // Common
    loading: "લોડ થઈ રહ્યું છે...",
    error: "ભૂલ",
    success: "સફળતા",
    cancel: "રદ કરો",
    save: "સાચવો",
    edit: "સંપાદિત કરો",
    delete: "કાઢી નાખો",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  const value = {
    language,
    changeLanguage,
    t,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
