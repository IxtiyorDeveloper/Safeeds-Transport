import {combineReducers} from "@reduxjs/toolkit"

/** reducers */
import articles from "./reducer/index"
import auth from "./reducer/auth"

/** Main reducer function */
export default combineReducers({articles,auth})

/** Export selectors and action functions */
export * from "./reducer/index"
export * from "./reducer/auth"
