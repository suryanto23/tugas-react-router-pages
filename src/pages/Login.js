import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import "./css/login.css"


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    useEffect (() => { 

        if (localStorage.user){

            alert ("You Already Logged In")
            history.push("/Profile")

        }

     })
    

    let dataObj = {
        email: email,
        password:  password,
    }

    function getEmail (param) {
        setEmail (param.target.value)
    }

    function getPassword (param) {
        setPassword (param.target.value)
    }


    function getData (){

        // Inisialisasi URL Database
        const url = "https://6023a8436bf3e6001766b514.mockapi.io/app-inventory"

        // Buka Koneksi API
        fetch (url)

        .then(result => result.json())
        .then(data => {  

            // Validasi User
            const user = data.filter( (user) => user.email === dataObj.email && user.password === dataObj.password );
            let userJSON = JSON.stringify(user)
            
            if ( user.length > 0 ){
                alert ("Login Berhasil")
                localStorage.user = userJSON
                history.push("/")
                
            } else {
                alert ("Login Gagal")
            }

        })

    }


    return (

        <>

        { !localStorage.user ? 
            <div className="login">
                <h1 className="loginTitle">Login</h1>
                    <div className="loginForm">

                        

                        <p>Email</p>
                        <input onChange={getEmail}/>
                        <p>Password</p>
                        <input type="password" onChange={getPassword}/>
                        <button  onClick={getData} >Submit</button>
            
                    </div>
            </div>
           

            : <div> </div>
        }    

        </>
        
    )
    
}

export default Login
