import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
  filterSongs,
} from "../../api/songAPI";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  updateSongSuccess,
  deleteSongSuccess,
} from "./songSlice";
// import { Song } from "../../types/songTypes";
import { useNotification } from "../../hooks/useNotification";
// import { RootState } from "../../store/store";

function* handleFetchSongs(): Generator<any, void, any> {
  try {
    yield put(fetchSongsStart());
    const songs = yield call(getSongs);
    console.log("songsinitial", songs);
    yield put(fetchSongsSuccess(songs.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* handleAddSong(action: any): Generator<any, void, any> {
  try {
    // const { showNotification } = useNotification();
    const newSong = yield call(createSong, action.payload);
    // console.log("newSong", newSong);
    yield put(addSongSuccess(newSong.data));
    // showNotification("Song added successfully!", "success");
  } catch (error) {
    // const { showNotification } = useNotification();
    // showNotification(`Error adding song: ${error.message}`, "error");
  }
}

function* handleUpdateSong(action: any): Generator<any, void, any> {
  // console.log("Updating song with action:", action.payload);
  try {
    // const { showNotification } = useNotification();
    const updatedSong = yield call(
      updateSong,
      action.payload.id,
      action.payload.songData
    );
    // const normalizedData = updatedSong.data; // response.data.data in your case
    console.log("updatedSong", updatedSong);
    // console.log("normalizedSong", normalizedData);
    yield put(updateSongSuccess(updatedSong));
    // yield put(updateSongSuccess(updatedSong));
    // showNotification("Song updated successfully!", "success");
  } catch (error) {
    // const { showNotification } = useNotification();
    // showNotification(`Error updating song: ${error.message}`, "error");
  }
}

function* handleDeleteSong(action: any): Generator<any, void, any> {
  try {
    // const { showNotification } = useNotification();
    yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
    // showNotification("Song deleted successfully!", "success");
  } catch (error) {
    // const { showNotification } = useNotification();
    // showNotification(`Error deleting song: ${error.message}`, "error");
  }
}

function* handleApplyFilter(action: any): Generator<any, void, any> {
  console.log("Applying filter with action:", action.payload);
  try {
    yield put(fetchSongsStart());
    const filters = action.payload;
    const filteredSongs = yield call(filterSongs, filters);
    yield put(fetchSongsSuccess(filteredSongs.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export function* watchSongSagas() {
  yield takeEvery("songs/fetchSongs", handleFetchSongs);
  yield takeEvery("songs/addSong", handleAddSong);
  yield takeEvery("songs/updateSong", handleUpdateSong);
  yield takeEvery("songs/deleteSong", handleDeleteSong);
  yield takeEvery("songs/applyFilter", handleApplyFilter);
}
