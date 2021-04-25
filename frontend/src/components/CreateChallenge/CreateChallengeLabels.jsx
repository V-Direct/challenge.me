import React,  {useState} from 'react'

import "../../css/ChallengeItem.css";

export default class CreateChallengeLabels extends React.Component{

    constructor(){
        super()
        this.state = {
          data: []
        }
    }

    onClick = (name) => {
        this.setState(...this.state.data, name);
    }

    render(){
        return (
            <div className="createlabelscontainer">
                {this.state.data.map((item) => (
                     <div className="label">{item}</div>
                ))}
                <input type="text" id="labelinput"></input>
                <button onClick={() => {
                    this.setState({ data: [...this.state.data, document.getElementById("labelinput").value]});
                    document.getElementById("labelinput").value = "";
                }}></button>
            </div>
        )
    }
    
}
