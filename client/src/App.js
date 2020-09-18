import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import Layout from "./layouts/Layout"
import Home from "./screens/home/Home"

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/">
					<Home />
				</Route>

				{/* <Route path='/' component={eventContainer} /> */}
			</Switch>
		</Layout>
	)
}

export default App
