import './Content.scss'

function Content({ children }) {
	console.log(children)
	return <div className="layout__content">{children}</div>
}

export default Content
