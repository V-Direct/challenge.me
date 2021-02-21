import React from 'react'

async function loginUser(username, password, props){
    const response= await fetch('http://localhost:3001/user/'+ username,{
        method: 'GET',
        headers: { 
            'Accept' : 'application/json',
            'Content-Type': 'application/json' 
        }       
    });
    const data = await response.json()

    if(data.password !== password){
        document.getElementById("errorLabel").innerHTML='Falsches passwort'
    }
}



function errorLabel() {
    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;
    document.getElementById("errorLabel").innerHTML=''

    if(username.length === 0 || password.length === 0) {
        document.getElementById("errorLabel").innerHTML='Fehler'
    }
    else{
        loginUser(username,password)
    }
    
}

 function Login() {
    return (
        <div>                 
                    <br></br>
                    <ol><label>username</label></ol>
                    <ol><input id="inputUsername"></input></ol>
                    <ol><label>Password</label></ol>
                    <ol> <input id="inputPassword"></input></ol>
                    <ol><label id="errorLabel"></label></ol>
                    <ol> <button onClick={errorLabel}>Login</button></ol>
                    
        </div>
    )
}

export default Login
