import React from 'react';
import ChallengeItemHeader from '../ChallengeItem/ChallengeItemHeader';
import CreateChallengeLabels from "./CreateChallengeLabels";
import "../../css/ChallengeItem.css";
import Button from '../Button/Button';

export default function CreateChallenge(){
    const onClick = () => {
        await fetch("http://localhost:3001/challenge/", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: {},
        });
    }
    
    return (
        <div className="card grey darken-3">
            <div className="card-content">
                <ChallengeItemHeader title="Create Challenge" />
                <input placeholder="Title" type="text"></input>
                <textarea placeholder="Description" className="description-textarea"></textarea>
                <CreateChallengeLabels />
                <Button buttonText="Create Challange" onClick={onClick} />
            </div>
            
        </div>
    )

    
}
