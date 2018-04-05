import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LegalPanel from '../panels/legal_panel.jsx';

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    //redirect if logged in (onwards to profile)
    if (this.props.id) {
      this.props.history.push('/profile');
    }
  }

  render() {
    var linkStyles = {
      flex: '0 1 auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    };

    return (
      <div className='page'>
        <h1 className='centered'>Welcome To The Portal!</h1>
        <p>The Yawning Portal is a popular tavern in the city of Waterdeep, where adventurers from all over the Forgotten Realms and beyond gather to drink, trade stories of epic heroism, and gather intel on various goings on that may lead an adventurer to riches beyond their wildest imaginations.</p>
        <p>This is not The Yawning Portal.</p>
        <p>portal.yawning.xyz is a social media website created by one man in his mother's basement for use by his D&D playgroup. All are welcome here, but please be respectful of others, and don't make a mess on the carpet.</p>
        <div style={linkStyles}>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/passwordrecovery'>Reset Password</Link>
        </div>
      <LegalPanel />
      </div>
    );
  };
}

//redux
PageHome.propTypes = {
  store: PropTypes.object.isRequired,
  id: PropTypes.number,
  history: PropTypes.object.isRequired
};

function mapStoreToProps(store) {
  return {
    store: store,
    id: store.profile.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //
  };
}

PageHome = connect(mapStoreToProps, mapDispatchToProps)(PageHome);

export default withRouter(PageHome);
