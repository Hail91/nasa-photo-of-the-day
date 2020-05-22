import React, {useState, useEffect} from 'react';
import NasaCard from './NasaCard';
import axios from 'axios';



export default function Nasa() {
    const [nasaStuff, setNasaStuff] = useState([])
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pbETqsaWOa6p4C4M2AIFjiUFR50DM59m8OnsjaGf')
        .then(response => {
            console.log(response);
            setNasaStuff(response.data);
        })
        .catch(error => {
            console.log("Sorry, no data!", error);
        })
    }, []);
    
    return (
        <div className="container">
            <NasaCard imgUrl={nasaStuff} />
        </div>
    );
    // return null;
}


