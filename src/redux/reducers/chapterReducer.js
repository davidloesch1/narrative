import { v4 as uuidv4 } from "uuid";

const chapters = (state = [], action) => {
  switch (action.type) {
    case "NEW_CHAPTER":
      return [
        ...state,
        {
          id:  uuidv4(),
          author: action.object.author,
          content: action.object.content,
          comments: [],
          story: action.object.story,
          accepted: false,
          altNextChapters: [],
          prevChapter: action.object.prevChapter,
          nextChapter: null,
          upvotes: 0,
          downvotes: 0,
        },
      ];
    case "ALT_NEXT_CHAPTER":
      return state.map((chapter) => {
        if (chapter.id === action.chapId) {
          let array = chapter.altNextChapters;
          array.push(action.altChapId);
          return { ...chapter, altNextChapters: array };
        } else {
          return chapter;
        }
      });
    case "NEXT_CHAPTER":
      return state.map((chapter) =>
        chapter.id === action.chapId
          ? { ...chapter, nextChapter: action.nextChapterId }
          : chapter
      );
    case "ACCEPTED":
      return state.map((chapter) =>
        chapter.id === action.chapId
          ? { ...chapter, accepted: !chapter.accepted }
          : chapter
      );
    case "ADD_COMMENT":
      return state.map((chapter) => {
        if (chapter.id === action.chapId) {
          let array = chapter.comments;
          array.push(action.commentId);
          return { ...chapter, comments: array };
        } else {
          return chapter;
        }
      });
    case "DELETE_COMMENT":
      return state.map((chapter) => {
        if (chapter.id === action.chapId) {
          let array = chapter.comments.filter(
            (comment) => comment.id !== action.commentId
          );
          return { ...chapter, comments: array };
        } else {
          return chapter;
        }
      });
    case "UPVOTE":
      return state.map((chapter) =>
        chapter.id === action.chapId
          ? { ...chapter, upvotes: chapter.upvotes++ }
          : chapter
      );
    case "DOWNVOTE":
      return state.map((chapter) =>
        chapter.id === action.chapId
          ? { ...chapter, downvotes: chapter.downvotes++ }
          : chapter
      );
    default:
      return state;
  }
};

export default chapters