import React, { useState } from 'react'

const Searchbar = props => {
	const [term, setTerm] = useState(props.defaultTerm)

	const onFormSubmit = event => {
		event.preventDefault()
		props.onFormSubmit(term)
	}
	return (
		<div className='search-bar ui segment'>
			<form action='' className='ui form' onSubmit={onFormSubmit}>
				<div className='field'>
					<label htmlFor='videoSearch'>Video Search</label>
					<input
						type='text'
						id='videoSearch'
						placeholder='type something here and hit enter...'
						value={term}
						onChange={e => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	)
}

export default Searchbar
