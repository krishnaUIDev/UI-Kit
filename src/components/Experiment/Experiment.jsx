import React from 'react';
import './Experiment.css';
import {TransitionGroup} from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface ToggleProps {
  hidden: boolean;
  children: node;
}

export function Toggle(props: ToggleProps) {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="toggle"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {props.hidden ? null : (
          <div key={'sample'} className="toggle-base">
            {props.children}
          </div>
        )}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default class Experiment extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {hidden: true};
  }

  onClick() {
    this.setState((prevState, props) => ({
      hidden: !prevState.hidden,
    }));
  }
  render() {
    return (
      <div>
        <div onClick={this.onClick}>Click me1</div>
        <Toggle hidden={this.state.hidden}>I am toggle</Toggle>
        <div>Something else.</div>
      </div>
    );
  }
}
