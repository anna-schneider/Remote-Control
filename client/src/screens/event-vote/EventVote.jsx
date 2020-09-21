import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./EventVote.css"
import "../../services/events"
import { getOneEvent } from "../../services/events"
import Movie from "../../components/Movie"

export default function EventVote() {
	const [event, setEvent] = useState({ movies: [] })
	const { id } = useParams()

	useEffect(async () => {
		const singleEvent = await getOneEvent(id)
		setEvent(singleEvent)
	}, [id, setEvent])

	console.log(event)
	return (
		<div className="event-vote-container">
			<h2>{event.name}</h2>
			<h2>Event Name Placeholder</h2>
			<button>Submit Vote</button>
		</div>
	)
}
