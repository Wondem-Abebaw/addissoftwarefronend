import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { useAppDispatch } from "../store/store";
import SongList from "../components/songs/SongList";
import { fetchSongs } from "../features/songs/songSlice";
import theme from "../styles/theme";

const SongsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <div>
      <h1 className="page-title">Song Library</h1>
      <SongList />
    </div>
  );
};

export default SongsPage;
