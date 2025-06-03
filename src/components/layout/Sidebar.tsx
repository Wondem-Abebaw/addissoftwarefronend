import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

const Sidebar: React.FC = () => {
  return (
    <aside css={sidebarStyles}>
      <div css={sidebarHeaderStyles}>
        <h3>Library</h3>
      </div>
      <nav css={navStyles}>
        <NavLink to="/songs" css={navLinkStyles} activeClassName="active">
          All Songs
        </NavLink>
        <NavLink
          to="/songs?genre=Rock"
          css={navLinkStyles}
          activeClassName="active"
        >
          Rock
        </NavLink>
        <NavLink
          to="/songs?genre=Pop"
          css={navLinkStyles}
          activeClassName="active"
        >
          Pop
        </NavLink>
        <NavLink
          to="/songs?genre=Jazz"
          css={navLinkStyles}
          activeClassName="active"
        >
          Jazz
        </NavLink>
        <NavLink
          to="/songs?genre=Classical"
          css={navLinkStyles}
          activeClassName="active"
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
`;

const sidebarHeaderStyles = css`
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};
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
