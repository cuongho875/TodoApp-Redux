import userSlice from "./auth/slice";
import filtersSlice from "./filters/slice";
import HistorySlice from "./tasks/slice";
const rootReducers={
    filters:filtersSlice.reducer,
    user:userSlice.reducer,
    history:HistorySlice.reducer
}
export default rootReducers;