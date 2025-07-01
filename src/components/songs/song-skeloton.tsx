import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

const SongItemSkeleton: React.FC = () => {
  return (
    <div css={skeletonItemStyles}>
      <div css={skeletonInfoStyles}>
        <div css={skeletonTitleStyles} />
        <div css={skeletonMetaStyles}>
          <span css={skeletonTextStyles} />
          <span css={skeletonDividerStyles} />
          <span css={skeletonTextStyles} />
        </div>
        <div css={skeletonGenreStyles} />
      </div>
      <div css={skeletonActionsStyles}>
        <div css={skeletonButtonStyles} />
        <div css={skeletonButtonStyles} />
      </div>
    </div>
  );
};

// Skeleton Styles
const skeletonBase = css`
  background: ${theme.colors.border};
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const skeletonItemStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const skeletonInfoStyles = css`
  flex: 1;
  width: 100%;
`;

const skeletonTitleStyles = css`
  ${skeletonBase};
  height: 24px;
  width: 60%;
  margin-bottom: ${theme.spacing.xs};
`;

const skeletonMetaStyles = css`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const skeletonTextStyles = css`
  ${skeletonBase};
  height: 16px;
  width: 80px;
`;

const skeletonDividerStyles = css`
  width: 5px;
`;

const skeletonGenreStyles = css`
  ${skeletonBase};
  height: 20px;
  width: 60px;
  border-radius: 12px;
`;

const skeletonActionsStyles = css`
  display: flex;
  gap: ${theme.spacing.sm};

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
    margin-top: ${theme.spacing.sm};
  }
`;

const skeletonButtonStyles = css`
  ${skeletonBase};
  height: 32px;
  width: 60px;
  border-radius: ${theme.borderRadius.sm};
`;

export default SongItemSkeleton;
