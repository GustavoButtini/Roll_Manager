import React from 'react';
import "./styles.css";
const Header = () => {

    function startSection(){
        alert("Working on this !");
    }
    return(
        <header className='H'>
            <div className='H_comp H_text'>
                <h1 className='t_h1'>Welcome to Roll Manager</h1>
            </div>
            <div className='H_comp'>
                <button onClick={(e) => {startSection()}} className='button'>Click Here to start a section</button>
            </div>
        </header>
    )
}
export default Header;