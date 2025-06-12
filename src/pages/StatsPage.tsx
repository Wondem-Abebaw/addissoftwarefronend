import React from "react";
import { css } from "@emotion/react";
import { useAppSelector } from "../store/store";
import SummaryCards from "../components/stats/SummaryCards";
import GenreStats from "../components/stats/GenreStats";
import ArtistStats from "../components/stats/ArtistStats";
import AlbumStats from "../components/stats/AlbumStats";
import Loader from "../components/ui/Loader";
import theme from "../styles/theme";

const StatsPage: React.FC = () => {
  const { statistics, loading, error } = useAppSelector((state) => state.stats);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!statistics) return null;

  return (
    <div>
      <h1 className="page-title">Statistics</h1>

      <SummaryCards stats={statistics} />

      <div css={gridStyles}>
        <div css={columnStyles}>
          <GenreStats stats={statistics} />
          <AlbumStats stats={statistics} />
        </div>
        <div css={columnStyles}>
          <ArtistStats stats={statistics} />
        </div>
      </div>
    </div>
  );
};

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${theme.spacing.lg};
`;

const columnStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export default StatsPage;
