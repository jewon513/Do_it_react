import React, { Component } from 'react';

class ForceUpdateExample extends React.Component {
	constructor(props) {
		super(props);

		this.loading = true;
		this.formData = 'no Data';

		this.handleData = this.handleData.bind(this);
		setTimeout(this.handleData, 4000);
	}

	handleData() {
		const data = 'new Data';

		this.loading = false;
		this.formData = data + this.formData;
		this.forceUpdate();
	}

	render() {
		return (
			<div>
				<span>로딩중 : {String(this.loading)}</span>
				<sapn>결과 : {this.formData}</sapn>
			</div>
		);
	}
}

export default ForceUpdateExample;
