import React from 'react'
import { render } from '@testing-library/react'

const Characters = ({name, description}) => {
    return (
        <div className="container">
            <h4 className="center"> Characters </h4>
            <p> More characters to Explore: </p>
            <button onClick={() => {
                alert({name});
                console.log({description});
            }}>Squirrel Girl</button>
        </div>
    );
}

export default Characters
