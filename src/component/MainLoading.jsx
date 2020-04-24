import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class MainLoading extends Component {
  render() {
    return (
      <LinearProgress color="primary" />
    );
  }
}