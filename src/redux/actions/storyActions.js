import * as actions from "./actionTypes";

export const newStory = (object) => ({
  type: actions.NEW_STORY,
  object,
});

export const chapterSubmission = (storyId, chapId) => ({
  type: actions.CHAPTER_SUBMISSION,
  storyId,
  chapId,
});

export const selectChapter = (storyId, chapId) => ({
  type: actions.SELECT_CHAPTER,
  storyId,
  chapId,
});

export const addComment = (storyId, commentId) => ({
  type: actions.ADD_COMMENT,
  storyId,
  commentId,
});

export const deleteComment = (storyId, commentId) => ({
  type: actions.DELETE_COMMENT,
  storyId,
  commentId,
});

export const upvote = (storyId, userId) => ({
  type: actions.UPVOTE,
  storyId,
  userId
});

export const downvote = (storyId, userId) => ({
  type: actions.DOWNVOTE,
  storyId,
  userId
});
