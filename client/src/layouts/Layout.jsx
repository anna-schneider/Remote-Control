import React from "react"
import Footer from "../components/shared/footer/Footer"
import Header from "../components/shared/header/Header"

export default function Layout(props) {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</>
	)
}
