
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./css/register.css"




function Register() {

    
    const [nama, setNama] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [biodata, setBiodata] = useState(null)
    const history = useHistory();

    let dataObj = {
        nama:  nama,
        email: email,
        password: password,
        biodata: biodata,

    }

    function storeNama (param){
        setNama (param.target.value)
    }

    function storeEmail (param){
        setEmail (param.target.value)
        
    }

    function storePassword (param){
        setPassword (param.target.value)
    }

    function storeBiodata (param){
        setBiodata (param.target.value)
    }

    function sendData (){

        // Inisialisasi URL Database
        const url = "https://6023a8436bf3e6001766b514.mockapi.io/app-inventory"

        // Action Method
        const option = {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(dataObj),
        }

        // Buka Koneksi API
        fetch (url, option)

        .then(result => result.json())
        .then(data => {  

            console.log("POST executed sucssesfully : " , data)
            alert ("Registrasi Berhasil, Silahkan Login")
            history.push("/Login")  

           } )

     }

    return (
        <div className="register">
        
        <h1 className="registerTitle">Register</h1>
        <div className="registerForm">

            
            
            <p>Nama</p>
            <input  id="namaForm"  onChange={storeNama} />
            <p>Email</p>
            <input id="emailForm" onChange={storeEmail} />
            <p>Password</p>
            <input type="password" id="passwordForm" onChange={storePassword}/>
            <p>Biodata</p>
            <textarea id="biodataForm" onChange={storeBiodata}/> 
            <button  onClick={sendData} >Submit</button>


        </div>

        </div>
    )
}

export default Register
