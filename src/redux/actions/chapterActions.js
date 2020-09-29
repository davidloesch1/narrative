import * as actions from "./actionTypes";

export const newChapter = (object) => ({
  type: actions.NEW_CHAPTER,
  object,
});

export const altNextChapter = (chapId, altChapId) => ({
  type: actions.ALT_NEXT_CHAPTER,
  chapId,
  altChapId,
});

export const nextChapter = (chapId, nextChapterId) => ({
  type: actions.NEXT_CHAPTER,
  chapId,
  nextChapterId,
});

export const accepted = (chapId) => ({
  type: actions.ACCEPTED,
  chapId,
});

export const addComment = (chapId, commentId) => ({
  type: actions.ADD_COMMENT,
  chapId,
  commentId,
});

export const deleteComment = (chapId, commentId) => ({
  type: action.DELETE_COMMENT,
  chapId,
  commentId,
});

export const upvote = (chapId, userId) => ({
  type: action.UPVOTE,
  chapId,
  userId
});

export const downvote = (chapId, userId) => ({
  type: action.DOWNVOTE,
  chapId,
  userId
});
