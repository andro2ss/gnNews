import { ReactNode, useState } from "react";

export interface IMainLayout {
  window?: () => Window;
  headerContent?: ReactNode;
  sidebarContent?: ReactNode;
  footerContent?: ReactNode;
}

export const useMainLayout = (props: IMainLayout) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const navigationWidth = 240;
  const headerHeight =
    document?.getElementById("mainLayout-header")?.offsetHeight;
  const footerHeight =
    document?.getElementById("mainLayout-footer")?.offsetHeight;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return {
    handleSidebarToggle,
    navigationWidth,
    container,
    mobileOpen,
    headerHeight,
    footerHeight,
  };
};
