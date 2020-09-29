import { connect } from "react-redux";
import { upvote, downvote } from '../redux/actions/storyActions'
import Home from "../Home";

const mapStateToProps = (state) => ({
  stories: state.stories,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  upvote: (storyId, userId) => dispatch(upvote(storyId, userId)),
  downvote: (storyId, userId) => dispatch(downvote(storyId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
