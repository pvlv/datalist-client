// https://codesandbox.io/s/hopeful-herschel-40uiz

import React, { Component } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

import style from './cy-style.json';

export class Cytoscape extends Component {
  static defaultProps = {
    roots: '#a'
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return {
        data: nextProps.data
      };
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      style: style,
      cy: null
    };
  }

  getLayout() {
    const { roots } = this.props;
    return {
      name: 'breadthfirst',
      directed: true,
      roots,
      padding: 10
    };
  }

  render() {
    const { data } = this.state;
    const layout = this.getLayout();

    return (
      <>
        <CytoscapeComponent
          elements={data}
          style={{ width: '728px', height: '800px', border: '1px solid grey' }}
          stylesheet={this.state.style}
          layout={layout}
        />
      </>
    );
  }
}
