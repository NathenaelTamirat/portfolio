export type LanguageCode = 
  | "en"
  | "zh"
  | "hi"
  | "es"
  | "de"
  | "fr"
  | "ja"
  | "ru"
  | "pt"
  | "ko"
  | "am";

export type LanguageOption = {
  code: LanguageCode;
  label: string;
  nativeName: string;
};

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "zh", label: "Mandarin Chinese", nativeName: "中文" },
  { code: "hi", label: "Hindi", nativeName: "हिन्दी" },
  { code: "es", label: "Spanish", nativeName: "Español" },
  { code: "de", label: "German", nativeName: "Deutsch" },
  { code: "fr", label: "French", nativeName: "Français" },
  { code: "ja", label: "Japanese", nativeName: "日本語" },
  { code: "ru", label: "Russian", nativeName: "Русский" },
  { code: "pt", label: "Portuguese", nativeName: "Português" },
  { code: "ko", label: "Korean", nativeName: "한국어" },
  { code: "am", label: "Amharic", nativeName: "አማርኛ" },
];
