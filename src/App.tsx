import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout/MainLayout";
import { FirstPage } from "./pages/FirstPage";
import { Page404 } from "./pages/Page404";
import { HeaderContent } from "./pages/commonItems/HeaderContent/HeaderContent";
import { SidebarContent } from "./pages/commonItems/SidebarContent/SidebarContent";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <MainLayout
              headerContent={<HeaderContent />}
              sidebarContent={<SidebarContent />}
            />
          }
        >
          <Route path={"/"} element={<FirstPage />} />
        </Route>
        <Route path={"*"} element={<Page404 />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};
