import { createStore } from "redux";
import addPostReducer from '../Reducers/AddPostReducer';

const store = createStore(addPostReducer);

export default store;
