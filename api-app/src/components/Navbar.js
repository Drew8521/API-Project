import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return(
		<nav className="nav-wrapper grey darken-4">
			<div className="container">
				<a className="brand-logo">Marvel More!</a>
				<ul className="right">
					<li> <Link to="/home"> Home </Link> </li>
					<li> <Link to="/characters"> Characters </Link> </li>

				</ul>
			</div>
		</nav>
		)
	}
	export default Navbar
