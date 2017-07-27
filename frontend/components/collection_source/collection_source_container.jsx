import { connect } from "react-redux";
import values from "lodash/values";
import CollectionSourceList from "./collection_source_list";
import { deleteSource } from "../../actions/collection_actions";

const mapStateToProps = ({ session, sources }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSources: id => dispatch(fetchSources(id)),
  deleteSource: id => dispatch(deleteSource(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CollectionSourceList
);
