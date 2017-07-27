import { connect } from "react-redux";
import values from "lodash/values";
import CollectionSourceList from "./collection_source_list";
import { fetchSources } from "../../actions/source_actions";

const mapStateToProps = ({ session, sources }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSources: id => dispatch(fetchSources(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CollectionSourceList
);
