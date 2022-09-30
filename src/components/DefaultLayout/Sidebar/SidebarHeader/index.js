import React from 'react'
import NoneSelectableLayout from '/components/NoneSelectableLayout'
import Logo from './Logo'
import SearchBar from './SearchBar'

function SidebarHeader(pros) {
	return (
		<React.Fragment>
			<NoneSelectableLayout>
				<Logo />
				<SearchBar content={pros.lang.resource['search-placehoder']} />
			</NoneSelectableLayout>
		</React.Fragment>
	)
}

export default SidebarHeader
