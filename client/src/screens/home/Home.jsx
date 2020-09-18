import React, { useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../../layouts/Layout"

export default function Home() {
	const [nameData, setNameData] = useState({
		username: "",
	})
	const { username } = nameData

	return (
		<Layout>
			<form>
				<h3>Enter Name</h3>
				<label>
					Username:
					<input onChange={(e) => setNameData(e.value)} />
				</label>
				<Link to="/home" name={username}></Link>
				<button>Submit</button>
			</form>
		</Layout>
	)
}
