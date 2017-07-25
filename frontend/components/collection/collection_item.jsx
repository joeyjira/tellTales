import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.state = {
      showEdit: false,
      input: this.props.title
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
              <input
                type="text"
                value={this.state.input}
                onChange={this.update("input")}
                onBlur={() => this.setState({ ["input"]: this.props.title })}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="collection-name">
            <div className="name-edit" onDoubleClick={this.showEdit}>
              {title}
            </div>
            <button onClick={this.handleDelete}><i className="fa fa-times" aria-hidden="true"></i></button>
          </div>
        );
      }
    } else {
      return <div />;
    }
  }
}

export default CollectionItem;
