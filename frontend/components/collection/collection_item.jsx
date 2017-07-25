import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.state = {
      showEdit: false,
      title: this.props.title
    };
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  showEdit() {
    this.setState({
      showEdit: !this.state.showEdit
    });
  }

  handleEdit() {
    const collectionId = this.props.id;
    this.props.updateCollection({
      collection: { title: this.state.title },
      id: collectionId
    });
    this.setState({
      showEdit: false
    })
  }

  handleDelete() {
    const collectionId = this.props.id;
    this.props.deleteCollection(collectionId);
  }

  render() {
    const { title } = this.props;
    if (title) {
      if (this.state.showEdit) {
        return (
          <div className="collection-name">
            <div onDoubleClick={this.showEdit}>
              <form onSubmit={this.handleEdit}>
                <input
                  type="text"
                  value={this.state.input}
                  onChange={this.update("title")}
                />
              </form>
            </div>
          </div>
        );
      } else {
        return (
          <div className="collection-name">
            <div className="name-edit" onDoubleClick={this.showEdit}>
              {title}
            </div>
            <button className="fa-delete" onClick={this.handleDelete}>
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </div>
        );
      }
    } else {
      return <div />;
    }
  }
}

export default CollectionItem;
