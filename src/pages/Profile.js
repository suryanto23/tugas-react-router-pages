import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import avatar from "../asset/logo-user.png"
import "./css/profile.css"





function Profile() {

    let local = localStorage.getItem("user")
    let localObj = JSON.parse(local)
    const history = useHistory();
    
    // Tail function for preventing unlogged user

    

    useEffect(() => {


        if (!localStorage.user) {
            
            console.log(local)
            alert ("cannot accsess this page")
             history.push("/")
        }
        
      });

      

     function logout  ()  {
       
        let n = window.confirm("Logging Out, Are you sure?")
        if (n){ 
            localStorage.clear("user")
            history.push("/")
         } else return

        
      }



    return (
        <div className="profile">

            {/*  Validating user & DOM Display  */}

            { localStorage.user ? 
            
                <div className="userProfile">
                    <img src={avatar} className="avatar" alt="avatar"/>
                    <h1>{localObj[0].nama}</h1>
                    <p className="bioTitle">Bio :</p>
                    <p className="bioText">{localObj[0].biodata}</p>
                    <button type="button" className="logoutButton" onClick={logout}> Log Out</button>
                </div>
                
                : <div></div>
            }


        </div>
    )  
}

export default Profile
