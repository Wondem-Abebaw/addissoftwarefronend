import { call, put, takeEvery } from "redux-saga/effects";
import { getStatistics } from "../../api/statsAPI";
import {
  fetchStatsStart,
  fetchStatsSuccess,
  fetchStatsFailure,
} from "./statsSlice";

function* handleFetchStatistics(): Generator<any, void, any> {
  try {
    yield put(fetchStatsStart());
    const stats = yield call(getStatistics);
    yield put(fetchStatsSuccess(stats));
  } catch (error) {
    yield put(fetchStatsFailure(error.message));
  }
}

export function* watchStatsSagas() {
  yield takeEvery("stats/fetchStatistics", handleFetchStatistics);
}
