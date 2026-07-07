import { createContext, type ReactNode, useContext, useMemo, useState } from "react";
import { languageStorageKey, type Language, type TranslationKey, translations } from "./translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.localStorage.getItem(languageStorageKey) === "zh" ? "zh" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const value = useMemo<LanguageContextValue>(() => {
    function setLanguage(nextLanguage: Language) {
      setLanguageState(nextLanguage);
      window.localStorage.setItem(languageStorageKey, nextLanguage);
      document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    }

    return {
      language,
      setLanguage,
      t: (key) => translations[language][key]
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
