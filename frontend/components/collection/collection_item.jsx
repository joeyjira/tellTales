import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import CollectionSourceContainer from "../collection_source/collection_source_container";

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.state = {
      showEdit: false,
      title: this.props.title,
      hideSource: true
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  showEdit() {
    this.setState({
      showEdit: !this.state.showEdit
    });
  }

  handleEdit() {
    const collectionId = this.props.id;
    this.props.updateCollection({
      collection: {
        title: this.state.title
      },
      id: collectionId
    });
    this.setState({ showEdit: false });
  }

  handleDelete() {
    this.props.deleteCollection(this.props.id);
  }

  render() {
    const { title } = this.props;

    if (title) {
      if (this.state.showEdit) {
        return (
          <div className="collection-item">
            <div className="collection-name">
              <div className="name-edit" onDoubleClick={this.showEdit}>
                <form onSubmit={this.handleEdit}>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    autoFocus="autofocus"
                  />
                </form>
              </div>
            </div>
            <div className="collection-source">
              <CollectionSourceContainer
                collectionId={this.props.id}
                sources={this.props.sources}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="collection-item">
            <div className="collection-name">
              <div className="name-edit" onDoubleClick={this.showEdit}>
                {/* <i className="fa fa-chevron-right" aria-hidden="true" />
                &nbsp;&nbsp; */}
                {title}
              </div>
              <button className="fa-delete" onClick={this.handleDelete}>
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
            </div>
            <div className="collection-source">
              <CollectionSourceContainer
                collectionId={this.props.id}
                sources={this.props.sources}
              />
            </div>
          </div>
        );
      }
    } else {
      return <div />;
    }
  }
}

export default CollectionItem;
