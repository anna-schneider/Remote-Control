import React, { useEffect, useState, useRef } from "react"
import { useParams, useLocation } from "react-router-dom"

import "./EventDetail.css"
import "../../services/events"
import { getOneEvent } from "../../services/events"
import MovieDetail from "../../components/MovieDetail"

// inspired by https://stackoverflow.com/questions/63546951/react-copy-to-clipboard-using-useref-hook
const copyToClipboard = (text) => {
	const ta = document.createElement("textarea")
	ta.innerText = text
	document.body.appendChild(ta)
	ta.select()
	document.execCommand("copy")
	ta.remove()
}

export default function EventDetail() {
	const [event, setEvent] = useState({ movies: [] })
	const { id } = useParams()

	useEffect(async () => {
		const singleEvent = await getOneEvent(id)
		setEvent(singleEvent)
	}, [id, setEvent])

	const getPath = () => {
		copyToClipboard(`${window.location.host}/eventvote`)
		// copyToClipboard(`${window.location.host}/eventvote/${id}`)
	}

	return (
		<div className="event-detail-container">
			<h2>Your Event</h2>
			<p className="greeting">
				Hi attendees of {event.name}, you suck. {event.id}
			</p>
			<p>
				{event.movies.map((movie) => {
					return (
						<MovieDetail
							{...movie}
							isDisabled={false}
							isSelected={true}
							handleDropDown={() => {}}
						/>
					)
				})}
			</p>
			<button onClick={getPath}>Copy URL</button>
			<button>Delete Event</button>
		</div>
	)
}
