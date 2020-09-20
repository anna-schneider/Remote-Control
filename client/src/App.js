import React, { useState } from "react"
import api from "./services/api-config"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import Layout from "./layouts/Layout"
import CreateEvent from "./screens/create-event/CreateEvent"
import Home from "./screens/home/Home"
import EventDetail from "./screens/event-detail/EventDetail"
import EventVote from "./screens/event-vote/EventVote"

function App() {
	const [nameData, setNameData] = useState({
		username: "",
	})
	const { username } = nameData

	return (
		<Layout>
			<Switch>
				<Route exact path="/">
					<Home username={username} setNameData={setNameData} />
				</Route>
				<Route exact path="/createevent">
					<CreateEvent username={username} />
				</Route>
				<Route exact path="/eventdetail/:id" component={EventDetail} />
				<Route exact path="/eventvote" component={EventVote} />
			</Switch>
		</Layout>
	)
}

export default App
