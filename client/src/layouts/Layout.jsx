import React from "react"
import Header from "../components/shared/Header"

export default function Layout(props) {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<footer></footer>
		</>
	)
}
