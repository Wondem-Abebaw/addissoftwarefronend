import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <aside css={[sidebarStyles, isOpen && sidebarOpenStyles]}>
      <div css={sidebarHeaderStyles}>
        <h3>Library</h3>
        <button css={closeButtonStyles} onClick={closeSidebar}>
          &times;
        </button>
      </div>
      <nav css={navStyles}>
        <NavLink
          to="/songs"
          css={navLinkStyles}
          activeClassName="active"
          onClick={closeSidebar}
        >
          All Songs
        </NavLink>
        <NavLink
          to="/songs?genre=Rock"
          css={navLinkStyles}
          activeClassName="active"
          onClick={closeSidebar}
        >
          Rock
        </NavLink>
        <NavLink
          to="/songs?genre=Pop"
          css={navLinkStyles}
          activeClassName="active"
          onClick={closeSidebar}
        >
          Pop
        </NavLink>
        <NavLink
          to="/songs?genre=Jazz"
          css={navLinkStyles}
          activeClassName="active"
          onClick={closeSidebar}
        >
          Jazz
        </NavLink>
        <NavLink
          to="/songs?genre=Classical"
          css={navLinkStyles}
          activeClassName="active"
          onClick={closeSidebar}
        >
          Classical
        </NavLink>
      </nav>
      <div css={sidebarFooterStyles}>
        <p>Total Songs: 128</p>
        <p>Artists: 42</p>
      </div>
    </aside>
  );
};

const sidebarStyles = css`
  width: 240px;
  background-color: white;
  border-right: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -240px;
  z-index: 100;
  transition: transform 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    position: relative;
    left: 0;
    box-shadow: none;
  }
`;

const sidebarOpenStyles = css`
  transform: translateX(240px);

  @media (min-width: 769px) {
    transform: none;
  }
`;

const sidebarHeaderStyles = css`
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const closeButtonStyles = css`
  background: none;
  border: none;
  font-size: ${theme.fontSizes.xl};
  cursor: pointer;
  color: ${theme.colors.textLight};

  @media (min-width: 769px) {
    display: none;
  }
`;

const navStyles = css`
  flex: 1;
  padding: ${theme.spacing.md} 0;
`;

const navLinkStyles = css`
  display: block;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  text-decoration: none;
  color: ${theme.colors.textLight};
  transition: all 0.2s;
  font-size: ${theme.fontSizes.md};

  &:hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.primary};
  }

  &.active {
    background-color: rgba(67, 97, 238, 0.1);
    color: ${theme.colors.primary};
    border-left: 3px solid ${theme.colors.primary};
  }
`;

const sidebarFooterStyles = css`
  padding: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textLight};
`;

export default Sidebar;
