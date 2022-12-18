import { combineReducers } from "redux";
import { appSlice } from "../../components/app/appSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
