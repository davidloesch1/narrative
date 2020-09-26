import { connect } from "react-redux";
import Home from "../Home";

// const getVisibleStories = (stories, filter) => {
//   switch (filter) {
//     case SHOW_ALL:
//       return stories;
//   }
// };
const mapStateToProps = (state) => {
  console.log(state);
  return ({
    stories: state.stories,
  });
};
const mapDispatchToProps = (dispatch) => ({
  // not here yet
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
