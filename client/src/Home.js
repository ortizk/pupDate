import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

	
class Home extends Component {
	render() {
		return(
			<div>
				<h1>PUP PLAY DATE</h1>
				<h3>How it works</h3>
				<h4>Find dogs in your area for walks and park visits!</h4>
				<h4>Log in to find the right puppy friend for your dog</h4>
				<Link to="/login">SEARCH NOW</Link>
				<Search />
			</div>
		);
	}
}


export default Home;