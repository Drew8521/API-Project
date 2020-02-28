import React from 'react'
import { render } from '@testing-library/react'

const Characters = ({name, description}) => {
    // function printData({name, description}) {
    //     <p>{name}</p>;
    //     <p>{description}</p>;
    // }

    return (
        <div className="container">
            <h4 className="center"> Characters </h4>
            <p> More characters to Explore: </p>
            <button onClick={() => {
                console.log({name});
                console.log({description});
            }}>Squirrel Girl</button>
        </div>
    );
}

export default Characters
