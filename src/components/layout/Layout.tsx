import React from "react";
import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import theme from "../../styles/theme";

const Layout: React.FC = () => {
  return (
    <div css={layoutStyles}>
      <Header />
      <div css={contentStyles}>
        <Sidebar />
        <main css={mainStyles}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const contentStyles = css`
  display: flex;
  flex: 1;
`;

const mainStyles = css`
  flex: 1;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.background};
`;

export default Layout;
