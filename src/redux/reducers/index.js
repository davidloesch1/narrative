import { combineReducers } from 'redux'
import stories from './storyReducer'
import chapters from './chapterReducer'
import comments from './commentReducer'

export default combineReducers({
    stories,
    chapters,
    comments
})