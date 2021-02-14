import React from 'react'

export default function ChallengeItemHeader(props) {
    return (
        <div>
            <div className="challenge-title">{props.title}</div>
            <div className="challenge-tag">{props.tag}</div>
        </div>
    )
}
