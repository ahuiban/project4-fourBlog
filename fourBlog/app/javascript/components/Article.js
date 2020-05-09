import React from "react";
import PropTypes from "prop-types";

import Timestamp from "react-timestamp";

class Article extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}

          <div className="article-meta-details">
            <small>
              Created by: {this.props.author},{" "}
              <Timestamp time={this.props.created_at} precision={4} />, last
              updated: <Timestamp time={this.props.updated_at} precision={4} />
            </small>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const self = this;
    setInterval(function () {
      self.forceUpdate();
    }, 1000);
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
};
export default Article;
