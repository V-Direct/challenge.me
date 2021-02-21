import React, {useEffect, useState} from 'react'
import ChallengeItemHeader from './ChallengeItemHeader'

export default function ChallengeItem(props) {

    const [state, setState] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3001/challenge/")
            .then(res => res.json())
            .then(data => setState(data))
        
    });

    return(
        <div className="challange-container">
            {state.map(item => (
                <div>{item.title}</div>
            ))}
            <ChallengeItemHeader title={props.title} tag={props.tag} /> 
            <div className="challenge-description"></div>
            <div className="labels-container">

            </div>
        </div>
    )
}