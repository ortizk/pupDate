import React, { Component } from 'react';
import axios from 'axios';

	
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			zip: '',
			users: null
		}
	}

	handleZipChange = (e) => {
		this.setState({ zip: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3001/getdogsnearby', {zip: this.state.zip})
		.then(res => {
			// const results = res.data;
			console.log('Success from handleSubmit in Search', res.data);
			this.setState({
				users: res.data
			})
		})
		.catch(err => {
			console.log('error', err);
		});
	}

	render() {
		this.state.users
		let results 
		if (this.state.users !== null) {
			results = this.state.users.map(users =>{
				
					return (
						<div key={users.id}>
							<strong><p>{users.name}</p></strong>
							<p>{users.email}</p>
							<p>their dogs are: {users.dogs}</p>
							<hr />
						</div>
					);
				
			});
		}
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input name="Zip" placeholder="Zip" value={this.state.zip} onChange={this.handleZipChange} />
					</div>
					<input type="submit" value="Get neighbouring zips" className="button" />
				</form>
				<div>
					{results}
				</div>
			</div>
		);
	}
}


export default Search;