import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function NavMenuComponent(props) {
  const { show } = props;

  return (
    <>
      { show && <h1>FFS Work</h1>}
    </>
  );
}

NavMenuComponent.propTypes = {
  show: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  show: state.appComponentVisibility.showNavMenu,
});

export default connect(mapStateToProps)(NavMenuComponent);
