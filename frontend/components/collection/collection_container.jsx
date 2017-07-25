import { connect } from "react-redux";
import values from "lodash/values";
import CollectionList from "./collection_list";

const mapStateToProps = ({ session, collections }) => ({
  currentUser: session.currentUser,
  collections: values(collections)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
