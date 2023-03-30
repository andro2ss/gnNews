import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout/MainLayout";
import { Page404 } from "./pages/Page404";
import { HeaderContent } from "./pages/commonItems/HeaderContent/HeaderContent";
import { SidebarContent } from "./pages/commonItems/SidebarContent/SidebarContent";
import { CountryNewsPage } from "./pages/CountryNewsPage/CountryNewsPage";
import { FooterContent } from "./pages/CountryNewsPage/items/FooterContent";
import { I18nextProvider } from "react-i18next";
import i18next from "./translations/_i18n/i18n";

export const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <MainLayout
                headerContent={<HeaderContent />}
                sidebarContent={<SidebarContent />}
                footerContent={<FooterContent />}
              />
            }
          >
            <Route path={"/"} element={<CountryNewsPage />} />
            <Route path={"/country/:kraj"} element={<CountryNewsPage />} />
          </Route>
          <Route path={"*"} element={<Page404 />} />{" "}
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
};
