import React, { Component } from 'react';

export default class Searchbar extends Component {
	state = {
		term: '',
	};

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form action='' className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor='videoSearch'>Video Search</label>
						<input
							type='text'
							id='videoSearch'
							placeholder='type something here...'
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
