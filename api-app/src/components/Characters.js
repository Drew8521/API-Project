import React from 'react'
//import { render } from '@testing-library/react'
//import API from '../API'
import './Characters.css';


const Characters = (props) => {
    return (
		<div className="container">
            <h3 className="center">{props.name}</h3>
            <h4 className="center">{props.description}</h4>
            <h4>Comics:</h4>
            <p>{props.comics}</p>
        </div>
	);
}

export default Characters;