import { v4 as uuidv4 } from "uuid";

const comments = (state = [], action) => {
  switch (action.type) {
    case "NEW_COMMENT":
      return [
        ...state,
        {
          id: uuidv4(),
          parentId: action.object.parentId,
          commenter: action.object.commenter,
          comment: action.object.comment,
          childComments: [],
          upvotes: 0,
          downvotes: 0,
        },
      ];
    case "ADD_COMMENT":
      return state.map((comment) => {
        if (comment.id === action.thisCommentId) {
          let array = comment.childComments;
          array.push(action.childCommentId);
          return { ...comment, childComments: array };
        } else {
          return comment;
        }
      });
    case "DELETE_COMMENT":
      return state.map((comment) => {
        if (comment.id === action.thisCommentId) {
          let array = comment.childComments.filter(
            (comment) => comment.id !== action.childCommentId
          );
          return { ...comment, childComments: array };
        } else {
          return comment;
        }
      });
    case "UPVOTE":
      return state.map((comment) =>
        comment.id === action.commentId
          ? { ...comment, upvotes: comment.upvotes++ }
          : comment
      );
    case "DOWNVOTE":
      return state.map((comment) =>
        comment.id === action.commentId
          ? { ...comment, downvotes: comment.downvotes++ }
          : comment
      );
    default:
        return state
  }
};

export default comments