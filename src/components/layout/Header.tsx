import React from "react";
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import theme from "../../styles/theme";
import Button from "../ui/Button";
import { useNotification } from "../../hooks/useNotification";
import { Notification } from "../../hooks/useNotification";

const Header: React.FC = () => {
  const location = useLocation();
  const { showNotification } = useNotification();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header css={headerStyles}>
      <div css={containerStyles}>
        <div css={logoStyles}>
          <Link to="/">Music Library</Link>
        </div>
        <nav css={navStyles}>
          <Link
            to="/"
            css={[navLinkStyles, isActive("/") && activeNavLinkStyles]}
          >
            Dashboard
          </Link>
          <Link
            to="/songs"
            css={[navLinkStyles, isActive("/songs") && activeNavLinkStyles]}
          >
            Songs
          </Link>
          <Link
            to="/stats"
            css={[navLinkStyles, isActive("/stats") && activeNavLinkStyles]}
          >
            Statistics
          </Link>
          <Button
            variant="info"
            size="sm"
            onClick={() =>
              showNotification("API Key functionality added!", "info")
            }
          >
            API Key
          </Button>
        </nav>
      </div>
      <Notification />
    </header>
  );
};

const headerStyles = css`
  background-color: white;
  box-shadow: ${theme.boxShadow.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const containerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
`;

const logoStyles = css`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: ${theme.colors.primary};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const navStyles = css`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
`;

const navLinkStyles = css`
  text-decoration: none;
  color: ${theme.colors.textLight};
  font-weight: 500;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.light};
  }
`;

const activeNavLinkStyles = css`
  color: ${theme.colors.primary};
  background-color: rgba(67, 97, 238, 0.1);
`;

export default Header;
