import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';
import DisplayList from './DisplayList';

class Bookmark extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  fetch() {
    const user = fetch('http://localhost:5000/api/users/current').then(res => res.json()).then(data => console.log(data))
  }

  generateBookmark() {
    var a = document.createElement("a");
    var linkText = document.createTextNode("LearnED Bookmark");
    a.appendChild(linkText);
    a.title = "LearnED Bookmark";
    a.classList.add("mt-3");
    a.href = `javascript: function rbm(){window.rbmAuth="Basic ZmU3YTdiYTAyZDU4NmM6Yjc5ZGVmMmZkMWY5ZWQ=",window.rbmEndpoint="https://watershedlrs.com/api/organizations/8501/lrs/",window.rbmEmail="ramesh1arr@gmail.com",window.rbmName="Ramesh";var a=document,b=a.createElement("sc"+"ript"),c=a.body,d=a.location;b.setAttribute("src","https://cdn.jsdelivr.net/gh/nagarjundeepak/xAPI/test.js");c.appendChild(b)}rbm();void 0`;
    document.querySelector(".placeholderLink").append(a);
  };

  render() {
    const user = this.props.auth;
    console.log(user, "user");
    this.fetch();
    return (
      <div>
        <div className="container">
          <h4>Home Page</h4>
          <div className="container">
            <div className="row">
              <span>Generate my bookmarker</span>
            </div>
            <div className="row mt-3">
              <button className="btn btn-success" onClick={this.generateBookmark}>
                Generate
            </button>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row placeholderLink" />
            <div className="row">
              To use the Learned bookmark feature, click the Generate button, then
              drag and drop the plug in "Link" to your favorites bar
          </div>
          </div>
        </div>
        <div className="container">
          <DisplayList />
        </div>
      </div>
    );
  }
}

Bookmark.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Bookmark
);
