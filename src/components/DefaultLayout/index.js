import Content from './Content'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
	console.log(children)
	return (
		<div className="container">
			<Sidebar lang={children.props.lang} />
			<Content lang={children.props.lang}>{children}</Content>
		</div>
	)
}

export default DefaultLayout
