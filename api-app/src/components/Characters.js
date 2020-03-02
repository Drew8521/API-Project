import React from 'react'
//import { render } from '@testing-library/react'

const Characters = (props) => {
    return (
        <div className="container">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );       
}

export default Characters
