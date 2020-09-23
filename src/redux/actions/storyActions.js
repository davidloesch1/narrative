import { v4 as uuidv4 } from "uuid";
const NEW_STORY = "NEW_STORY"
const CHAPTER_SUBMISSION = "CHAPTER_SUBMISSION"
const SELECT_CHAPTER = "SELECT_CHAPTER"
const ADD_COMMENT = "ADD_COMMENT"
const UPVOTE = "UPVOTE"
const DOWNVOTE = "DOWNVOTE"
const FAVORITE = "FAVORITE"

export const newStory = object => ({
    type: NEW_STORY,
    id: uuidv4(),
    object
})

export const chapterSubmission = (storyId, chapId) => ({
    type: CHAPTER_SUBMISSION,
    storyId,
    chapId
})

export const selectChapter = (storyId, chapId) => ({
    type: SELECT_CHAPTER,
    storyId,
    chapId
})

export const addComment = (storyId, commentId) => ({
    type: ADD_COMMENT,
    storyId,
    commentId
})

export const upVote = storyId => ({
    type: UPVOTE,
    storyId
})

export const downVote = storyId => ({
    type: DOWNVOTE,
    storyId
})

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_UPVOTED: "SHOW_UPVOTED",
    SHOW_DOWNVOTED: "SHOW_DOWNVOTED"
}