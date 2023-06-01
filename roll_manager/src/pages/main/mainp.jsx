import React, { useState } from 'react'
import './style.css'

let user = '';
let pass = '';

const insertInfo = () =>{
    if(user != '' && pass != '')
    {
        alert("Successfully loged-on")
    }
}


const Log = () =>{
    return(
        <form>
            <table>
                <tr>
                    <td>E-mail *</td>
                    <td><input placeholder='insert.your@email.com' onChange={(e) => {user = e.target.value}}/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" onChange={(e) => {pass = e.target.value}}/></td>
                </tr>
                <tr>
                    <td><input type={'submit'} value="Submit" onSubmit={insertInfo}/></td>
                </tr>
            </table>
        </form>
    )
}



const MainPage = () =>{
    return(
        <div className='Div_F'>
            <div className='Space_1'>
                <h1>
                    Welcome ! this is my site !
                </h1>
            </div>
            <div className='Space_2'>
                <p>Make a login</p>
            </div>
            <Log></Log>
        </div>
    )
}

export default MainPage