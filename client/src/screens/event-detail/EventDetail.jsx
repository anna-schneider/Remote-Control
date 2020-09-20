import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./EventDetail.css"
import "../../services/events"
import { getOneEvent } from "../../services/events"

export default function EventDetail() {
	const [event, setEvent] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		const fetchEvent = async () => {
			const singleEvent = await getOneEvent(id)
			setEvent(singleEvent)
		}
		fetchEvent()
	}, [id, setEvent])

	return (
		<div className="event-detail-container">
			<button>Copy URL</button>
			<button>Delete Event</button>
		</div>
	)
}
