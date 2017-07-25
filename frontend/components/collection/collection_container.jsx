import { connect } from "react-redux";
import CollectionList from "./collection_list";

const mapStateToProps = ({ session, collections }) => ({
  currentUser: session.currentUser,
  allCollections: collections
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
