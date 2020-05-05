import React, { Component } from 'react';
// import MyComponent from './03/MyComponent';
// import PropComponent from './03/PropsComponent';
// import ChildComponent from './03/ChildComponent';
// import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import Counter from './03/Counter';
import LifeCycleExample from './LifeCycleExample';

class App extends Component {
	render() {
		return (
			<div>
				<LifeCycleExample />
			</div>
		);
	}
}

export default App;
