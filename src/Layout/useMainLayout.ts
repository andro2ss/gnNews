import { useState } from "react";

export interface IMainLayout {
  window?: () => Window;
}

export const useMainLayout = (props: IMainLayout) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const navigationWidth = 240;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return { handleSidebarToggle, navigationWidth, container, mobileOpen };
};
