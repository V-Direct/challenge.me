import React from "react";

   async function createUser(newUsername, newPassword){
        const response= await fetch('http://localhost:3000/user/',{
            method: 'POST',
            headers: { 
                'Accept' : 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({username:newUsername, password:newPassword})
        });
        const data = await response.json();
        console.log(data);
    }

     function Register(){
        return (
         <div>
                    <ol><label>username</label></ol>
                    <ol><input id="inputUsername"></input></ol>
                    <ol><label>Password</label></ol>
                    <ol> <input id="inputPassword"></input></ol>
                    <ol><label id="errorLabel"></label></ol>
                    <ol> <button onClick={()=>{
                      const newUsername = document.getElementById("inputUsername").value;
                      const newPassword = document.getElementById("inputPassword").value;

                      !newUsername || !newPassword || newUsername==="" || newPassword==="" ? document.getElementById("errorLabel").innerHTML='ungültige Werte' : createUser(newUsername, newPassword)
                      }}>create</button></ol>
               </div>

    );
    }

    export default Register
