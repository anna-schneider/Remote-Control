import React, { useState, useEffect } from "react"
import api from "./services/api-config"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import Layout from "./layouts/Layout"
import CreateEvent from "./screens/createevent/CreateEvent"
import Home from "./screens/home/Home"
import Test from "./screens/test"

function App() {
	// const [currentUser, setCurrentUser] = useState(null)

	// const loginSubmit = () => {}
	// const [movies, updateMovies] = useState()

	// useEffect(() => {
	// 	const result = async () => {
	// 		const data = await api.get("/movies")
	// 		console.log(data.data)
	// 		updateMovies(data)
	// 	}
	// 	result()
	// }, [])

	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/test" component={Test} />
				<Route exact path="/createevent" component={CreateEvent} />

				{/* <Route path='/' component={eventContainer} /> */}
			</Switch>
		</Layout>
	)
}

export default App
