import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
 import QuizPage from '../QuizPage'
 import './Home.css';

const Home = () => {
	return (
		<div className="container">
			<h3>Background</h3>
			<p>The Marvel Cinematic Universe has taken the world by storm introducing more people the marvelous world of superheros.</p>
			<p>Fans of the movies might be interested in getting into the comics, but because of just how many comics and characters there are, it can be overwhelming to know where to start.</p>
			<p>Marvel More is here to help fans who want to get into comics and help them discover new characters. </p>
			<p>Take the quiz to see what character might go along with your interests </p>
			<p>To explore more characters, see the character page.</p>

			<Link to="/QuizPage">
				<button type = "button">
					<h4>Take the Quiz</h4>
				</button>
			</Link>

		</div>
	);
}

export default Home;
