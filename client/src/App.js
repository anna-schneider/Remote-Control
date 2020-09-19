import React from "react"
import api from "./services/api-config"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import Layout from "./layouts/Layout"
import CreateEvent from "./screens/create-event/CreateEvent"
import Home from "./screens/home/Home"
import EventDetail from "./screens/event-detail/EventDetail"
import EventVote from "./screens/event-vote/EventVote"

function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/createevent" component={CreateEvent} />
				<Route exact path="/eventdetail" component={EventDetail} />
				<Route exact path="/eventvote" component={EventVote} />
			</Switch>
		</Layout>
	)
}

export default App
