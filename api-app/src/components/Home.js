import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
 import QuizPage from '../QuizPage'

const Home = () => {
	return (
		<div className="container">
			<h4 className="center"> Home </h4>
			<p> Take the quiz to see whos comics you should read next! </p>

		</div>
	);
}

export default Home;
