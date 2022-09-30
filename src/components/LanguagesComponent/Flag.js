import React from 'react'

function Flag(pros) {
	return (
		<React.Fragment>
			<img
				className={`language-flag-VZzdZpJl188v6jGJuqMf language-flag-{pros.id}`}
				src={pros.flag}
				alt={`${pros.id} languages`}
				width="30"
			/>
		</React.Fragment>
	)
}

export default Flag
