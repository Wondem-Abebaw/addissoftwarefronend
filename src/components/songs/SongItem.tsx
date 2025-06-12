import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import Button from "../ui/Button";
import type { Song } from "../../types/songTypes";

interface SongItemProps {
  song: Song;
  onEdit: (song: Song) => void;
  onDelete: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ song, onEdit, onDelete }) => {
  return (
    <div css={songItemStyles}>
      <div css={songInfoStyles}>
        <h3 css={songTitleStyles}>{song.title}</h3>
        <div css={songMetaStyles}>
          <span>{song.artist}</span> • <span>{song.album}</span>
        </div>
        <div css={songGenreStyles}>
          <span>{song.genre}</span>
        </div>
      </div>
      <div css={songActionsStyles}>
        <Button variant="info" size="sm" onClick={() => onEdit(song)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(song._id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

const songItemStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};
  transition: background-color 0.2s;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &:hover {
    background-color: ${theme.colors.light};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const songInfoStyles = css`
  flex: 1;
`;

const songTitleStyles = css`
  font-size: ${theme.fontSizes.lg};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.dark};
`;

const songMetaStyles = css`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.xs};
`;

const songGenreStyles = css`
  display: inline-block;
  background-color: rgba(67, 97, 238, 0.1);
  color: ${theme.colors.primary};
  padding: 2px 8px;
  border-radius: 12px;
  font-size: ${theme.fontSizes.sm};
`;

const songActionsStyles = css`
  display: flex;
  gap: ${theme.spacing.sm};
  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
    margin-top: ${theme.spacing.sm};
  }
`;

export default SongItem;
