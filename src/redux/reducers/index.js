import { combineReducers } from 'redux'
import stories from './storyReducer'
import chapters from './chapterReducer'
import comments from './commentReducer'
import user from "./userReducer"
import loggedIn from "./loggedInReducer"

export default combineReducers({
    stories: stories,
    chapters: chapters,
    comments: comments,
    user: user,
    loggedIn: loggedIn
})