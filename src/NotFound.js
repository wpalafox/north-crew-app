import React from 'react'
import './NotFound.css'
import bendita from './pics/Bendita.jpg';

export default function NotFound() {
    return (
        <div className='notfound'>
             <h1 className='victory'>Bendita's Page</h1>
            <img id="bendita-image" src={bendita} alt="dog" />
            
        </div>
    )
}
