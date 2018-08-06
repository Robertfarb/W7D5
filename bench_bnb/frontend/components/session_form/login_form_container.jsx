import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form'

const mapStateToProps = state => ({
  errors: state.errors,
  formType: "login"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: dispatch((user) => ownProps.login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
