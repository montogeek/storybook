import React, { Component } from 'react';
import addons from '@storybook/addons';
import PropTypes from 'prop-types';

export class WrapStory extends Component {
  static propTypes = {
    channel: PropTypes.object.isRequired,
    context: PropTypes.object.isRequired,
    storyFn: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { channel } = this.props;
    channel.emit('addon:viewport:update', 'reset');
  }

  render() {
    const { storyFn, context } = this.props;
    return storyFn(context);
  }
}
