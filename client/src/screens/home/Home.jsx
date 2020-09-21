import { createEvent } from "@testing-library/react"
import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

import "./Home.css"
import api from "../../services/api-config"
import Button from "../../components/shared/button/Button"

export default function Home(props) {
	const { username, setNameData } = props
	const history = useHistory()

	const handleChange = (e) => {
		const { name, value } = e.target
		setNameData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				history.push("/createEvent")
			}}
		>
			<h3 className="name">Enter Name</h3>
			<label>
				Username:
				<input
					className="name-input"
					type="text"
					name="username"
					value={username}
					onChange={handleChange}
				/>
			</label>
			<Link to="/createevent" name={username}></Link>
			<Button className="submit-button" content="Submit" />
		</form>
	)
}
