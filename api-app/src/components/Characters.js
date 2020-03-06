import React from 'react'
//import { render } from '@testing-library/react'
//import API from '../API'
import './Characters.css';

const Characters = (props) => {
    return (
		<div className="container">
            <h3 className="center">{props.name}</h3>
            <h4 className="center">{props.description}</h4>
            <img className="charImg" src={props.image} alt="" />
            <p className="comicsHeading">comics {props.name} is found in:</p>
            <p className="com">{props.comics}</p>
        </div>
	);
}

export default Characters;