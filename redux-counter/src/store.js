import { createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";

const store = createStore(counterReducer);
export default store;