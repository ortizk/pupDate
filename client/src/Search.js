import React, { Component } from 'react';
import axios from 'axios';

	
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			zip: ''
		}
	}

	handleZipChange = (e) => {
		this.setState({ zip: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('this zip', this.state.zip);
		console.log('this is the user', this.state.user);
		axios.post('http://localhost:3001/getdogsnearby', {zip: this.state.zip})
		.then(res => {
			const results = res.data; 
			console.log('Success from handleSubmit in Search', res.data);
		})
		.catch(err => {
			console.log('error', err);
		});
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input name="Zip" placeholder="Zip" value={this.state.zip} onChange={this.handleZipChange} />
					</div>
					<input type="submit" value="Get neighbouring zips" className="button" />
				</form>
			</div>
		);
	}
}


export default Search;