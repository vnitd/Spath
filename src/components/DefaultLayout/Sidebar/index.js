import './Sidebar.scss'
import './SidebarFonts.scss'
import SidebarHeader from './SidebarHeader'

function Sidebar(pros) {
	console.log('Re-render')
	return (
		<div className="title">
			<SidebarHeader lang={pros.lang} />
		</div>
	)
}

export default Sidebar
