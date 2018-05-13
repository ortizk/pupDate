import React, { Component } from 'react';
import axios from 'axios';

class YourDogs extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let displayDogs
		let usersDogs = Array.from(this.props.dogs) 
		if (usersDogs !== null) {
			displayDogs = usersDogs.map(dog =>{
				
					return (
						<div key={dog._id}>
							<strong><p>{dog.dogName}</p></strong>
							<p>{dog.breed}</p>
							<p>{dog.age}</p>
							<hr />
						</div>
					);
				
			});
		}
		// // this.props.dogs
		// // console.log("are we getting here?")
		// var results = ''
		// var usersDogs = Array.from(this.props.dogs)
		// // console.log("these dogs:", usersDogs)
		// if (usersDogs.length > 0) {
		// 	results = usersDogs.map(dog => {
		// 		return (
		// 			<div key={dog.id}>
		// 				<strong><p>{dog.dogName}</p></strong>
		// 				<p>{dog.breed}</p>
		// 				<p>{dog.age}</p>
		// 				<hr />
		// 			</div>
		// 		);
		// 	})
		// } else {
		// 	results = <div>You don't have any dogs! Get some!</div>
		// }
		// console.log("results:", results)
		return (
			<div>
				{displayDogs}
			</div>
		)
	}
}

export default YourDogs;