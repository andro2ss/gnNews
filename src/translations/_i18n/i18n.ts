import i18next from "i18next";
import { i18nResources } from "./i18nResources";
import langHelper from "../../helpers/langHelper";

// eslint-disable-next-line jest/require-hook
i18next
  .init({
    interpolation: { escapeValue: false },
    lng: langHelper.currentLanguage(),
    resources: i18nResources,
    // eslint-disable-next-line no-console
  })
  .catch(console.error);

export default i18next;
