import i18next from "i18next";
import { i18nResources } from "./i18nResources";
import langHelper from "../../helpers/langHelper";

i18next
  .init({
    interpolation: { escapeValue: false },
    lng: langHelper.currentLanguage(),
    resources: i18nResources,
  })
  .catch(console.error);

export default i18next;
