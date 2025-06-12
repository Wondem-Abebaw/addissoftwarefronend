import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { fetchSongs } from "./features/songs/songSlice";
import { fetchStatistics } from "./features/stats/statsSlice";
import { useAppDispatch } from "./store/store";
import { useNotification } from "./hooks/useNotification";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import SongsPage from "./pages/SongsPage";
import StatsPage from "./pages/StatsPage";

function App() {
  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();

  useEffect(() => {
    // Initialize data
    dispatch(fetchSongs());
    dispatch(fetchStatistics());

    // Show welcome notification
    showNotification("Welcome to Music Library!", "info");
  }, [dispatch, showNotification]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="songs" element={<SongsPage />} />
        <Route path="stats" element={<StatsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
