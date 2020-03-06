import React, { Component } from 'react';
import md5 from "md5";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import Characters from './Characters';
import { render } from 'react-dom';
import './Characters.css';

const API = () => {
    const TS = "Date.now()";
    const PUBLIC_KEY = "9ac99174c6637a3dd38851c3d6b0d5b1";
    const PRIVATE_KEY = "000a54a0d6a07663808c5278ed1c58f7c9c38bad";
    const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);
    const [charactersState, setCharactersState] = useState([]);
    const [comicItems, setComicItems] = useState([]);
    const [thumbnailItems, setThumbnailItems] = useState({});
    const [query, setQuery] = useState('Ancient One');
    const [listNames, setListNames] = useState({
        charNames: [
        'Ancient One',
        'Apocalypse',
        'Blade',
        'Bullseye',
        'Domino',
        'Echo',
        'Elektra',
        'Firelord',
        'Grandmaster',
        'Kitty Pryde',
        'Machine Man',
        'Morph',
        'Nebula',
        'Silver Surfer',
        'Squirrel Girl',
        'Uatu The Watcher',
        'Viper'
        ]
    });
    
    useEffect(() => {
        getCharacters();
    }, [query]);


    const getCharacters = async () => {
        const response = await fetch (
            `https://gateway.marvel.com/v1/public/characters?name=${query}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
        );
        const data = await response.json();
        setCharactersState(data.data.results[0]);
        setComicItems(data.data.results[0].comics.items);
        setThumbnailItems(data.data.results[0].thumbnail);
        console.log(setThumbnailItems(data.data.results[0].thumbnail));
    }
    
    const updateSetQueryState = e => {
        e.preventDefault();
        setQuery(e.target.innerText);
    }

    return (
        <div>
            <h3 className="center"> Characters</h3>
            <h4 className="center">Click on a character button to explore!</h4>
                {listNames.charNames.map(charName => (
                    <button className="charBtn" onClick={updateSetQueryState}>
                        <p className="charBtnText">{charName}</p>
                    </button>
                 ))}
          <Characters
                name={charactersState.name}
                description={charactersState.description}
                comics={comicItems.map((comicItem, index) => (
                    <li key={index}>{comicItem.name}</li>
                 ))}
                image={`${thumbnailItems.path}.${thumbnailItems.extension}`}
          />

        </div>
        
    )
}

export default API;