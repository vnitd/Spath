import './Sidebar.scss'
import Logo from './Logo'
import SearchBar from './SearchBar'

function Sidebar() {
	return (
		<div className="title">
			<Logo />
			<SearchBar />
		</div>
	)
}

export default Sidebar
