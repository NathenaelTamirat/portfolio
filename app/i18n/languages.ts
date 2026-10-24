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
  label: string; // Written strictly in its own native language
};

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "hi", label: "हिन्दी" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "ja", label: "日本語" },
  { code: "ru", label: "Русский" },
  { code: "pt", label: "Português" },
  { code: "ko", label: "한국어" },
  { code: "am", label: "አማርኛ" },
];
