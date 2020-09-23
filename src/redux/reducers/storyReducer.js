const stories = (state = [], action) => {
  switch (action.type) {
    case "NEW_STORY":
      return [
        ...state,
        {
          id: action.id,
          narrator: action.object.narrator,
          title: action.object.title,
          genres: action.object.genres,
          upvotes: 0,
          downvotes: 0,
          chaptersSubmitted: [],
          selectedChapters: [],
          comments: [],
          plot: action.object.plot,
        },
      ];
    case "CHAPTER_SUBMISSION":
      return state.map((story) => {
        if (story.id === action.storyId) {
          let array = story.chapterSubmitted;
          array.push(action.chapId);
          return { ...story, chapterSubmitted: array };
        } else {
          return story;
        }
      });
    case "SELECT_CHAPTER":
      return state.map((story) => {
        if (story.id === action.storyId) {
          let array = story.selectedChapters;
          array.push(action.chapId);
          return { ...story, selectedChapters: array };
        } else {
          return story;
        }
      });
    case "ADD_COMMENT":
      return state.map((story) => {
        if (story.id === action.storyId) {
          let array = story.comments;
          array.push(action.commentId);
          return { ...story, comments: array };
        } else {
          return story;
        }
      });
    case "UPVOTE":
      return state.map((story) =>
        story.id === action.storyId
          ? { ...story, upvotes: story.upvotes++ }
          : story
      );
    case "DOWNVOTE":
      return state.map((story) =>
        story.id === action.storyId
          ? { ...story, downvotes: story.downvotes++ }
          : story
      );
    default:
      return state;
  }
};

export default stories;
