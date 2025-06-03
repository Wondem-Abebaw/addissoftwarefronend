import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import Card from "../ui/Card";
import { Statistics } from "../../types/statsTypes";

interface GenreStatsProps {
  stats: Statistics;
}

const GenreStats: React.FC<GenreStatsProps> = ({ stats }) => {
  return (
    <Card title="Songs by Genre">
      <div css={tableStyles}>
        <div css={tableHeaderStyles}>
          <div css={tableCellStyles}>Genre</div>
          <div css={[tableCellStyles, { textAlign: "right" }]}>Songs</div>
        </div>

        {stats.songsPerGenre.map((genre) => (
          <div key={genre._id} css={tableRowStyles}>
            <div css={tableCellStyles}>{genre._id}</div>
            <div css={[tableCellStyles, { textAlign: "right" }]}>
              {genre.count}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const tableStyles = css`
  width: 100%;
`;

const tableHeaderStyles = css`
  display: flex;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.light};
  font-weight: 600;
  border-bottom: 1px solid ${theme.colors.border};
`;

const tableRowStyles = css`
  display: flex;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:nth-of-type(even) {
    background-color: ${theme.colors.light};
  }
`;

const tableCellStyles = css`
  flex: 1;
  padding: ${theme.spacing.xs} 0;
`;

export default GenreStats;
