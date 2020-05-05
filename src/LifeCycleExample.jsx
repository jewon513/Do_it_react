import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
	static getDerivedStateFromProps() {
		console.log('getDerivedStateFromProps 호출');
		return {};
	}

	constructor(props) {
		super(props);
		this.state = {};
		console.log('constructor 호출');
	}

	componentDidMount() {
		console.log('componentDidMount 호출');
		this.setState({
			update: true,
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate 호출');
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate 호출');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount 호출');
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate 호출');
		return {};
	}

	render() {
		console.log('render 호출');

		return null;
	}
}

LifeCycleExample.propTypes = {};

export default LifeCycleExample;
