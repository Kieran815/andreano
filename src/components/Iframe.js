'use strict';

var React = require('react');

var Iframe = React.createClass({

  propTypes: {
    src: React.PropTypes.string.isRequired,
    onLoad: React.PropTypes.func
  },

  componentDidMount: function() {
    this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
  },

  render: function() {
    return(
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JTW6ezTwBjw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    );
  }
});

module.exports = Iframe;
