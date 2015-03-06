/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var Link  = React.createFactory(require('react-router').Link);

var SearchPage = React.createClass({

  propTypes: {
    updatePageTitle: React.PropTypes.func
  },

  componentDidMount: function() {
    this.props.updatePageTitle('Search');
  },

  render: function() {
    return (
      <section className="search-page">

        <div>
          Search
        </div>

        <div>
          <Link to="Home">Back to Home</Link>
        </div>

      </section>
    );
  }

});

module.exports = React.createFactory(SearchPage);