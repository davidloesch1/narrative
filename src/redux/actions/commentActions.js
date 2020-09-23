import * as actions from "./actionTypes";

export const newComment = (object) => ({
  type: actions.NEW_COMMENT,
  object,
});

export const addComment = (thisCommentId, childCommentId) => ({
  type: actions.ADD_COMMENT,
  thisCommentId,
  childCommentId,
});

export const deleteComment = (thisCommentId, childCommentId) => ({
  type: actions.DELETE_COMMENT,
  thisCommentId,
  childCommentId,
});

export const upVote = (commentId) => ({
  type: actions.UPVOTE,
  commentId,
});

export const downVote = (commentId) => ({
  type: actions.DOWNVOTE,
  commentId,
});
