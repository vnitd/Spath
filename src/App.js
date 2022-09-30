import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import { publicRoutes } from './Layouts'

function App(pros) {
	return (
		<Router>
			<div className="App">
				<Routes>
					{publicRoutes.map((route, index) => {
						const Page = route.component
						const Layout = route === null ? Fragment : route.layout || DefaultLayout
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout lang={pros.lang}>
										<Page lang={pros.lang} />
									</Layout>
								}
							/>
						)
					})}
				</Routes>
			</div>
		</Router>
	)
}

export default App
