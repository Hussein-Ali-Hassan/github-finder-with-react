import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  static defaultProps = {
    title: "Github Finder",
  };

  // static propTypes = {
  //   title: React.PropTypes.string.isRequired,
  // };

  render() {
    return (
      <nav className="navbar bg-primary">
        <Link to="/">
          <h1>
            <i className="fab fa-github" /> {" " + this.props.title}
          </h1>
        </Link>
      </nav>
    );
  }
}

export default Nav;
