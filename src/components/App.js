import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
	return <div>PageOne</div>
}

const PageTwo = () => {
	return (
		<div>
			page two
			<button>Click me</button>
		</div>
	)
}

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div><Route path="/" exact component={PageOne}>
				</Route>
					<Route path="/pagetwo" exact component={PageTwo}>
					</Route>
				</div>
			</BrowserRouter>
		</div>);
};

export default App;