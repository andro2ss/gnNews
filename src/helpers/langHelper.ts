import localStorageHelper from "./localStorageHelper";

export default {
  currentLanguage: (): string => {
    const language = localStorageHelper.get("lang");
    return language ? language : "pl-PL";
  },
  saveCurrentLanguage: (languageCode: string) => {
    localStorageHelper.set("lang", languageCode);
    window.location.reload();
  },
};
