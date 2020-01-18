// import { put } from "redux-saga/effects";

// import axios from "../../axios-orders";
// import * as actions from "../actions";

// export function* initIngredientsSaga(action) {
//   try {
//     const response = yield axios.get(
//       "https://anapioficeandfire.com/api/characters/"
//     );
// 	const data = response.json();
//     yield put(actions.setIngredients(data));
//   } catch (error) {
//     yield put(actions.fetchIngredientsFailed());
//   }
// }