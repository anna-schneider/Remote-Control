import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
	const [nameData, setNameData] = useState({
		username: "",
	})
	const { username } = nameData

	return (
		<form>
			<h3>Enter Name</h3>
			<label>
				Username:
				<input />
			</label>
			<Link to="/home">Test</Link>
			<button>Submit</button>
		</form>
	)
}
