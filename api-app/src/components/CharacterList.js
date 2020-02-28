import Characters from "./Characters"
import React, { useState, useEffect } from "react";

function CharacterList({ setter }) {
    const TS = "squirrelgirl";
    const API_KEY = "9ac99174c6637a3dd38851c3d6b0d5b1";
    const HASH = "42ecef42631ad8361b84362647e3dc04";

    const [chars, setChar] = useState([]);

    useEffect(() => {
      getCharacters();
    }, []);

    const getCharacters = async () => {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?name=Squirrel%20Girl&ts=${TS}&apikey=${API_KEY}&hash=${HASH}`
      );
      const data = await response.json();
      setChar(data.results);
      console.log(data.results);
    }

    return (
        <div>
          <ul>
            {chars.map(char => (
              <Characters 
                name={char.name}
                description={char.description}
              />
            ))};
          </ul>
        </div>
    );
    }




