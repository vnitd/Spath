function SearchBar(pros) {
	const inputFocus = () => {
		document.querySelector('.search-bar').style.backgroundPosition = 'right'
	}
	const inputBlur = () => {
		document.querySelector('.search-bar').style.backgroundPosition = 'left'
	}
	return (
		<div className="search-bar">
			<div className="search-bar__inside">
				<input
					className="search-bar__input"
					type="text"
					style={{ backgroundColor: '#fff' }}
					placeholder={pros.content}
					onFocus={inputFocus}
					onBlur={inputBlur}
				/>
				<i className="fa fa-search" />
			</div>
		</div>
	)
}

export default SearchBar
