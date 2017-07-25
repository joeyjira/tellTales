import { connect } from "react-redux";
import values from "lodash/values";
import CollectionList from "./collection_list";
import { deleteCollection } from "../../actions/collection_actions";

const mapStateToProps = ({ session, collections }) => ({
  currentUser: session.currentUser,
  collections: values(collections)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  deleteCollection: (id) => dispatch(deleteCollection(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
