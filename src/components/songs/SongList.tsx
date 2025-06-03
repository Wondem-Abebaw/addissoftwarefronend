import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import { useAppDispatch, useAppSelector } from "../../store/store";
import SongItem from "./SongItem";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SongForm from "./SongForm";
import Loader from "../ui/Loader";
import SongFilter from "./SongFilter";
import {
  addSong,
  updateSong,
  deleteSong,
} from "../../features/songs/songSlice";

const SongList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { songs, loading, error } = useAppSelector((state) => state.songs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const handleAddSong = () => {
    setCurrentSong(null);
    setIsModalOpen(true);
  };

  const handleEditSong = (song: Song) => {
    setCurrentSong(song);
    setIsModalOpen(true);
  };

  const handleDeleteSong = (id: string) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSong(id));
    }
  };

  const handleSubmit = (songData: any) => {
    if (currentSong) {
      dispatch(updateSong(currentSong._id, songData));
    } else {
      dispatch(addSong(songData));
    }
    setIsModalOpen(false);
  };

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div css={headerStyles}>
        <h2>Song Library</h2>
        <div css={buttonGroupStyles}>
          <Button
            variant={showFilters ? "secondary" : "primary"}
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <Button variant="success" onClick={handleAddSong}>
            Add New Song
          </Button>
        </div>
      </div>

      {showFilters && <SongFilter />}

      {songs.length === 0 ? (
        <div css={emptyStateStyles}>
          <p>No songs found. Add your first song!</p>
          <Button variant="success" onClick={handleAddSong}>
            Add Song
          </Button>
        </div>
      ) : (
        <div css={listStyles}>
          {songs.map((song) => (
            <SongItem
              key={song._id}
              song={song}
              onEdit={handleEditSong}
              onDelete={handleDeleteSong}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentSong ? "Edit Song" : "Add New Song"}
      >
        <SongForm
          onSubmit={handleSubmit}
          initialData={currentSong}
          isSubmitting={loading}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

const buttonGroupStyles = css`
  display: flex;
  gap: ${theme.spacing.md};
`;

const listStyles = css`
  background: white;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.boxShadow.sm};
  overflow: hidden;
`;

const emptyStateStyles = css`
  text-align: center;
  padding: ${theme.spacing.xxl} 0;
  background: white;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.boxShadow.sm};

  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.textLight};
  }
`;

export default SongList;
