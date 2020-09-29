import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  loggedIn: false,
  user: null,
  users: {
    user_1: { id: "user_1", username: "David" },
    user_2: { id: "user_2", username: "Chelsea" },
  },
  comments: {
    comment_1: {
      id: "comment_1",
      parentId: "story_1",
      commenter: "user_2",
      comment: "Lorem Ipssum this is a comment!",
      childComments: ["comments_2"],
      upvotes: 0,
      downvotes: 0,
    },
    comment_2: {
      id: "comment_2",
      parentId: "story_1",
      commenter: "user_2",
      comment: "Lorem Ipssum this is a comment!",
      childComments: [""],
      upvotes: 0,
      downvotes: 0,
    },
  },
  genres: {
    genre_Action: "Action",
    genre_Adventure: "Adventure",
  },
  stories: {
    story_1: {
      id: "story_1",
      narrator: "user_1",
      title: "The Joker",
      genres: {
        Action: true,
        Adventure: true,
      },
      upvotes: 0,
      downvotes: 0,
      chaptersSubmitted: ["chap_10", "chap_11"],
      selectedChapters: ["chap_1", "chap_2", "chap_3", "chap_4"],
      comments: ["comment_1"],
      plot:
        "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    story_2: {
      id: "story_2",
      narrator: "1",
      title: "The Joker 2",
      genres: {
        Action: true,
        Adventure: true,
      },
      upvotes: 0,
      downvotes: 0,
      chaptersSubmitted: ["chap_10", "chap_11"],
      selectedChapters: ["chap_1", "chap_2", "chap_3", "chap_4"],
      comments: ["comment_1"],
      plot:
        "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  },
  chapters: {
    chap_1: {
      id: "chap_1",
      author: "user_2",
      content: "Lorem Ipsum I'm a chapter!!!",
      comments: ["comment_3", "comment_4"],
      story: "story_1",
      accepted: false,
      altNextChapters: ["chap_6", "chap_7"],
      prevChapter: null,
      nextChapter: "chap_2",
      upvotes: 0,
      downvotes: 0,
    },
    chap_2: {
      id: "chap_2",
      author: "user_2",
      content: "Lorem Ipsum I'm a chapter!!!",
      comments: ["comment_3", "comment_4"],
      story: "story_1",
      accepted: false,
      altNextChapters: ["chap_6", "chap_7"],
      prevChapter: "chap_1",
      nextChapter: "chap_3",
      upvotes: 0,
      downvotes: 0,
    },
    chap_3: {
      id: "chap_3",
      author: "user_2",
      content: "Lorem Ipsum I'm a chapter!!!",
      comments: ["comment_3", "comment_4"],
      story: "story_1",
      accepted: false,
      altNextChapters: ["chap_6", "chap_7"],
      prevChapter: "chap_2",
      nextChapter: "chap_4",
      upvotes: 0,
      downvotes: 0,
    },
    chap_4: {
      id: "chap_4",
      author: "user_2",
      content: "Lorem Ipsum I'm a chapter!!!",
      comments: ["comment_3", "comment_4"],
      story: "story_1",
      accepted: false,
      altNextChapters: ["chap_6", "chap_7"],
      prevChapter: "chap_3",
      nextChapter: "chap_5",
      upvotes: 0,
      downvotes: 0,
    },
    chap_6: {
      id: "chap_6",
      author: "user_2",
      content: "Lorem Ipsum I'm a chapter!!!",
      comments: ["comment_3", "comment_4"],
      story: "story_1",
      accepted: false,
      altNextChapters: ["chap_6", "chap_7"],
      prevChapter: "chap_4",
      nextChapter: "chap_7",
      upvotes: 0,
      downvotes: 0,
    },
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
