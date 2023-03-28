import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { FirstPage } from "./pages/FirstPage";
import { Page404 } from "./pages/Page404";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route path={"/"} element={<FirstPage />} />
        </Route>
        <Route path={"/"} element={<MainLayout />}>
          <Route path={"*"} element={<Page404 />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
